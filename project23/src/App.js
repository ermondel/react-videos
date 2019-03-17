import React from 'react';
import Counter from './components/Counter';
import { createStore } from 'redux';

const incrementAction = ({ incBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incBy
});
const decrementAction = ({ decBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decBy
});
const setCountAction = ({ value }) => ({
    type: 'SET',
    value
});
const resetAction = () => ({
    type: 'RESET'
});

const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incBy }
        case 'DECREMENT':
            return { count: state.count - action.decBy }
        case 'SET':
            return { count: action.value }
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
store.dispatch(incrementAction());
store.dispatch(incrementAction({ incBy: 10 }));
store.dispatch(incrementAction({ incBy: 20 }));
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction({ decBy: 40 }));
store.dispatch(setCountAction({ value: 1000 }));
store.dispatch(resetAction());

const App = () => (
    <div className="App">
        <Counter />
    </div>
);

export default App;
