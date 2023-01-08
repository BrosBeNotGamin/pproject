import React from 'react'
import './Hero.scss'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-txt">
        <h1>
          IMPROVE YOUR <br /> COGNITIVE SKILLS.
        </h1>
        <p>
          Quiz games improve concentration, identify knowledge gaps, boost
          confidence, and help retain information. They're also entertaining!
        </p>
        <Link to="/quiz">
          <button>Get Started</button>
        </Link>
      </div>
      <img className="hero-img" src="/cat.jpg" alt="" />
    </div>
  );
}

export default Hero