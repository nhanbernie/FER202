import React from "react";

class AddGame extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0,

        }
    }

    addMore = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        const {title, buttonText} = this.props;
        return(
            <>
                <div className="mt-5 text-center text-success">
                    <h2>{title}</h2>
                    <button className="btn btn-success mt-3 mb-3" onClick={this.addMore}>{buttonText}</button>
                    <p>{this.state.count}</p>
                </div>
            </>
        )
    }
}

export default AddGame;