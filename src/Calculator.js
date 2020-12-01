import React, {Component} from 'react'

class Calculator extends Component {

    state = {
        num1: 0,
        num2: 0,
        answer: 0,
    }

    setNum = (e, num) => {
        this.setState({
            [num]: e.target.value
        })
    }

    add = (e) => {
        e.preventDefault()
        this.setState({
            answer: (parseInt(this.state.num1) + parseInt(this.state.num2))
        })
    }

    subtract = (e) => {
        e.preventDefault()
        this.setState({
            answer: (parseInt(this.state.num1) - parseInt(this.state.num2))
        })
    }

    multiply = (e) => {
        e.preventDefault()
        this.setState({
            answer: (parseInt(this.state.num1) * parseInt(this.state.num2))
        })
    }

    divide = (e) => {
        e.preventDefault()
        this.setState({
            answer: (parseInt(this.state.num1) / parseInt(this.state.num2))
        })
    }




    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number"
                    name="num1"
                    placeholder="enter your first number"
                    onChange={(e) => this.setNum(e, 'num1')} 

                    />

                    <br></br>
                    <button onClick={this.add}>+</button>
                    <button onClick={this.subtract}>-</button>
                    <button onClick={this.multiply}>*</button>
                    <button onClick={this.divide}>/</button>
                    <br></br>
                    <input type="text"
                    name="num2"
                    placeholder="enter your second number"
                    onChange={(e) => this.setNum(e, 'num2')} 

                    />
                    
                    <h3>{this.state.answer}</h3>
            </div>
</div>
        )
    }
}

export default Calculator