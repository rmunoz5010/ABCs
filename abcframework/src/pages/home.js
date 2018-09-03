import React, {Component} from 'react';

class Homepage extends Component{
    render(){
          
        return(
            <div className="container jumbotronClass">
                <div className="jumbotron">
                    <div className="row d-flex justify-content-center">
                        <img src={require("../images/Apex_logo.png")} alt="logo" className=""></img>
                    
                    <div className="row d-flex justify-content-center">
                        <div className="col-8 justify-content-center">
                            <div className="row justify-content-center">
                                <h1 className="text-align-center display-4">Welcome to Apotheosis</h1>
                            </div>
                            <div className="row d-flex justify-content-center text-muted">
                                Welcome to the home page for Apotheosis, a Free Company located on the Mateus server of FFXIV. We are a Free Company founded on values that everyone is equal and that no one shall be treated differently regardless of talent or origin. We are a family that values communication and friendship over anything else. Our members compose of varying backgrounds, and all are working adults that understand that everyone has their own situation and respects that. 
                            </div>
                        
                        </div>
                        </div>
                        
                    </div>
                </div>

            </div>


        );
    }

    

}

export default Homepage;