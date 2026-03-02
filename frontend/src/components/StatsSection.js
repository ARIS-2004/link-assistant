import React from 'react';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">2M+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500K+</div>
            <div className="stat-label">Websites Optimized</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.8/5</div>
            <div className="stat-label">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;