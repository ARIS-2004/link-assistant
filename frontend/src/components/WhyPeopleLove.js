import React from "react";
import ReviewsSection from "./ReviewsSection";

const WhyPeopleLove = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 64 64" className="icon">
          <circle cx="32" cy="32" r="28" fill="url(#grad-unlimited)" opacity="0.2"/>
          <path d="M32 12V20M32 44V52M52 32H44M20 32H12" stroke="url(#grad-unlimited)" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="12" stroke="url(#grad-unlimited)" strokeWidth="3" fill="none"/>
          <defs>
            <linearGradient id="grad-unlimited" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4578fb"/>
              <stop offset="100%" stopColor="#7c3aed"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "No limits",
      text: "With SEO PowerSuite, you get unlimited SEO data (keywords, backlinks, etc.) without worrying about your daily credit limit."
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" className="icon">
          <rect x="12" y="12" width="40" height="40" rx="6" fill="url(#grad-allinone)" opacity="0.2"/>
          <path d="M20 24H44M20 32H44M20 40H36" stroke="url(#grad-allinone)" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="42" cy="40" r="5" fill="url(#grad-allinone)"/>
          <defs>
            <linearGradient id="grad-allinone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="100%" stopColor="#06b6d4"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "All-in-one SEO software",
      text: "SEO PowerSuite got everything crucial for the SEO industry: from rank tracking and SEO audits to automated alerts and custom reports."
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" className="icon">
          <circle cx="32" cy="32" r="28" fill="url(#grad-pricing)" opacity="0.2"/>
          <path d="M32 16V24M28 28H36M32 32V48" stroke="url(#grad-pricing)" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="32" cy="28" r="8" stroke="url(#grad-pricing)" strokeWidth="3" fill="none"/>
          <defs>
            <linearGradient id="grad-pricing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#ef4444"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Honest pricing",
      text: "SEO PowerSuite is a desktop tool, so you don't have to pay millions for server storage. You pay for data and cool features. That's it."
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" className="icon">
          <circle cx="32" cy="32" r="28" fill="url(#grad-custom)" opacity="0.2"/>
          <path d="M20 32L28 40L44 24" stroke="url(#grad-custom)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="32" cy="32" r="20" stroke="url(#grad-custom)" strokeWidth="3" fill="none"/>
          <defs>
            <linearGradient id="grad-custom" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "100% customizable",
      text: "Want to track positions in a local engine? Here you are. Need extra settings for crawler behavior? We've got this, too. We have it all."
    }
  ];

  return (
    <section className="why-people-love">
      <div className="container">
        <div className="why-header">
          <h2 className="why-title">Why people love SEO PowerSuite</h2>
          <p className="why-subtitle">
            Users all around the world choose SEO PowerSuite software, and here's why. 
            P.S. All the points are based on thousands of customer interviews.
          </p>
        </div>
        <div className="why-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-card">
              <div className="why-card-icon">{feature.icon}</div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-text">{feature.text}</p>
            </div>
          ))}
        </div>
        <ReviewsSection />
      </div>
    </section>
  );
};

export default WhyPeopleLove;
