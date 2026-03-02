import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container-outer">
        <div className="footer__section">
          <div className="footer__item">
            <a href="/rank-tracker/" className="footer__title">
              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
              <span className="footer__top-text">Rank Tracker</span>
            </a>
            <ul className="footer__links">
              <li><a href="/rank-tracker/local-rankings.html" className="footer__link">Local Rank Checker</a></li>
              <li><a href="/rank-tracker/serp-analysis.html" className="footer__link">SERP Analyser</a></li>
              <li><a href="/rank-tracker/youtube-rank-checker.html" className="footer__link">YouTube Rank Checker</a></li>
              <li><a href="/rank-tracker/competitor-tracking.html" className="footer__link">Competitor Rank Tracker</a></li>
              <li><a href="/rank-tracker/google-rank-checker.html" className="footer__link">Google Rank Tracker</a></li>
            </ul>
          </div>

          <div className="footer__item">
            <a href="/linkassistant/" className="footer__title">
              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
              <span className="footer__top-text">LinkAssistant</span>
            </a>
            <ul className="footer__links">
              <li><a href="/linkassistant/email-scraper-tool.html" className="footer__link">Email Scraper Software</a></li>
              <li><a href="/linkassistant/link-prospecting-tool.html" className="footer__link">Outreach Software</a></li>
            </ul>
          </div>

          <div className="footer__item">
            <a href="/keyword-research/" className="footer__title">
              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              <span className="footer__top-text">Keyword Research</span>
            </a>
            <ul className="footer__links">
              <li><a href="/keyword-research/competitor-tool.html" className="footer__link">Find Competitors Keywords</a></li>
              <li><a href="/keyword-research/long-tail-keyword-research-tool.html" className="footer__link">Long-Tail SEO Tool</a></li>
              <li><a href="/keyword-research/keyword-grouper.html" className="footer__link">Keyword Grouping Tool</a></li>
              <li><a href="/keyword-research/keyword-difficulty-tool.html" className="footer__link">Keyword Difficulty Checker</a></li>
              <li><a href="/keyword-research/keyword-gap.html" className="footer__link">Keyword Gap Analysis</a></li>
              <li><a href="/keyword-research/youtube-keyword-tool.html" className="footer__link">YouTube Keyword Tool</a></li>
              <li><a href="/keyword-research/bing-keyword-tool.html" className="footer__link">Bing Keyword Tool</a></li>
            </ul>
          </div>

          <div className="footer__item">
            <a href="/website-auditor/" className="footer__title">
              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="footer__top-text">Website Auditor</span>
            </a>
            <ul className="footer__links">
              <li><a href="/website-auditor/seo-spider.html" className="footer__link">SEO Spider</a></li>
              <li><a href="/website-auditor/seo-content-editor.html" className="footer__link">SEO Content Editor</a></li>
              <li><a href="/website-auditor/xml-sitemap-generator.html" className="footer__link">XML Sitemap Generator</a></li>
              <li><a href="/website-auditor/robots-txt-generator.html" className="footer__link">Robots.txt Generator</a></li>
              <li><a href="/website-auditor/core-web-vitals-audit.html" className="footer__link">Core Web Vitals Audit Tool</a></li>
              <li><a href="/website-auditor/tf-idf-tool.html" className="footer__link">TF-IDF Tool</a></li>
              <li><a href="/website-auditor/site-visualizations.html" className="footer__link">Visual Sitemap Builder</a></li>
            </ul>
          </div>

          <div className="footer__item">
            <a href="/seo-spyglass/" className="footer__title">
              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              <span className="footer__top-text">SEO SpyGlass</span>
            </a>
            <ul className="footer__links">
              <li><a href="/seo-spyglass/free-backlink-checker-tool.html" className="footer__link">Free Backlink Checker</a></li>
              <li><a href="/seo-spyglass/bad-backlink-checker.html" className="footer__link">Bad Backlinks Checker</a></li>
            </ul>
          </div>

          <div className="footer__item">
            <a href="/seo-reports.html" className="footer__title">
              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
              <span className="footer__top-text">SEO Reports</span>
            </a>
            <ul className="footer__links">
              <li><a href="/seo-reports/ranking-report.html" className="footer__link">SEO Ranking Reports</a></li>
              <li><a href="/white-label-seo-software-reports.html" className="footer__link">White-Label SEO Software</a></li>
              <li><a href="/website-auditor/audit-report.html" className="footer__link">SEO Audit Report</a></li>
            </ul>
          </div>

          <div className="footer__item">
            <div className="footer__title">
              <span className="footer__top-text">Learn SEO</span>
            </div>
            <ul className="footer__links">
              <li><a href="/seo-workflow.html" className="footer__link">SEO Workflow</a></li>
              <li><a href="/video.html" className="footer__link">Video Tutorials</a></li>
              <li><a href="/learning-hub/seo-academy.html" className="footer__link">30 Days SEO Course</a></li>
            </ul>
          </div>

          <div className="footer__item">
            <div className="footer__title">
              <span className="footer__top-text">SEO PowerSuite Pack</span>
            </div>
            <ul className="footer__links">
              <li><a href="/google-penalty-checker.html" className="footer__link">Google Penalty Checker</a></li>
              <li><a href="/quick-domain-analysis-tool.html" className="footer__link">Quick Domain Authority Checker</a></li>
              <li><a href="/seo-competitor-analysis-tool.html" className="footer__link">SEO Competitor Analysis</a></li>
            </ul>
          </div>

          <div className="footer__item">
            <div className="footer__title">
              <span className="footer__top-text">Resources</span>
            </div>
            <ul className="footer__links">
              <li><a href="/news/" className="footer__link">SEO Blog</a></li>
              <li><a href="/seo-software/compare-seo-tools.html" className="footer__link">SEO Software Reviews</a></li>
              <li><a href="/news/seo-case-study/" className="footer__link">Case Studies</a></li>
              <li><a href="/seo-wiki/" className="footer__link">SEO Wiki</a></li>
              <li><a href="/free-tools/domain-authority-checker-tool.html" className="footer__link">Free Domain Authority Checker</a></li>
              <li><a href="/keyword-research/keyword-gap.html" className="footer__link">Free Keyword Gap Finder</a></li>
              <li><a href="/free-tools/case-converter.html" className="footer__link">Free Case Converter</a></li>
              <li><a href="/free-tools/word-counter.html" className="footer__link">Free Word Counter</a></li>
              <li><a href="https://rankdots.com/" target="_blank" rel="noopener noreferrer" className="footer__link">RankDots - AI SEO Tool</a></li>
              <li><a href="https://infatica.io/" target="_blank" rel="noopener noreferrer" className="footer__link">Infatica - Web Data Provider</a></li>
            </ul>
          </div>

          <div className="footer__item">
            <div className="footer__title">
              <span className="footer__top-text">Company</span>
            </div>
            <ul className="footer__links">
              <li><a href="/about-us.html" className="footer__link">About Us</a></li>
              <li><a href="/partners/affiliates.html" className="footer__link">Affiliate Program</a></li>
              <li><a href="/partners/" className="footer__link">Partner Programs</a></li>
              <li><a href="/press.html" className="footer__link">Press Room</a></li>
            </ul>
          </div>

          <div className="footer__item">
            <div className="footer__title">
              <span className="footer__top-text">Get in Touch</span>
            </div>
            <ul className="footer__links footer__links_social">
              <li>
                <a href="https://help.link-assistant.com/hc/en-us" target="_blank" rel="noopener noreferrer" className="footer__link footer__link_social">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="footer__social-text">Help & Training</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/linkassistant" target="_blank" rel="noopener noreferrer" className="footer__link footer__link_social">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="footer__social-text">Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/user/linkassistantvideos/" target="_blank" rel="noopener noreferrer" className="footer__link footer__link_social">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="footer__social-text">YouTube</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/seopowersuite" target="_blank" rel="noopener noreferrer" className="footer__link footer__link_social">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  <span className="footer__social-text">Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/seopowersuite" target="_blank" rel="noopener noreferrer" className="footer__link footer__link_social">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="footer__social-text">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__copyright">
          <div>Copyright © 2026,</div>
          <span className="footer__sitename">Link-Assistant.Com</span>
          <div className="footer__text"> — Home of the best Internet Marketing tools</div>
        </div>
        <div className="footer__policy-links">
          <a href="/privacy-policy.html" className="footer__link">Privacy Policy</a>
          <a href="/copyright-policy.html" className="footer__link">Copyright Policy</a>
          <a href="/return-policy.html" className="footer__link">Return Policy</a>
          <a href="/terms-of-services.html" className="footer__link">Terms of Services</a>
          <a href="/sitemap.html" className="footer__link">Sitemap</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;