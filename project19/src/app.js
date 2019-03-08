import React from 'react';
import { createStore } from 'redux';

const likeAction = ({ incBy = 1 } = {}) => ({
    type: 'LIKE',
    incBy
});

const dislikeAction = ({ decBy = 1 } = {}) => ({
    type: 'DISLIKE',
    decBy
});

const setLikesAction = ({ num }) => ({
    type: 'SET',
    num
});

const resetLikesAction = () => ({
    type: 'RESET'
});

const store = createStore((state = { likes: 0 }, action) => {
    switch (action.type) {
        case 'LIKE':
            return { likes: state.likes + action.incBy };
        case 'DISLIKE':
            return { likes: state.likes - action.decBy };
        case 'SET':
            return { likes: action.num };
        case 'RESET':
            return { likes: 0 };
    } 
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(likeAction());
store.dispatch(likeAction({ incBy: 10 }));
store.dispatch(likeAction({ incBy: 100 }));
store.dispatch(dislikeAction({ decBy: 100 }));
store.dispatch(dislikeAction({ decBy: 10 }));
store.dispatch(dislikeAction());
store.dispatch(dislikeAction());
store.dispatch(setLikesAction({ num: 99999 }));
store.dispatch(resetLikesAction());

//

const App = () => (
    <div className="App">
        <p><a href="#">data 1</a></p>
        <p><a href="#">data 2</a></p>
        <p><a href="#">data 3</a></p>
        <p><a href="#">data 4</a></p>
        <p><a href="#">data 5</a></p>
    </div>
);

export default App;
