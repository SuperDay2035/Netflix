import React from 'react';
import logo from "./Icons/logo.png"
import Navstyle from "./Navstyle";
function Navbar(props) {
    return (
        <Navstyle>


            <div className="home">


                <div className="Navbar">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>

                    <div className="nav-sign">
                        <button className="sign-btn">Sign In</button>
                    </div>

                </div>

                <div className="home-page">
                    <div className="page">
                        <h1>Unlimited movies, TV shows, and more</h1>
                        <p>Watch anywhere. Cancel anytime.</p>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>

                    <div className="form">


                    <input type="text" placeholder="Email"/>
                        <button className="Get-btn">Get It ></button>
                    </div>
                </div>




            </div>

        </Navstyle>

    );
}

export default Navbar;