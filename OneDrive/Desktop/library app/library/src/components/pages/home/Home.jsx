import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import Home_section from './home_section/Home_section';
import Books from './Books/Books';

const Home = () => {
  return (
    <div className='home'>
      <div className="home-container">
        <div className="home-header">
          <span><i>The free integrated library system - ILS</i></span>
          <h1>OPEN A FREE LIBRARY<br/>
            START MANAGING YOUR BOOKS</h1>
          <div className="header-buttpns">
            <div className="view-feauture">
              <button>View all Feauture</button>
            </div>
            <div className="crete-home">
            <Link to="/Signup"> <button>Create Free Library</button></Link>
            </div>
          </div>

        </div>
      </div>
      <Home_section/>
      <Books/>
    </div>
  )
}

export default Home;