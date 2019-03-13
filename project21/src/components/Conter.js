import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    handleInc = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    handleDec = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }

    render() {
        return (
            <div className="Counter">
                <p>{ this.state.count }</p> 
                <button onClick={this.handleInc}>+ 1</button>
                <button onClick={this.handleDec}>- 1</button>
            </div>
        );
    }
}

export default Counter;
