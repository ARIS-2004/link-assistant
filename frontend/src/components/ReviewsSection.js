import React from "react";

const ReviewsSection = () => {
  const reviews = [
    {
      image: "g2.png",
      stars: 4.5,
      count: "543 reviews",
      link: "https://www.g2.com/products/seo-powersuite/reviews",
      color: "#FF492C"
    },
    {
      image: "trustradius.png",
      stars: 4.5,
      count: "377 reviews",
      link: "https://www.getapp.com/marketing-software/a/seo-powersuite/",
      color: "#00B67A"
    },
    {
      image: "capptera.png",
      stars: 4.5,
      count: "377 reviews",
      link: "https://www.capterra.com/p/127616/SEO-PowerSuite/#about",
      color: "#FF9D28"
    },
    {
      image: "producthunt.png",
      badges: ["9 launches", "4 badges"],
      count: "191 reviews",
      link: "https://www.producthunt.com/products/seopowersuite",
      color: "#DA552F"
    }
  ];

  const renderStars = (rating, color) => {
    const stars = [];
    for (let i = 0; i < 4; i++) {
      stars.push(
        <svg key={i} className="star-icon" viewBox="0 0 18 17">
          <path d="M9.11183 0.71228L11.6416 5.86759L17.2983 6.69428L13.2051 10.7071L14.1714 16.3734L9.11183 13.6981L4.05231 16.3734L5.01859 10.7071L0.925354 6.69428L6.58207 5.86759L9.11183 0.71228Z" fill={color}/>
        </svg>
      );
    }
    stars.push(
      <svg key="half" className="star-icon" viewBox="0 0 17 16">
        <path d="M8.81419 0L11.344 5.15531L17.0007 5.982L12.9074 9.99485L13.8737 15.6611L8.81419 12.9859L3.75467 15.6611L4.72095 9.99485L0.627716 5.982L6.28443 5.15531L8.81419 0Z" fill={color} fillOpacity="0.3"/>
        <path d="M8.81419 0V12.9859L3.75467 15.6611L4.72095 9.99485L0.627716 5.982L6.28443 5.15531L8.81419 0Z" fill={color}/>
      </svg>
    );
    return stars;
  };

  return (
    <div className="reviews-container">
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="reviews__item">
            <div className="review-image">
              <img src={`/${review.image}`} alt="Review platform" />
            </div>
            <div className="review-content">
              {review.stars ? (
                <div className="review-stars">{renderStars(review.stars, review.color)}</div>
              ) : (
                <div className="review-badges">
                  {review.badges.map((badge, i) => (
                    <span key={i} className="badge">{badge}</span>
                  ))}
                </div>
              )}
              <a href={review.link} className="review-link" rel="nofollow" target="_blank">
                {review.count}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
