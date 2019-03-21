import React, { Component } from 'react';
import { createStore } from 'redux';

const incAction = ({ incBy = 1} = {}) => ({
    type: 'INCREMENT',
    incBy
});
const decAction = ({ decBy = 1} = {}) => ({
    type: 'DECREMENT',
    decBy
});
const setAction = ({ val }) => ({
    type: 'SET',
    val
});
const resetAction = () => ({
    type: 'RESET'
});

const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incBy };
        case 'DECREMENT':
            return { count: state.count - action.decBy };
        case 'SET':
            return { count: action.val };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incAction({ incBy: 10 }));
store.dispatch(incAction({ incBy: 10 }));
store.dispatch(decAction({ decBy: 10 }));
store.dispatch(decAction({ decBy: 10 }));
store.dispatch(decAction({ decBy: 10 }));
store.dispatch(setAction({ val: 1111 }));
store.dispatch(resetAction());


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
                <button onClick={this.handlerInc}>+ 1</button>
                <button onClick={this.handlerDec}>- 1</button>
            </div>
        );
    }
}

export default Counter;
