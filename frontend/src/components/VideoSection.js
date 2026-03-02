import React from "react";

const VideoSection = () => {
  return (
    <div className="video-section-wrapper">
      <div className="container">
        <div className="video-section">
          <div className="ellipse blue"></div>
          <div className="ellipse violet"></div>
          
          <div className="video-section__inner">
            <h2 className="video-title">
              See <span>SEO PowerSuite</span> in action
            </h2>
            <div className="video-description">
              <p>Watch a quick video to fully understand the unbelievable capacity of our SEO software</p>
            </div>
            
            <div className="video-block">
              <iframe
                src="https://www.youtube.com/embed/abwS28oxnf0"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="SEO PowerSuite Demo"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
