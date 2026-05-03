const axios = require('axios');

class SearchService {
    // PubMed API
    async searchPubMed(query) {
        try {
            const searchUrl = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi';
            const searchParams = new URLSearchParams({
                db: 'pubmed',
                term: query,
                retmode: 'json',
                retmax: 20
            });

            const searchResponse = await axios.get(`${searchUrl}?${searchParams}`);
            const idList = searchResponse.data.esearchresult?.idlist || [];

            if (idList.length === 0) {
                return [];
            }

            // Fetch details for each ID
            const fetchUrl = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi';
            const fetchParams = new URLSearchParams({
                db: 'pubmed',
                id: idList.join(','),
                retmode: 'json'
            });

            const fetchResponse = await axios.get(`${fetchUrl}?${fetchParams}`);
            const result = fetchResponse.data.result;
            
            // Convert result object to array, excluding the 'uids' key
            const articles = Object.keys(result)
                .filter(key => key !== 'uids')
                .map(key => result[key]);

            return articles.map(article => this.parsePubMedArticle(article));
        } catch (error) {
            console.error('PubMed API error:', error.message);
            return [];
        }
    }

    parsePubMedArticle(article) {
        return {
            source: 'PubMed',
            id: article.uid || '',
            title: article.title || 'No title',
            authors: Array.isArray(article.authors) 
                ? article.authors.map(a => a.name).join(', ') 
                : (article.authors?.authorlist?.author || []).map(a => `${a.lastname} ${a.initials}`).join(', '),
            abstract: '', // esummary doesn't provide abstracts
            journal: article.source || '',
            publicationDate: article.pubdate || '',
            url: `https://pubmed.ncbi.nlm.nih.gov/${article.uid}/`,
            doi: article.elocationid || ''
        };
    }

    parseAuthors(authors) {
        if (!authors) return [];
        return authors.map(author => {
            const lastName = author['LastName'] || '';
            const initials = author['Initials'] || '';
            return `${lastName} ${initials}`.trim();
        }).join(', ');
    }

    parseAbstract(abstractText) {
        if (!abstractText) return '';
        if (Array.isArray(abstractText)) {
            return abstractText.map(text => typeof text === 'object' ? text['#text'] : text).join(' ');
        }
        return abstractText;
    }

    // arXiv API
    async searchArXiv(query) {
        try {
            const url = 'https://export.arxiv.org/api/query';
            const params = new URLSearchParams({
                search_query: `all:${query}`,
                start: 0,
                max_results: 20
            });

            const response = await axios.get(`${url}?${params}`, {
                headers: { 'Accept': 'application/xml' }
            });

            return await this.parseArXivResponse(response.data);
        } catch (error) {
            console.error('arXiv API error:', error.message);
            return [];
        }
    }

    parseArXivResponse(xmlString) {
        const xml2js = require('xml2js');
        let results = [];

        return new Promise((resolve) => {
            xml2js.parseString(xmlString, (err, result) => {
                if (err) {
                    console.error('XML parsing error:', err);
                    resolve([]);
                    return;
                }

                const entries = result.feed?.entry || [];
                const entriesArray = Array.isArray(entries) ? entries : [entries];

                results = entriesArray.map(entry => {
                    const authors = entry.author || [];
                    const authorList = Array.isArray(authors) ? authors : [authors];
                    const entryId = Array.isArray(entry.id) ? entry.id[0] : entry.id;

                    return {
                        source: 'arXiv',
                        id: entryId?.split('/').pop() || '',
                        title: Array.isArray(entry.title) ? entry.title[0] : (entry.title || 'No title'),
                        authors: authorList.map(a => a.name?.[0] || '').join(', '),
                        abstract: Array.isArray(entry.summary) ? entry.summary[0] : (entry.summary || ''),
                        journal: 'arXiv',
                        publicationDate: Array.isArray(entry.published) ? entry.published[0]?.split('T')[0] : (entry.published?.split('T')[0] || ''),
                        url: entryId || '',
                        doi: entry['arxiv:doi']?.[0] || ''
                    };
                });

                resolve(results);
            });
        });
    }

    // Semantic Scholar API
    async searchSemanticScholar(query) {
        try {
            const url = 'https://api.semanticscholar.org/graph/v1/paper/search';
            const params = new URLSearchParams({
                query: query,
                limit: 20,
                fields: 'paperId,title,abstract,authors,year,url,venue,journal,doi,citationCount'
            });

            const response = await axios.get(`${url}?${params}`);
            
            if (!response.data.data || !Array.isArray(response.data.data)) {
                console.log('Semantic Scholar response structure:', JSON.stringify(response.data, null, 2));
                return [];
            }

            return response.data.data.map(paper => ({
                source: 'Semantic Scholar',
                id: paper.paperId || '',
                title: paper.title || 'No title',
                authors: Array.isArray(paper.authors) ? paper.authors.map(a => a.name).join(', ') : '',
                abstract: paper.abstract || '',
                journal: paper.venue || paper.journal?.name || '',
                publicationDate: paper.year?.toString() || '',
                url: paper.url || '',
                doi: paper.doi || ''
            }));
        } catch (error) {
            console.error('Semantic Scholar API error:', error.message);
            if (error.response) {
                console.log('Semantic Scholar response status:', error.response.status);
                console.log('Semantic Scholar response data:', error.response.data);
            }
            return [];
        }
    }

