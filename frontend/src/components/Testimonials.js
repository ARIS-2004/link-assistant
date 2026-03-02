import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      name: "Matthew Woodward",
      title: "Internet Marketer, Blogger",
      website: "matthewwoodward.co.uk",
      image: "https://cdn1.link-assistant.com/app/pages/homepage/image/Matthew-Woodward.png",
      text: "I consider SEO PowerSuite to be central to my online business. I have been using the tools for a number of years and they have paid for themselves multiple times over. It really is the best 'all in one' suite of SEO tools that I use on a daily basis."
    },
    {
      name: "Andy Drinkwater",
      title: "SEO consultant",
      website: "www.iqseo.org",
      image: "https://cdn1.link-assistant.com/app/pages/homepage/image/Andy-Drinkwater.png",
      text: "Having helped countless companies unravel website issues through SEO auditing, it helps to know you have the best tools behind you, and that is exactly what I strive to find. SEO PowerSuite is certainly one tool that I can recommend to anyone who is serious about their SEO."
    },
    {
      name: "Robyn Winner",
      title: "Sr. Campaign Manager Webmarketing",
      website: "",
      image: "https://cdn1.link-assistant.com/app/pages/homepage/image/Robyn-Winner.png",
      text: "SEO PowerSuite has been a game-changer for us. At the click of a button we can get a clear picture of our clients' presence online, from a ranking to a linking standpoint. All this data is easy to manage and digest, making for a seamless user experience."
    },
    {
      name: "Chuck Siegel",
      title: "CEO Rule Your Kingdom",
      website: "",
      image: "https://cdn1.link-assistant.com/app/pages/homepage/image/Chuck-Siegel.png",
      text: "Over the years, we've tried various SEO tools. None come close to SEO PowerSuite. These tools provide functionality we can't find anywhere else, at a price that is far less than other comparable solutions."
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-heading">Why SEO PowerSuite Tools?</h2>
        <p className="testimonials-subheading">
          Over 2 million users grew their businesses with SEO PowerSuite software. We couldn't put it better than SEO professionals who use our software.
        </p>
        
        <div className="testimonials-carousel">
          <div className="testimonials-slider" style={{transform: `translateX(-${activeSlide * 100}%)`}}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonials-grid">
                <div className="testimonial-card">
                  <div className="testimonials-quotes">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <path d="M13 32c0-7.18 5.82-13 13-13v-6C16.477 13 8 21.477 8 31v16h18V32H13zm28 0c0-7.18 5.82-13 13-13v-6c-9.523 0-18 8.477-18 18v16h18V32H41z" fill="#ff4a72"/>
                    </svg>
                  </div>
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.title}</span>
                    {testimonial.website && <div className="testimonial-link">{testimonial.website}</div>}
                  </div>
                  <blockquote className="testimonial-quote">
                    "{testimonial.text}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`slider-dot ${activeSlide === index ? 'slider-dot-active' : ''}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
