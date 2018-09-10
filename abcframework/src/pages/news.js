import React, {Component} from 'react';
import Newscontainer from '../components/newsContainer';
import '../index.css';
import YouTube from 'react-youtube';

class Newspage extends Component{
    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
        };
        return(
            <div className="container newsClass">
               
                <br></br>
                <Newscontainer 
                    newstitle={[<span className="badge badge-pill badge-success">FFXIV</span>, " Patch 4.4 Trailer + Notes"]}
                    newsbody={["The patch 4.4 trailer is out with a few notes as well. The new raid tier is coming out, named Alphascape, and I can't wait to tackle that together. It looks like a lot of the leaks from the subreddit were right regarding this next patch. Does this mean Blue Mage isn't too far out of our reach?", 
                    <YouTube
                        className=" "
                        videoId="UWFu5LTEgNM"
                        opts={opts}
                        onReady={this._onReady}
                    />
                    ]}
                    newsdate="09/08/2018"
                />
                <Newscontainer
                    newstitle= {[<span className="badge badge-pill badge-primary">DEV</span>, " News Page is Making Progress"]}
                    newsbody="So I've finished the landing page and gotten the props for the News Page working. I'm going to use this almost as a changelog to show different steps I've used. I've fallen a little behind on the changelog as I've been making little changes everyday when I'm busy. But now that it's the weekend, I plan on finishing this entire project. I will also be implementing a component with a link in it for news."
                    newsdate="09/08/2018"
                />
                <Newscontainer 
                    newstitle= {[<span className="badge badge-pill badge-primary">DEV</span>, " Project Started"]} 
                    newsbody="I decided on this day to make a website for the Free Company. I've actually got a lot of people that are interested in what I'm doing here. I know that it will likely not make it live, but I think it will be a fun project for me. I haven't decided what all will go into this project, just that I will have things like a news and roster page. I wanted to refresh react so that I am used to using the different properties of it. " 
                    newsdate="08/31/2018"
                />

            </div>
        );
    };
}

export default Newspage;
