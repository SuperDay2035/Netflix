import React from 'react';
import Downloadstyle from "./Downloadstyle";

function Download(props) {
    return (

        <Downloadstyle>
            <div className="Download">

                <div className="download-section">

                    <div className="download-img">
                        <img
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                            alt=""/>
                    </div>
                    <div className="download-sentence">
                        <h1>Download your shows to watch offline</h1>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>

                </div>


            </div>

            <div className="grey-border"></div>
        </Downloadstyle>


    );
}

export default Download;