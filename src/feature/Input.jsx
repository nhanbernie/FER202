import React from "react";

class Input extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [],
            inputValue: ''
        }
    }

    handleChange = (event) =>{
        this.setState({
            inputValue: event.target.value
        })
        console.log(this.state.inputValue)
    }

    handleAdd = () =>{
        if (this.state.inputValue.trim() !== ''){
            this.setState(prevState =>({
                data: [...prevState.data, prevState.inputValue],
                inputValue : ''
            }))
        }
    }

    handleDelete = (index) =>{
        this.setState(prevState => ({
            data: prevState.data.filter((item,i) => i !== index)
        }));
    }

    render(){
        const { type, placeholder } = this.props;
        const { buttonText } = this.props;
        return(
            <>
                <div className="input-group mt-5">
                    <input onChange={this.handleChange} className="form-control me-2" type={type} placeholder={placeholder} value={this.state.inputValue} />
                    <button className="btn btn-primary" onClick={this.handleAdd}>{buttonText}</button>
                </div>
                <div className="mt-3">
                    <ul className="list-group">
                        {this.state.data.map((item, index) =>(
                            <li key={index} className="list-group-item d-flex justify-content-between">
                                {item}
                                <button className="btn btn-danger" onClick={() =>this.handleDelete(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}

export default Input;