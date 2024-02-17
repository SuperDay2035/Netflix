import React, {useState} from 'react';
import Accordionstyle from "./Accordionstyle";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Accordion(props) {

    const [selected, setselected] = useState(null);

    const toggle = (i) => {
        if(selected === i) {
            setselected(null)
        } else {
            setselected(i)
        }

    }


    const data = [
        {
            title: `What is Netflix?`,
            text: `Netflix is a streaming service that offers a wide variety 
                   of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                   You can watch as much as you want, whenever you want without 
                   a single commercial – all for one low monthly price. There's
                   always something new to discover and new TV shows and movies are added every week!.`
        },
        {
            title: `How much does it cost?`,
            text: `Watch Netflix on your smartphone, tablet, 
            Smart TV, laptop, or streaming device, all for one 
            fixed monthly fee. Plans range from EUR 7.99 to EUR
            11.99 a month. No extra costs, no contracts..`
        },
        {
            title: `Where Can I Watch?`,
            text: `Watch anywhere, anytime. Sign in with your Netflix account
             to watch instantly on the web at netflix.com from your personal 
             computer or on any internet-connected device that offers the Netflix 
             app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
             You can also download your favorite shows with the iOS, Android, or Windows 10 app. 
             Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
        },
        {
            title: `How do I cancel?`,
            text: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel
             your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`
        }, {
            title: `What can I watch on Netflix?`,
            text: 'Netflix has an extensive library of feature films, documentaries, ' +
                'TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
        },  {
            title: `Is Netflix good for kids?`,
            text: `The Netflix Kids experience is included in your membership to give parents c
                   ontrol while kids enjoy family-friendly TV shows and movies in their own space.
                   Kids profiles come with PIN-protected parental controls that let you restrict 
                   the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
        }, {
            title: `Why am I seeing this language`,
            text: ` Your browser preferences determine the language shown here.`
        }
    ]

    return (
        <Accordionstyle>
            <div className="Wrapper">

                <div className="accordion">

                    <h1>Frequently Asked Questions</h1>

                    {data.map((item, i) => (
                        <div className="item" key={i}>
                            <div className="title" onClick={() => toggle(i)}>
                                <p>{item.title}</p>
                                <span>{selected === i ? <RemoveIcon></RemoveIcon> : <AddIcon></AddIcon>}</span>
                            </div>
                            <div className={selected === i ? "content show" : "content"}>{item.text}</div>
                        </div>
                    ))}


                    <div className="sign">
                        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>

                        <div className="sign-up">
                            <input type="text" placeholder="Email"/>
                            <button>Get It</button>
                        </div>

                    </div>


                </div>

            </div>
            <div className="grey-border"></div>




        </Accordionstyle>


    );
}

export default Accordion;