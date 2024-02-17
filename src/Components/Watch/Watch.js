import React from 'react';
import Watchstyle from "./Watchstyle";

function Watch(props) {
    return (
        <Watchstyle>

            <div className="watch">

                <div className="watch-section">

                    <div className="watch-sentence">
                        <h1>Watch everywhere</h1>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>

                    <div className="watch-img">
                        <img
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                            alt=""/>
                    </div>

                </div>

            </div>

            <div className="grey-border"></div>
        </Watchstyle>


    );
}

export default Watch;