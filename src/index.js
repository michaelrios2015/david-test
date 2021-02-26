import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { loadRows } from './store';
import TableHomeMade from './Table';
import BasicTable from './BasicTable.js';
import DataGridDemo from './DataGridDemo.js';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


class _App extends Component{
  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this.props.bootstrap();
  }

  //this works fine now need to figure out how to put my data into Material UI table and add search
  render(){
    return (
      <Router>
        <div>
        <Link to = '/'>home</Link>  
          <br/>
          <Link to = '/homemade'>homemade</Link>  
          <br/>
          <Link to = '/data'>data grid</Link>  
          <Route component={ BasicTable } path = '/' exact/>
          <Route component={ TableHomeMade } path = '/homemade' />
          
          <Route component={ DataGridDemo } path = '/data' />
        </div>
        </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    bootstrap: ()=> {
      dispatch(loadRows());
    }
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

render(<Provider store = {store}><App /></Provider>, document.querySelector('#root'));
