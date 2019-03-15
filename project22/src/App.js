import React, {Component} from 'react';
import { createStore } from 'redux';
import Counter from './components/Counter';

const incAction = ({ val = 1} = {}) => ({ type: 'INCREMENT', val });
const decAction = ({ val = 1} = {}) => ({ type: 'DECREMENT', val });
const setAction = ({ val }) => ({ type: 'SET', val });
const resetAction = () => ({ type: 'RESET' });

const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.val };
        case 'DECREMENT':
            return { count: state.count - action.val };
        case 'SET':
            return { count: action.val };
        case 'RESET':
            return { count: 0 };
    }
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incAction({ val: 20 }));
store.dispatch(incAction({ val: 20 }));
store.dispatch(decAction({ val: 140 }));
store.dispatch(setAction({ val: 1000 }));
store.dispatch(resetAction());

//

class App extends Component {
    render() {
        return (
            <div id="App">
                <Counter />
            </div>
        );
    }
}

export default App;
