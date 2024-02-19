import React from 'react';
import Foteerstyle from "./Foteerstyle";

function Footer(props) {
    return (
        <Foteerstyle>
            <div className="Footer">

                <div className="Footer-section">
                    <a href="#" className="quest-contact">Rahbar: Izzatillayev Ismoiljon Fayzullayevich.</a>

                    <div className="form-container">

                        <div className="box">
                            <a>Faq</a>
                            <a>Investor Relations</a>
                            <a>Privacy</a>
                            <a>Speed Test</a>
                            <a >Netflix</a>
                        </div>
                        <div className="box">
                            <a>Help Center</a>
                            <a>Jobs</a>
                            <a>Cookie Preferences</a>
                            <a>Legal Notices</a>
                        </div>

                        <div className="box">
                            <a>Account</a>
                            <a>Ways to Watch</a>
                            <a>Corporate Information</a>
                            <a>Only on Netflix</a>
                        </div>

                        <div className="box">
                            <a>Media Center</a>
                            <a>Terms of Use</a>
                            <a>Contact Us</a>
                        </div>

                    </div>
                </div>


            </div>

        </Foteerstyle>


    );
}

export default Footer;