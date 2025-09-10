import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-items">
                <div className="left-footer">
                    <div className="left-footer-upper">
                        <Link to="/"> <h4>LibraryIn</h4></Link>
                        <p>Library Management Software</p>
                        <div className="logos">
                            <div className="facebook-logo">
                                <a href=""><i class="fa-brands fa-square-facebook"></i></a>
                            </div>
                            <div className="twitter-logo">
                                <a href=""><i class="fa-brands fa-twitter"></i></a>
                            </div>
                            <div className="google-logo">
                                <i class="fa-brands fa-square-google-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="left-footer-bottom">


                        <div className="copy-right">
                            <span>© 2025 Librarika.com, All rights reserved.</span>
                        </div>

                    </div>

                </div>
                <div className="middle-footer">
                    <h4>About LibraryIn</h4>
                    <span>Iphone App</span>
                    <span>Contact Us</span>
                    <span>Terms of Use</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="right-footer">
                    <Link to="/Plan"><h4>Plan</h4></Link>
                    <Link to="/Discover"><span>Discover</span></Link>
                    <Link to="/Article"><span>Article</span></Link>
                    <Link to="/Faqs"> <span>FAQs</span></Link>
                    <span>Help</span>
                </div>
            </div>
        </div>
    )
}

export default Footer