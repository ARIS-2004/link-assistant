import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="top-menu">
      <a href="/" className="top-menu__logo">
        <span className="logo-text">SEO<strong>PowerSuite</strong></span>
      </a>

      <div className="top-menu__inner">
        <div className="top-menu__menu">
          <a href="/" className="top-menu__item top-menu__item_active">Home</a>
          
          <div className="top-dropdown" onMouseEnter={() => setActiveDropdown('tools')} onMouseLeave={() => setActiveDropdown(null)}>
            <span className="top-dropdown__inner">
              <span>Tools</span>
              <svg className="top-dropdown__arrow" width="6" height="5" viewBox="0 0 6 5">
                <path d="M3.38573 4.53233C3.18574 4.77481 2.81426 4.77481 2.61427 4.53233L0.210692 1.61814C-0.0582878 1.29202 0.173684 0.8 0.596418 0.8L5.40358 0.8C5.82632 0.8 6.05829 1.29202 5.78931 1.61814L3.38573 4.53233Z" fill="currentColor"/>
              </svg>
            </span>
            {activeDropdown === 'tools' && (
              <div className="top-dropdown__content">
                <a href="/rankdots" className="top-dropdown__item">
                  <strong>RankDots</strong>
                  <span>AI topic clustering and content generation</span>
                </a>
                <a href="/rank-tracker" className="top-dropdown__item">
                  <strong>Rank Tracker</strong>
                  <span>Rank tracking and keyword research</span>
                </a>
                <a href="/website-auditor" className="top-dropdown__item">
                  <strong>WebSite Auditor</strong>
                  <span>Technical and on-page SEO audit</span>
                </a>
                <a href="/seo-spyglass" className="top-dropdown__item">
                  <strong>SEO SpyGlass</strong>
                  <span>Backlink profile analysis</span>
                </a>
                <a href="/linkassistant" className="top-dropdown__item">
                  <strong>LinkAssistant</strong>
                  <span>Link building and management</span>
                </a>
              </div>
            )}
          </div>

          <div className="top-dropdown" onMouseEnter={() => setActiveDropdown('features')} onMouseLeave={() => setActiveDropdown(null)}>
            <span className="top-dropdown__inner">
              <span>Features</span>
              <svg className="top-dropdown__arrow" width="6" height="5" viewBox="0 0 6 5">
                <path d="M3.38573 4.53233C3.18574 4.77481 2.81426 4.77481 2.61427 4.53233L0.210692 1.61814C-0.0582878 1.29202 0.173684 0.8 0.596418 0.8L5.40358 0.8C5.82632 0.8 6.05829 1.29202 5.78931 1.61814L3.38573 4.53233Z" fill="currentColor"/>
              </svg>
            </span>
            {activeDropdown === 'features' && (
              <div className="top-dropdown__content top-dropdown__content_large">
                <div className="dropdown-section">
                  <h4>Rankings</h4>
                  <a href="/serp-analysis">SERP tracking/analysis</a>
                  <a href="/local-rankings">Local rank tracker</a>
                  <a href="/youtube-rank">YouTube Rank Tracker</a>
                </div>
                <div className="dropdown-section">
                  <h4>Keywords</h4>
                  <a href="/keyword-research">Keyword research tools</a>
                  <a href="/keyword-difficulty">Keyword Difficulty Checker</a>
                </div>
                <div className="dropdown-section">
                  <h4>Backlinks</h4>
                  <a href="/backlink-analysis">Backlink analysis</a>
                  <a href="/link-prospecting">Link prospecting</a>
                </div>
                <div className="dropdown-section">
                  <h4>Technical SEO</h4>
                  <a href="/site-audit">Site audit</a>
                  <a href="/page-speed">Page speed checker</a>
                </div>
              </div>
            )}
          </div>

          <a href="/pricing" className="top-menu__item">Pricing</a>

          <div className="top-dropdown" onMouseEnter={() => setActiveDropdown('resources')} onMouseLeave={() => setActiveDropdown(null)}>
            <span className="top-dropdown__inner">
              <span>Resources</span>
              <svg className="top-dropdown__arrow" width="6" height="5" viewBox="0 0 6 5">
                <path d="M3.38573 4.53233C3.18574 4.77481 2.81426 4.77481 2.61427 4.53233L0.210692 1.61814C-0.0582878 1.29202 0.173684 0.8 0.596418 0.8L5.40358 0.8C5.82632 0.8 6.05829 1.29202 5.78931 1.61814L3.38573 4.53233Z" fill="currentColor"/>
              </svg>
            </span>
            {activeDropdown === 'resources' && (
              <div className="top-dropdown__content">
                <div className="dropdown-section">
                  <h4>Learn SEO</h4>
                  <a href="/seo-academy">30-day SEO Plan for beginners</a>
                  <a href="/seo-workflow">A to Z SEO workflow</a>
                  <a href="/seo-wiki">SEO Wiki</a>
                </div>
              </div>
            )}
          </div>

          <a href="/blog" className="top-menu__item">Blog</a>
        </div>
      </div>

      <div className="top-menu__actions">
        <button className="top-menu__download">Download</button>
      </div>
    </div>
  );
};

export default Navigation;
