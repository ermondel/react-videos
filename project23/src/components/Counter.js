import React, {Component} from 'react';

class Counter extends Component {
    state = {
        counter: 0
    }
    handlerInc = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    }
    handlerDec = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }));
    }
    render() {
        return (
            <div className="Counter">
                <p>{ this.state.counter }</p>
                <button onClick={ this.handlerInc }>+ 1</button>
                <button onClick={ this.handlerDec }>- 1</button>
            </div>
        );
    }
}

export default Counter;
