import React, { useState } from "react";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = React.useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const tabsData = [
    {
      name: "Keyword research & competitor analysis",
      title: "Outrank your competitors with top keywords",
      text: "Boost your site's traffic with top keyword ideas and competitors' best practices. Discover what works best using tons of keyword research methods along with vital SEO metrics for each found keyword.",
      checks: [
        "Grow rankings with 20+ keyword research methods",
        "Discover your competitors' keyword strategies",
        "Explore SERP competition for every keyword"
      ]
    },
    {
      name: "Unlimited rank tracking in any location",
      title: "Track real-time rankings without limits",
      text: "Monitor your and your competitors' keyword rankings worldwide and locally, both on desktop and mobile devices. Spot any rank changes, compare positions, and stay aware of any SERP fluctuations.",
      checks: [
        "Track local rankings up to an exact street address",
        "Get detailed historical data on your organic performance",
        "Monitor rankings for unlimited keywords in 550+ search engines"
      ]
    },
    {
      name: "Custom SEO reports",
      title: "Tailor perfect SEO reports to share with clients",
      text: "Create detailed white-label reports to share SEO insights with your team or clients. Choose from 15 predefined report templates or build one from scratch to match your specific needs.",
      checks: [
        "Generate instant data-rich SEO reports for any website",
        "Add your own branding to form 100% white-label reports",
        "Get scheduled SEO reports, delivered straight to your inbox"
      ]
    },
    {
      name: "Technical SEO & content analysis",
      title: "Boost your site health & craft winning content",
      text: "Optimize every corner of your website, from title tags to internal links – our SEO platform audits any technical aspect of your website. Plus, get competition-based content optimization advice and write top-ranking content right in the app.",
      checks: [
        "Fix on-page and technical SEO issues to get more traffic",
        "Optimize your content with SEO-driven writing tips",
        "Visualize the entire site structure to spot linking issues"
      ]
    },
    {
      name: "Backlink analysis & link-building",
      title: "Build partnerships and grow authority",
      text: "Keep your backlink profile healthy and find new backlink prospects, whatever niche your website operates in. Detailed domain analysis included.",
      checks: [
        "Analyze your and your competitors' backlinks with ease",
        "Build high-quality backlinks using 10+ research methods",
        "Assess penalty risk for every potential backlink partner"
      ]
    }
  ];

  const tabs = [
    {
      name: "Keyword research & competitor analysis",
      iconGray: (
        <svg viewBox="0 0 48 48" className="icon">
          <path d="M24 8L28 16H36L30 22L32 30L24 26L16 30L18 22L12 16H20L24 8Z" stroke="#9ca3af" strokeWidth="2" fill="none"/>
        </svg>
      ),
      iconActive: (
        <svg viewBox="0 0 48 48" className="icon --is-active">
          <circle cx="24" cy="24" r="20" fill="url(#grad1)" opacity="0.2"/>
          <path d="M24 8L28 16H36L30 22L32 30L24 26L16 30L18 22L12 16H20L24 8Z" fill="url(#grad1)"/>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4578fb"/>
              <stop offset="100%" stopColor="#7c3aed"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Unlimited rank tracking in any location",
      iconGray: (
        <svg viewBox="0 0 48 48" className="icon">
          <path d="M16 28L22 20L28 24L38 12" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M32 12H38V18" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      iconActive: (
        <svg viewBox="0 0 48 48" className="icon --is-active">
          <circle cx="24" cy="24" r="20" fill="url(#grad3)" opacity="0.2"/>
          <path d="M16 28L22 20L28 24L38 12" stroke="url(#grad3)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M32 12H38V18" stroke="url(#grad3)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="100%" stopColor="#06b6d4"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Custom SEO reports",
      iconGray: (
        <svg viewBox="0 0 48 48" className="icon">
          <rect x="10" y="10" width="28" height="28" rx="4" stroke="#9ca3af" strokeWidth="2" fill="none"/>
          <path d="M14 18H34M14 24H34M14 30H26" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      iconActive: (
        <svg viewBox="0 0 48 48" className="icon --is-active">
          <rect x="10" y="10" width="28" height="28" rx="4" fill="url(#grad2)" opacity="0.2"/>
          <path d="M14 18H34M14 24H34M14 30H26" stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="32" cy="30" r="4" fill="url(#grad2)"/>
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#ef4444"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Technical SEO & content analysis",
      iconGray: (
        <svg viewBox="0 0 48 48" className="icon">
          <circle cx="24" cy="24" r="10" stroke="#9ca3af" strokeWidth="2" fill="none"/>
          <path d="M24 14V18M24 30V34M34 24H30M18 24H14" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="3" fill="#9ca3af"/>
        </svg>
      ),
      iconActive: (
        <svg viewBox="0 0 48 48" className="icon --is-active">
          <circle cx="24" cy="24" r="20" fill="url(#grad5)" opacity="0.2"/>
          <circle cx="24" cy="24" r="10" stroke="url(#grad5)" strokeWidth="3" fill="none"/>
          <path d="M24 14V18M24 30V34M34 24H30M18 24H14" stroke="url(#grad5)" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="3" fill="url(#grad5)"/>
          <defs>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316"/>
              <stop offset="100%" stopColor="#dc2626"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Backlink analysis & link-building",
      iconGray: (
        <svg viewBox="0 0 48 48" className="icon">
          <path d="M20 28L14 22L20 16M28 16L34 22L28 28M18 22H30" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      iconActive: (
        <svg viewBox="0 0 48 48" className="icon --is-active">
          <circle cx="24" cy="24" r="20" fill="url(#grad4)" opacity="0.2"/>
          <path d="M20 28L14 22L20 16M28 16L34 22L28 28M18 22H30" stroke="url(#grad4)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section className="tabs-section">
      <div className="container">
        <div className="tab-box">
          <div 
            className="tabs-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <div className="tab-button__box">
                  <div className="img">
                    {tab.iconGray}
                    {tab.iconActive}
                  </div>
                  <div className="tab__name">{tab.name}</div>
                  <div className="line-container">
                    <div className="line"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="tabs-content">
            {tabsData.map((tabData, index) => (
              <div key={index} className={`tab ${activeTab === index ? "active" : ""}`}>
                <div className="content">
                  <div className="content__p">
                    <h2 className="title">{tabData.title}</h2>
                    <p className="text">{tabData.text}</p>
                    <div className="check_list">
                      {tabData.checks.map((check, i) => (
                        <div key={i} className="check_list__item">
                          <div className="icon__box">
                            <svg className="icon" viewBox="0 0 16 17" fill="currentColor">
                              <path d="M3.24471 7.78166C2.84436 7.3813 2.19525 7.3813 1.79489 7.78166C1.39453 8.18202 1.39453 8.83113 1.79489 9.23149L5.32676 12.7633C5.82163 13.2582 6.62397 13.2582 7.11884 12.7633L14.2051 5.67715C14.6054 5.27679 14.6054 4.62768 14.2051 4.22732C13.8047 3.82697 13.1556 3.82697 12.7552 4.22732L6.22284 10.7598L3.24471 7.78166Z"/>
                            </svg>
                          </div>
                          <span className="content">{check}</span>
                        </div>
                      ))}
                    </div>
                    <button className="button">Download for FREE</button>
                  </div>
                  <div className="content__image">
                    <img 
                      src={`https://cdn1.link-assistant.com/app/pages/homepage/image/screen-tab-${index + 1}@1x.svg`}
                      alt={tabData.title}
                      width="541"
                      height="449"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
