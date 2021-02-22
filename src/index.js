import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { loadTests } from './store';


class _App extends Component{
  constructor(){
    super();
    this.state = {
      search: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount(){
    this.props.bootstrap();
  }

  onChange(ev){
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
    console.log(this.state.search);
  }
  
  onSave(ev){
    ev.preventDefault();
    if (this.state.search)
    console.log(this.state.search)   
}

  render(){
    let { tests } = this.props;
    const { onChange, onSave } = this;
    const { search } = this.state;
    console.log(tests);
    if( search !== ''){
      tests = tests.filter((_, idx)=> idx === search*1)
    }

    return (
        <div>
        <table>
              <thead>
                    <tr>
                        <th>columnA</th>
                        <th>columnB</th>
                        <th>columnC</th>
                        <th>columnD</th>
                        <th>columnE</th>
                    </tr>
                </thead>
            <tbody>
                  
                    {
            tests.map( test => { 
                return (
                    <tr key={ test.id }> 
                        <td key={ test.id + 1} >
                            { test.columnA }
                        </td>
                        <td key={ test.id + 2 }>
                            { test.columnB }    
                        </td>
                        <td key={ test.id + 3}>
                            { test.columnC }    
                        </td>
                        <td key={ test.id + 4}>
                            { test.columnD }    
                        </td>
                        <td key={ test.id + 5 }>
                            { test.columnE }    
                        </td>
                    </tr>
                    );
                })
                }
            
        </tbody>
      </table>
          <form onSubmit = { onSave }>
            Search
            <input name='search' value={ search } onChange = { onChange }/>
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    bootstrap: ()=> {
      dispatch(loadTests());
    }
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

render(<Provider store = {store}><App /></Provider>, document.querySelector('#root'));




