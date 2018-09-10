import React, {Component} from 'react';



class Newscontainer extends Component{
    render(){
        return(
            <div className="newsClass">
                <div className="card">
                    <h1 className="card-header text-right">{this.props.newstitle}</h1>
                    <div className="card-body row">{this.props.newsbody}</div>
                    <div className="card-footer text-muted">
                        {this.props.newsdate}
                    </div>
                </div>
                
            </div>
        );
    };
}

export default Newscontainer;