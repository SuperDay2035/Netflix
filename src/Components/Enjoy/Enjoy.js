import React from 'react';
import EnjoyStyle from "./EnjoyStyle";

function Enjoy(props) {
    return (

        <EnjoyStyle>
            <div className="Enjoy">

                <div className="enjoy-section">
                    <div className="enjoy-sentence">
                        <h1>Enjoy on your TV</h1>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className="enjoy-video">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                             alt=""/>
                    </div>
                </div>


            </div>
            <div className="grey-border"></div>
        </EnjoyStyle>

    );
}

export default Enjoy;