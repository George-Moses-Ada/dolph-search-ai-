# Search APIs Integration

## API Requirements

### PubMed (E-utilities)
- **Base URL:** https://eutils.ncbi.nlm.nih.gov/entrez/eutils/
- **Authentication:** No API key required (but recommended for higher rate limits)
- **Rate Limit:** 3 requests/second without API key, 10/second with API key
- **Endpoints:**
  - `esearch.fcgi` - Search for articles
  - `efetch.fcgi` - Retrieve article details
- **Documentation:** https://www.ncbi.nlm.nih.gov/books/NBK25501/

### arXiv
- **Base URL:** http://export.arxiv.org/api/query
- **Authentication:** No API key required
- **Rate Limit:** No official limit, but be reasonable
- **Format:** Atom XML
- **Documentation:** https://arxiv.org/help/api/

### Semantic Scholar
- **Base URL:** https://api.semanticscholar.org/graph/v1
- **Authentication:** API key available for higher rate limits
- **Rate Limit:** 5 requests/minute without key, 100/minute with key
- **Endpoints:**
  - `/paper/search` - Search papers
  - `/paper/{paperId}` - Get paper details
- **Documentation:** https://api.semanticscholar.org/

### Europe PMC
- **Base URL:** https://www.ebi.ac.uk/europepmc/webservices/rest/search
- **Authentication:** No API key required
- **Rate Limit:** 10 requests/second
- **Format:** JSON or XML
- **Documentation:** https://www.ebi.ac.uk/europepmc/webservices/rest/

### CrossRef
- **Base URL:** https://api.crossref.org/works
- **Authentication:** No API key required (but recommended)
- **Rate Limit:** No official limit, but polite use expected
- **Documentation:** https://api.crossref.org/

### Scopus
- **Base URL:** https://api.elsevier.com/content/search/scopus
- **Authentication:** Requires API key and institutional token
- **Rate Limit:** Varies by subscription
- **Note:** Paid subscription required
- **Documentation:** https://dev.elsevier.com/

## Implementation Plan

1. Create a search service module to handle API calls
2. Implement each API integration
3. Create a unified search endpoint that aggregates results
4. Update frontend to display aggregated results
5. Add error handling and rate limiting
