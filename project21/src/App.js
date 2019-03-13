import React, { Component } from 'react';
import { createStore } from 'redux';
import Counter from './components/Conter';

const incrementAction = ({ val = 1 } = {}) => ({
    type: 'INCREMENT',
    val
});

const decrementAction = ({ val = 1 } = {}) => ({
    type: 'DECREMENT',
    val
});

const setAction = ({ val }) => ({
    type: 'SET',
    val
});

const resetAction = () => ({
    type: 'RESET'
});

const reducer = (state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.val }
        case 'DECREMENT':
            return { count: state.count - action.val }
        case 'SET': 
            return { count: action.val }
        case 'RESET': 
            return { count: 0 }
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction({ val: 10 }));
store.dispatch(incrementAction({ val: 20 }));
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction({ val: 28 }));
store.dispatch(setAction({ val: 77 }));
store.dispatch(resetAction());

class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter />
            </div>
        );
    }
}

export default App;
