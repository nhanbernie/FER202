import React from "react";
import './Calculator.css'
import { toast, ToastContainer } from 'react-toastify';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
            first: '',
            second: '',
            operator: '+'
        }
    }

    handleAddFirst = (event) => {
        const value = event.target.value;
        if (value === '' || !isNaN(value)) {
            this.setState({ first: value });
        } else {
            toast.error("Enter number")
        }
    }

    handleAddSecond = (event) => {
        const value = event.target.value;
        if (value === '' || !isNaN(value)) {
            this.setState({ second: value });
        } else {
            toast.error("Enter number")
        }
    }

    handChangeOperator = (event) =>{
        this.setState ({
            operator: event.target.value
        })
    }

    handleCalculator = (event) => {
        const { first, second, operator } = this.state;
        event.preventDefault(); 
        let res;
        switch (operator){
            case '+': 
            res = parseFloat(first) + parseFloat(second);
            break;

            case '-': 
            res = parseFloat(first) - parseFloat(second);
            break;

            case '*': 
            res = parseFloat(first) * parseFloat(second);
            break;

            case '/': 
            res = parseFloat(first) / parseFloat(second);
            break;
            default:
                res = 'Invalid'
        }
        this.setState ({
            result: res,
            first: '',
            second: ''   
        })
    }


    render() {
        return (
            <>
                <ToastContainer />
                <div className="mt-5 row d-flex justify-content-between">
                    <div className="col-md-5">
                        <form onSubmit={this.handleCalculator}>
                            {/* first */}
                            <div className="mb-3 row">
                                <label htmlFor="first" className="col-sm-3 col-form-label">First:</label>
                                <div className="col-sm-9">
                                    <input type="text" onChange={this.handleAddFirst} value={this.state.first} className="form-control" id="first" />
                                </div>
                            </div>
                            {/* second */}
                            <div className="mb-3 row">
                                <label htmlFor="second" className="col-sm-3 col-form-label">Second:</label>
                                <div className="col-sm-9">
                                    <input type="text" value={this.state.second} onChange={this.handleAddSecond} className="form-control" id="second" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="dropdown" className="col-sm-3 col-form-label">Operator:</label>
                                <div className="col-sm-9">
                                    <select className="form-select mb-3" id="dropdown" onChange={this.handChangeOperator}>
                                        {/* <option selected>Chọn một tùy chọn</option> */}
                                        <option value="+">+</option>
                                        <option value="-">-</option>
                                        <option value="*">x</option>
                                        <option value="/">/</option>
                                    </select>
                                    <button className="btn btn-success" type="submit">Calculate</button>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3 row">

                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="result" className="col-sm-3 col-form-label">Result: </label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" value={this.state.result} readOnly/>

                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        {/* <div className="row">
                            <div className="col btn btn-light border">+</div>
                            <div className="col btn btn-light border">-</div>
                            <div className="col btn btn-light border">x</div>
                            <div className="col btn btn-light border">/</div>
                        </div>
                        <div className="row">
                            <div className="col btn border">7</div>
                            <div className="col btn border">8</div>
                            <div className="col btn border">9</div>
                            <div className="col btn border equal-button">=</div>
                        </div>
                        <div className="row">
                            <div className="col btn border">4</div>
                            <div className="col btn border">5</div>
                            <div className="col btn border">6</div>
                        </div>
                        <div className="row">
                            <div className="col btn border">1</div>
                            <div className="col btn border">2</div>
                            <div className="col btn border">3</div>
                        </div>
                        <div className="row">
                            <div className="col btn border">0</div>
                            <div className="col btn border">.</div>
                            <div className="col btn border">AC</div>
                        </div> */}
                        <div className="row">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-3 col-md-3 btn border">+</div>
                                    <div className="col-sm-3 col-md-3 btn border">-</div>
                                    <div className="col-sm-3 col-md-3 btn border">x</div>
                                    <div className="col-sm-3 col-md-3 btn border">/</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 col-md-4 btn border">7</div>
                                    <div className="col-sm-4 col-md-4 btn border">8</div>
                                    <div className="col-sm-4 col-md-4 btn border">9</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 col-md-4 btn border">4</div>
                                    <div className="col-sm-4 col-md-4 btn border">5</div>
                                    <div className="col-sm-4 col-md-4 btn border">6</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 col-md-4 btn border">1</div>
                                    <div className="col-sm-4 col-md-4 btn border">2</div>
                                    <div className="col-sm-4 col-md-4 btn border">3</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-md-4 btn border">0</div>
                                    <div className="col-sm-3 col-md-4 btn border">.</div>
                                    <div className="col-sm-3 col-md-4 btn border">AC</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 btn btn-warning border" onClick={this.handleCalculator}>=</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Calculator;