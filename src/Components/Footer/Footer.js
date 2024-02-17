import React from 'react';
import Foteerstyle from "./Foteerstyle";

function Footer(props) {
    return (
        <Foteerstyle>
            <div className="Footer">

                <div className="Footer-section">
                    <a href="#" className="quest-contact">Questions? Contact us.</a>

                    <div className="form-container">

                        <div className="box">
                            <a href="#">Faq</a>
                            <a href="#">Investor Relations</a>
                            <a href="#">Privacy</a>
                            <a href="#">Speed Test</a>
                            <a href="#">Netflix</a>
                        </div>
                        <div className="box">
                            <a href="#">Help Center</a>
                            <a href="#">Jobs</a>
                            <a href="#">Cookie Preferences</a>
                            <a href="#">Legal Notices</a>
                        </div>

                        <div className="box">
                            <a href="#">Account</a>
                            <a href="#">Ways to Watch</a>
                            <a href="#">Corporate Information</a>
                            <a href="#">Only on Netflix</a>
                        </div>

                        <div className="box">
                            <a href="#">Media Center</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Contact Us</a>
                        </div>

                    </div>
                </div>


            </div>

        </Foteerstyle>


    );
}

export default Footer;