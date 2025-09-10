import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/nav-logo.svg'
import { Link } from 'react-router-dom'
import { context } from '../../context/Context'

const Navbar = ({ setLogin, setCreateuser, create }) => {
    const { profile, setProfile } = useContext(context)
    console.log(profile);

    return (
        <>
            <div className='navbar-one'>
                <div className="nav-items">
                    <div className="left-nav">
                      <Link to="/">  <img src={logo} alt="" /></Link>
                    </div>
                    <div className="right-nav">
                        <div className="right-nav-create-btn">
                            <Link to="/Signup"><button onClick={() => setCreateuser(true)}>Create Library</button></Link>
                        </div>
                        <div className="right-nav-login-btn">
                            {profile==="true" ? <button onClick={() => setLogin(true)}>Login</button> :<button>Logout</button>}

                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-two">
                <div className="navbar-two-items">
                    <div className="home-btn">
                        <Link to="/"> <button>Home</button> </Link>
                    </div>
                    <div className="feauture-btn">
                        <Link to="/Feature"><button>Fauture</button></Link>
                    </div>
                    <div className="plan-btn">
                        <Link to="/Plan"><button>Plan</button></Link>
                    </div>
                    <div className="upgrade-btn">
                        <Link to="/Upgrade"> <button>Upgrade</button></Link>
                    </div>
                    <div className="article-btn">
                        <Link to="/Article"><button>Article</button></Link>
                    </div>
                    <div className="discover">
                        <Link to="/Discover"><button>Discover</button></Link>
                    </div>
                    <div className="faqs">
                        <Link to="/Faqs"><button>FAQs</button></Link>
                    </div>
                    <div className="signup-btn">
                        <Link to="/Signup"> <button>Create Library</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar