import React from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is SEO PowerSuite?",
      answer: "SEO PowerSuite is a toolkit consisting of four tools that cover every aspect of SEO (search engine optimization): keywords, rankings, backlinks, on-page and content data, mobile SEO, local SEO, social media, analytics, and reports."
    },
    {
      question: "What tools are included in SEO PowerSuite?",
      answer: "SEO PowerSuite is made up of 4 tools: Rank Tracker for rank tracking and keyword research, WebSite Auditor with a powerful SEO spider for on-page SEO and technical SEO audit, SEO SpyGlass for backlink research, and LinkAssistant for link building and outreach. Besides, there is a fresh online backlink checker."
    },
    {
      question: "Can I use SEO PowerSuite for free?",
      answer: "Yes, you can! The tools have a free version, limited in some SEO functions, but perfectly suitable for initial SEO analysis and some of the basic SEO tasks. The free version isn't limited by time."
    },
    {
      question: "Is there customer support available?",
      answer: "Yup! There is a live support button on the lower right of this very page! On top of that, you can submit a ticket through the website, or indeed through the software itself. Besides, our team is here with tutorials, webinars, and information from trusted sources to help you grow from a beginner to an advanced SEO specialist. You will discover that our SEO platform has a steep learning curve."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">FAQ</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">{faq.question}</div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;