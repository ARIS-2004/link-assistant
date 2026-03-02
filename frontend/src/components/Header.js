import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');

  return (
    <header className="header">
      <div className="top-menu">
        <div className="container">
          <div className="top-menu__content">
            <a href="/" className="logo">
              <img src="/logo.png" alt="Logo" className="logo-icon" />
              <span className="logo-text">SEO <strong>PowerSuite</strong></span>
            </a>

            <nav className={`nav-menu ${menuOpen ? 'nav-menu--open' : ''}`}>
              <a href="/" className="nav-item">Home</a>
              
              <div className="nav-item dropdown">
                <span>Tools</span>
                <div className="dropdown-content">
                  <a href="/tools/rank-tracker">Rank Tracker</a>
                  <a href="/tools/website-auditor">Website Auditor</a>
                  <a href="/tools/seo-spyglass">SEO SpyGlass</a>
                  <a href="/tools/linkassistant">LinkAssistant</a>
                  <a href="/tools/keyword-research">Keyword Research</a>
                  <a href="/tools/backlink-checker">Backlink Checker</a>
                </div>
              </div>

              <div className="nav-item dropdown">
                <span>Features</span>
                <div className="dropdown-content">
                  <a href="/features/serp-tracking">SERP Tracking</a>
                  <a href="/features/site-audit">Site Audit</a>
                  <a href="/features/backlink-analysis">Backlink Analysis</a>
                  <a href="/features/content-optimizer">Content Optimizer</a>
                  <a href="/features/rank-tracking">Rank Tracking</a>
                  <a href="/features/link-building">Link Building</a>
                </div>
              </div>

              <a href="/pricing" className="nav-item">Pricing</a>
              
              <div className="nav-item dropdown">
                <span>Resources</span>
                <div className="dropdown-content">
                  <a href="/resources/seo-wiki">SEO Wiki</a>
                  <a href="/resources/video-tutorials">Video Tutorials</a>
                  <a href="/resources/user-manual">User Manual</a>
                  <a href="/resources/case-studies">Case Studies</a>
                  <a href="/resources/help-center">Help Center</a>
                </div>
              </div>

              <a href="/blog" className="nav-item">Blog</a>

              <div className="menu-header">
                <input type="email" placeholder="Enter your email" className="menu-email" />
                <button className="menu-download">Download Free</button>
              </div>
            </nav>

            <div className="header-actions">
              <div className={`search-box ${searchActive ? 'search-box--active' : ''}`}>
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-icon" onClick={() => setSearchActive(!searchActive)}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="lang-dropdown">
                <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
                  <div className="top-menu__lang-current">
                    <span>{selectedLang}</span>
                    <svg className="top-dropdown__arrow" viewBox="0 0 10 6" fill="currentColor">
                      <path d="M5 6L0 0h10L5 6z"/>
                    </svg>
                  </div>
                </button>
                {langOpen && (
                  <div className="lang-menu">
                    <div onClick={() => { setSelectedLang('English'); setLangOpen(false); }}>English</div>
                    <div onClick={() => { setSelectedLang('Español'); setLangOpen(false); }}>Español</div>
                    <div onClick={() => { setSelectedLang('Français'); setLangOpen(false); }}>Français</div>
                    <div onClick={() => { setSelectedLang('日本語'); setLangOpen(false); }}>日本語</div>
                    <div onClick={() => { setSelectedLang('Nederlands'); setLangOpen(false); }}>Nederlands</div>
                    <div onClick={() => { setSelectedLang('Deutsch'); setLangOpen(false); }}>Deutsch</div>
                    <div onClick={() => { setSelectedLang('Polski'); setLangOpen(false); }}>Polski</div>
                    <div onClick={() => { setSelectedLang('한국어'); setLangOpen(false); }}>한국어</div>
                    <div onClick={() => { setSelectedLang('Pусский'); setLangOpen(false); }}>Pусский</div>
                    <div onClick={() => { setSelectedLang('Português'); setLangOpen(false); }}>Português</div>
                    <div onClick={() => { setSelectedLang('Magyar'); setLangOpen(false); }}>Magyar</div>
                  </div>
                )}
              </div>
              
              <button className="btn-download">Download</button>
              
              <button className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
