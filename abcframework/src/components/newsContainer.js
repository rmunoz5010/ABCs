import React, {Component} from 'react';

class Newscontainer extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.newstitle}</h1>
                <p>{this.props.newsbody}</p>
            </div>
        );
    };
}

export default Newscontainer;