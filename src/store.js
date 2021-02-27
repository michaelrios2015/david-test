import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const LOAD_ROWS = 'LOAD_ROWS';
const LOAD_DATA = 'LOAD_DATA';


//segment of real data ************************
const dataReducer = (state = [], action) =>{
    if (action.type === LOAD_DATA){
        state = action.data
    }

    return state;
}

//This is because i needed a place to load the rows for the 
const rowsReducer = (state = [], action) =>{
    if (action.type === LOAD_ROWS){
        state = action.rows
    }

    return state;
}

// the reducer
const reducer = combineReducers({
    rows: rowsReducer,
    data: dataReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger));


//TESTS THUNKS****************************************


const _loadData = (data) =>{
    return {
        type: LOAD_DATA,
        data
    };
};

const loadData = () =>{
    return async(dispatch)=>{
        const data = (await axios.get('/api/data')).data;
        dispatch(_loadData(data));
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
        const tests = (await axios.get('/api/data')).data;
        // console.log()
        function createData(id, Cusip, PoolName, Type, Month, CF, Coupon, GWAC, WALA, WAM) {
            return { id, Cusip, PoolName, Type, Month, CF, Coupon, GWAC, WALA, WAM };
          }
        
        const rows= [];
        
        
        tests.forEach(item => {
            // console.log(item.id)
            rows.push(createData(item.id, item.Cusip, item.PoolName, item.Type, item.Month, item.CF, item.Coupon, item.GWAC, item.WALA, item.WAM))
        });

        // console.log(rows); 
        dispatch(_loadRows(rows));
    }
};


export default store;
export { loadRows, loadData };