import React from 'react';
import './FeaturesGrid.css';

const FeaturesGrid = () => {
  const features = [
    {
      title: 'No limits',
      description: 'With SEO PowerSuite, you get unlimited SEO data (keywords, backlinks, etc.) without worrying about your daily credit limit.'
    },
    {
      title: 'All-in-one SEO software',
      description: 'SEO PowerSuite got everything crucial for the SEO industry: from rank tracking and SEO audits to automated alerts and custom reports.'
    },
    {
      title: 'Honest pricing',
      description: 'SEO PowerSuite is a desktop tool, so you don\'t have to pay millions for server storage. You pay for data and cool features. That\'s it.'
    },
    {
      title: '100% customizable',
      description: 'Want to track positions in a local engine? Here you are. Need extra settings for crawler behavior? We\'ve got this, too. We have it all.'
    }
  ];

  return (
    <div className="features-grid-section">
      <div className="content-container">
        <h2 className="section-title">Why people love SEO PowerSuite</h2>
        <p className="section-subtitle">
          Users all around the world choose SEO PowerSuite software, and here's why.
        </p>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="reviews-section">
          <div className="review-item">
            <div className="stars">★★★★½</div>
            <a href="#" className="review-link">543 reviews</a>
            <span className="review-source">G2</span>
          </div>
          <div className="review-item">
            <div className="stars">★★★★½</div>
            <a href="#" className="review-link">377 reviews</a>
            <span className="review-source">GetApp</span>
          </div>
          <div className="review-item">
            <div className="stars">★★★★½</div>
            <a href="#" className="review-link">377 reviews</a>
            <span className="review-source">Capterra</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
