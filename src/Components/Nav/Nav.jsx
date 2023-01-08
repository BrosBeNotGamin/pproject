import React from 'react';
import { useState } from "react";
import './Nav.scss'
import { Link } from 'react-router-dom';


const Nav = () => {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <nav>
      <Link to="/">
        <h1 className="nav-logo">QuizApp</h1>
      </Link>
      <div className="nav-btn-c">
        <Link to="/quiz">
          <button id="btn-signUp">Get Started</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav