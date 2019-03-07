import React from 'react';
import { createStore } from 'redux';

const incrementCountAction = ({ incBy = 1 } = {}) => ({
    type: 'INC',
    incBy
});

const decrementCountAction = ({ decBy = 1 } = {}) => ({
    type: 'DEC',
    decBy
});

const setCountAction = ({ count }) => ({
    type: 'SET',
    count
});

const resetCountAction = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INC':
            return { count: state.count + action.incBy }
        case 'DEC':
            return { count: state.count - action.decBy }
        case 'SET':
            return { count: action.count }
        case 'RESET':
            return { count: 0 }
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCountAction());
store.dispatch(incrementCountAction({ incBy: 2 }));
store.dispatch(incrementCountAction({ incBy: 3 }));
store.dispatch(incrementCountAction({ incBy: 4 }));
store.dispatch(decrementCountAction({ decBy: 4 }));
store.dispatch(decrementCountAction({ decBy: 3 }));
store.dispatch(decrementCountAction({ decBy: 2 }));
store.dispatch(decrementCountAction());
store.dispatch(setCountAction({ count: 111 }));
store.dispatch(resetCountAction());

const App = () => (
    <div className="App">
        <h1>Project</h1>
    </div>
);

export default App;