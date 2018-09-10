import React, {Component} from 'react';
import Member from '../components/rosterComponent';

class Rosterpage extends Component{
    render(){
        return(
            <div className="container newsClass">
                <Member />
            </div>
        );
    };
}

export default Rosterpage;