    // Europe PMC API
    async searchEuropePMC(query) {
        try {
            const url = 'https://www.ebi.ac.uk/europepmc/webservices/rest/search';
            const params = new URLSearchParams({
                query: query,
                resulttype: 'core',
                format: 'json',
                pageSize: 20,
                cursorMark: '*'
            });

            const response = await axios.get(`${url}?${params}`);
            const results = response.data.resultList?.result || [];

            return results.map(result => ({
                source: 'Europe PMC',
                id: result.id,
                title: result.title || 'No title',
                authors: result.authorString || '',
                abstract: result.abstractText || '',
                journal: result.journalTitle || '',
                publicationDate: result.pubYear || '',
                url: `https://europepmc.org/article/${result.id}`,
                doi: result.doi || ''
            }));
        } catch (error) {
            console.error('Europe PMC API error:', error.message);
            return [];
        }
    }

    // CrossRef API
    async searchCrossRef(query) {
        try {
            const url = 'https://api.crossref.org/works';
            const params = new URLSearchParams({
                query: query,
                rows: 20,
                select: 'title,author,abstract,published-print,DOI,URL,container-title'
            });

            const response = await axios.get(`${url}?${params}`, {
                headers: { 
                    'Accept': 'application/json',
                    'User-Agent': 'DolphSearch/1.0 (mailto:contact@example.com)'
                }
            });

            const items = response.data.message?.items || [];

            return items.map(item => {
                const authors = item.author || [];
                const authorList = Array.isArray(authors) ? authors : [authors];

                return {
                    source: 'CrossRef',
                    id: item.DOI || '',
                    title: Array.isArray(item.title) ? item.title[0] : (item.title || 'No title'),
                    authors: authorList.map(a => `${a.given} ${a.family}`).join(', '),
                    abstract: item.abstract || '',
                    journal: Array.isArray(item['container-title']) ? item['container-title'][0] : (item['container-title'] || ''),
                    publicationDate: item['published-print']?.['date-parts']?.[0]?.[0]?.toString() || '',
                    url: item.URL || '',
                    doi: item.DOI || ''
                };
            });
        } catch (error) {
            console.error('CrossRef API error:', error.message);
            if (error.response) {
                console.log('CrossRef response status:', error.response.status);
                console.log('CrossRef response data:', error.response.data);
            }
            return [];
        }
    }

    // Scopus API (Note: Requires API key - placeholder implementation)
    async searchScopus(query, apiKey, instToken) {
        try {
            if (!apiKey || !instToken) {
                console.warn('Scopus API key not provided, skipping Scopus search');
                return [];
            }

            const url = 'https://api.elsevier.com/content/search/scopus';
            const params = new URLSearchParams({
                query: query,
                count: 20,
                httpAccept: 'application/json'
            });

            const response = await axios.get(`${url}?${params}`, {
                headers: {
                    'Accept': 'application/json',
                    'X-ELS-APIKey': apiKey,
                    'X-ELS-InstToken': instToken
                }
            });

            const entries = response.data['search-results']?.entry || [];

            return entries.map(entry => ({
                source: 'Scopus',
                id: entry['dc:identifier']?.replace('SCOPUS_ID:', '') || '',
                title: entry['dc:title'] || 'No title',
                authors: entry['dc:creator'] || '',
                abstract: entry['prism:description'] || '',
                journal: entry['prism:publicationName'] || '',
                publicationDate: entry['prism:coverDate']?.substring(0, 4) || '',
                url: entry['prism:url'] || '',
                doi: entry['dc:identifier']?.find(id => id.startsWith('DOI:'))?.replace('DOI:', '') || ''
            }));
        } catch (error) {
            console.error('Scopus API error:', error.message);
            return [];
        }
    }

    // Unified search
    async searchAll(query, sources = ['PubMed', 'arXiv', 'Semantic Scholar', 'Europe PMC', 'CrossRef'], scopusKeys = null) {
        const results = [];

        if (sources.includes('PubMed')) {
            const pubmedResults = await this.searchPubMed(query);
            results.push(...pubmedResults);
        }

        if (sources.includes('arXiv')) {
            const arxivResults = await this.searchArXiv(query);
            results.push(...arxivResults);
        }

        if (sources.includes('Semantic Scholar')) {
            const semanticResults = await this.searchSemanticScholar(query);
            results.push(...semanticResults);
        }

        if (sources.includes('Europe PMC')) {
            const europeResults = await this.searchEuropePMC(query);
            results.push(...europeResults);
        }

        if (sources.includes('CrossRef')) {
            const crossrefResults = await this.searchCrossRef(query);
            results.push(...crossrefResults);
        }

        if (sources.includes('Scopus') && scopusKeys) {
            const scopusResults = await this.searchScopus(query, scopusKeys.apiKey, scopusKeys.instToken);
            results.push(...scopusResults);
        }

        return results;
    }
}

module.exports = new SearchService();
