import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class App extends Component{
  constructor(){
    super();
    this.state = {
      tests: [],
      loading: true
    };
  }
  async componentDidMount(){
    this.setState({
      tests: (await axios.get('/api/tests')).data,
      loading: false
    });

  }
  render(){
    const { tests, loading } = this.state;
    if(loading){
      return '....loading';
    }
    return (
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
    );
  }
}

render(<App />, document.querySelector('#root'));




