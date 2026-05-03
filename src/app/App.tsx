import { useState } from 'react';
import { Search, Menu, X, Clock, Image as ImageIcon, Settings, HelpCircle, BarChart3, Zap, CheckCircle } from 'lucide-react';
import svgPaths from "../imports/1440WLight/svg-xkr0ows8c5";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar - Desktop */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#f9f9f9] border-r border-[rgba(13,13,13,0.05)]
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 h-[52px]">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[rgba(158,169,251,0.13)] rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#2563EB" stroke="#2563EB" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="8" r="2" fill="#DBEAFE"/>
                  <path d="M8 14C8 14 10 16 12 16C14 16 16 14 16 14" stroke="#434348" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="9" cy="10" r="1" fill="#434348"/>
                  <circle cx="15" cy="10" r="1" fill="#434348"/>
                </svg>
              </div>
              <span className="font-semibold text-base">Dolph Search</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-gray-200 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-2">
            <button className="w-full flex items-center gap-2 px-3 py-2 bg-[#2563eb] text-white rounded-lg mb-1">
              <Search className="w-5 h-5" />
              <span className="text-sm">New chat</span>
            </button>

            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-200 rounded-lg">
              <Clock className="w-5 h-5 text-[#0d0d0d]" />
              <span className="text-sm text-[#0d0d0d]">History</span>
            </button>

            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-200 rounded-lg mt-1">
              <ImageIcon className="w-5 h-5 text-[#0d0d0d]" />
              <span className="text-sm text-[#0d0d0d]">Images</span>
            </button>
          </nav>

          {/* Bottom section */}
          <div className="border-t border-[rgba(13,13,13,0.05)] p-2">
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-200 rounded-lg text-left">
              <BarChart3 className="w-5 h-5 text-[#0d0d0d]" />
              <span className="text-sm text-[#0d0d0d]">See plans and pricing</span>
            </button>

            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-200 rounded-lg text-left">
              <Settings className="w-5 h-5 text-[#0d0d0d]" />
              <span className="text-sm text-[#0d0d0d]">Settings</span>
            </button>

            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-200 rounded-lg text-left">
              <HelpCircle className="w-5 h-5 text-[#0d0d0d]" />
              <span className="text-sm text-[#0d0d0d]">Help</span>
            </button>

            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-sm font-bold text-[#0d0d0d] mb-2">Get responses tailored to you</p>
              <p className="text-sm text-[#8f8f8f] mb-4">Log in to get answers based on your inputs, plus upload files.</p>
              <button className="w-full bg-[#2563eb] text-white py-2 px-4 rounded-full text-sm hover:bg-blue-600">
                Log in
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-[52px] bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <button className="bg-[#2563eb] text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600">
              Log in
            </button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-50">
              Sign up for free
            </button>
          </div>
        </header>

        {/* Main content area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-8 lg:py-16">
            {/* Hero section */}
            <div className="text-center mb-12 lg:mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
                Dolph Search
              </h1>
              <p className="text-lg text-[#4b5563] max-w-3xl mx-auto mb-8">
                Get evidence-based answers from academic papers, citations etc. with AI-powered research assistance
              </p>

              {/* Search bar */}
              <div className="flex flex-col sm:flex-row gap-2 max-w-3xl mx-auto">
                <input
                  type="text"
                  placeholder="Ask a research question (e.g., 'Does intermittent fasting improve metabolic health?')"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="px-4 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Search</option>
                  <option>PubMed</option>
                  <option>arXiv</option>
                  <option>Semantic Scholar</option>
                </select>
                <button className="bg-[#2563eb] text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
                <div className="w-12 h-12 bg-[#dbeafe] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="font-bold text-base mb-2">AI-Powered Search</h3>
                <p className="text-sm text-[#4b5563]">
                  Search millions of academic papers from PubMed, arXiv, Semantic Scholar, and more
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
                <div className="w-12 h-12 bg-[#dcfce7] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-[#16a34a]" />
                </div>
                <h3 className="font-bold text-base mb-2">Evidence Analysis</h3>
                <p className="text-sm text-[#4b5563]">
                  Get consensus answers with confidence scores based on multiple research studies
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
                <div className="w-12 h-12 bg-[#f3e8ff] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-[#9333ea]" />
                </div>
                <h3 className="font-bold text-base mb-2">Fast Results</h3>
                <p className="text-sm text-[#4b5563]">
                  Get comprehensive answers with citations in seconds, not hours
                </p>
              </div>
            </div>

            {/* How it works */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#111827] mb-8">How It Works</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h3 className="font-bold text-base mb-2">Ask Question</h3>
                  <p className="text-sm text-[#4b5563]">
                    Type your research question in natural language
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    2
                  </div>
                  <h3 className="font-bold text-base mb-2">Search Papers</h3>
                  <p className="text-sm text-[#4b5563]">
                    AI searches multiple academic databases simultaneously
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    3
                  </div>
                  <h3 className="font-bold text-base mb-2">Analyze Evidence</h3>
                  <p className="text-sm text-[#4b5563]">
                    Extract key findings and detect consensus across studies
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    4
                  </div>
                  <h3 className="font-bold text-base mb-2">Get Answer</h3>
                  <p className="text-sm text-[#4b5563]">
                    Receive evidence-based answer with citations & download to file
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
