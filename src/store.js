import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const LOAD_TESTS = 'LOAD_TESTS';
const LOAD_ROWS = 'LOAD_ROWS';


//School Reducer should probably seperate out ************************

const testsReducer = (state = [], action) =>{
    if (action.type === LOAD_TESTS){
        state = action.tests
    }

    return state;
}

const rowsReducer = (state = [], action) =>{
    if (action.type === LOAD_ROWS){
        state = action.rows
    }

    return state;
}

const reducer = combineReducers({
    tests: testsReducer,
    rows: rowsReducer,
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

const _loadRows = (rows) =>{
    return {
        type: LOAD_ROWS,
        rows
    };
};

const loadRows = () =>{
    return async(dispatch)=>{
        const tests = (await axios.get('/api/tests')).data;
        // console.log()
        function createData(id, columnA, columnB, columnC, columnD, columnE) {
            return { id, columnA, columnB, columnC, columnD, columnE };
          }
        
        const rows= [];
          
        tests.forEach(item => {
            // console.log(item.id)
            rows.push(createData(item.id, item.columnA, item.columnB, item.columnC, item.columnD, item.columnE))
        });

        // console.log(rows); 
        dispatch(_loadRows(rows));
    }
};

export default store;
export { loadTests, loadRows };