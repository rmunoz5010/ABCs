import React, {Component} from 'react';
import Newscontainer from '../components/newsContainer';

class Newspage extends Component{
    render(){
        return(
            <div className="container jumbotronClass">
                <div className="jumbotron">
                    <h1> News Page test </h1>
                    <p>If everything is done correctly, this should look like a Jumbotron</p>
                </div>
                <br></br>
                <Newscontainer newstitle= "component test title" newsbody="component test body" />
                <Newscontainer newstitle= "component test title 2" newsbody="component test body 2" />

            </div>
        );
    };
}

export default Newspage;
