import React from 'react';
import './aboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to our blogging platform! We are a passionate team dedicated to sharing knowledge,
        experiences, and stories with the world. Whether it's tech, travel, recipes, or lifestyle,
        we have a diverse range of content for you to explore.
      </p>
      <p>
        Our mission is to inspire and connect people through meaningful and engaging content.
        Join us on this journey, and feel free to explore our blogs and share your thoughts in the comments.
      </p>
      <p>Thank you for being a part of our community!</p>
      
      {/* Social media links */}
      <div className="social-links">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        {/* Add more social media links as needed */}
      </div>
    </div>
  );
}

export default AboutUs;
