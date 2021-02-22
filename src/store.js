import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const LOAD_TESTS = 'LOAD_TESTS';

//School Reducer should probably seperate out ************************

const testsReducer = (state = [], action) =>{
    if (action.type === LOAD_TESTS){
        state = action.tests
    }

    return state;
}

const reducer = combineReducers({
    tests: testsReducer,
})

const store = createStore(reducer, applyMiddleware(thunk, logger));


//TESTS THUNKS****************************************

const _loadtests = (tests) =>{
    return {
        type: LOAD_TESTS,
        tests
    };
};

const loadTests = () =>{
    return async(dispatch)=>{
        const tests = (await axios.get('/api/tests')).data;
        dispatch(_loadtests(tests));
    }
};

export default store;
export { loadTests };