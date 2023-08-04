import React from 'react';
import './About.css';
//import quizImage from './quiz_image.jpg'; // Make sure to import the image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Our IT Quiz</h2>
        <p className="about-description">Welcome to the world of tech and IT knowledge! Our IT Quiz is designed to challenge and enhance your IT skills, whether you're a seasoned developer or a curious beginner.</p>
        
        <div className="feature-section">
          <h3 className="feature-title">Key Features:</h3>
          <ul className="feature-list">
            <li>Wide Range of Topics: Test your knowledge on programming and more.</li>
            <li>Challenging Quizzes: Engage in thought-provoking quizzes</li>.
            <li>Real-time Feedback: Receive instant feedback and explanations.</li>
          </ul>
        </div>
        
        <p className="about-description">Our quizzes are meticulously crafted by experts in the field, ensuring accurate and up-to-date information. So, whether you're looking to assess your skills or learn something new, you're in the right place!</p>
      </div>
      <div className="about-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZD3tkS5MFg618u2O3Su9HJQPwnHdzejArDw&usqp=CAU" alt="Quiz" />
      </div>
    </div>
  );
};

export default About;
