import React from 'react';

const FeaturesSection = () => {
  const tools = [
    {
      title: "Rank Tracker",
      description: "Explore endless keyword ideas and track rankings in any search engine",
      image: "https://cdn1.link-assistant.com/app/pages/homepage/image/rt-image.svg",
      alt: "Rank tracker for rank monitoring and keyword research",
      icon: (
        <svg viewBox="0 0 48 48" width="100" height="100">
          <path d="M16 28L22 20L28 24L38 12" stroke="#4578fb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M32 12H38V18" stroke="#4578fb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      )
    },
    {
      title: "WebSite Auditor",
      description: "Run in-depth SEO audits with neat visualizations of your website structure.",
      image: "https://cdn1.link-assistant.com/app/pages/homepage/image/wa-image.svg",
      alt: "WebSite Auditor for comprehensive SEO audit and content analysis",
      icon: (
        <svg viewBox="0 0 48 48" width="100" height="100">
          <circle cx="24" cy="24" r="10" stroke="#10b981" strokeWidth="3" fill="none"/>
          <path d="M24 14V18M24 30V34M34 24H30M18 24H14" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "LinkAssistant",
      description: "Automate your link-building campaigns and outreach – all in one tool.",
      image: "https://cdn1.link-assistant.com/app/pages/homepage/image/la-image.svg",
      alt: "LinkAssistant for finding backlink prospects and planning outreach campaigns",
      icon: (
        <svg viewBox="0 0 48 48" width="100" height="100">
          <path d="M20 28L14 22L20 16M28 16L34 22L28 28M18 22H30" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      )
    },
    {
      title: "SEO SpyGlass",
      description: "Check backlinks from all angles using the biggest backlink index.",
      image: "https://cdn1.link-assistant.com/app/pages/homepage/image/sg-image.svg",
      alt: "SEO SpyGlass for backlink profile audit and backlink management",
      icon: (
        <svg viewBox="0 0 48 48" width="100" height="100">
          <rect x="10" y="10" width="28" height="28" rx="4" stroke="#f59e0b" strokeWidth="3" fill="none"/>
          <path d="M14 18H34M14 24H34M14 30H26" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">What's inside SEO PowerSuite software</h2>
          <p className="section-subtitle">
            Comprehensive SEO involves keyword research and rank tracking, on-site optimization, backlink analysis, and link building. The four tools inside SEO PowerSuite will make sure every step of your SEO campaign is taken care of.
          </p>
        </div>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-content">
                <div className="tool-header">
                  <div className="tool-icon">{tool.icon}</div>
                  <h3 className="tool-title">{tool.title}</h3>
                </div>
                <p className="tool-description">{tool.description}</p>
              </div>
              <div className="tool-image">
                <img src={tool.image} alt={tool.alt} width="614" height="280" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;