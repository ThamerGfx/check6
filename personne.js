import React, {Component} from "react";

class Personne extends Component {
    render(props) {
       
        return(
            <div className="pers">
                <img className="img" src={this.props.pic} alt=""/>
                <h2>{this.props.name}</h2>
                <h4 className="desc">{this.props.desc}</h4>
            </div>
        );
    }



}
export default Personne;