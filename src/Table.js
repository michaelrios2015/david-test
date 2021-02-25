import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTests } from './store';


class TableHomeMade extends Component{
        constructor(){
          super();
          this.state = {
            searchA: '',
            searchB: ''
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
        //   console.log(this.state.search);
        }
        
        onSave(ev){
          ev.preventDefault();
        //   if (this.state.search){
        //   console.log(this.state.search)}   
      }


render(){
    let { tests } = this.props;
    const { onChange, onSave } = this;
    const { searchA, searchB } = this.state;
    // console.log(tests);
    // console.log(searchA);
    // console.log(searchB);
    if( searchA !== ''){
      tests = tests.filter((item)=> item.columnA === searchA*1)
    }
    if( searchB !== ''){
        tests = tests.filter((item)=> item.columnB === searchB*1)
    }
    // if( searchA !== '' && searchB !== ''){
    //     tests = tests.filter((item)=> item.columnA === searchA*1 && item.columnB === searchB*1)
    // }
    return(
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
            Search Column A
            <input name='searchA' value={ searchA } onChange = { onChange }/>
            <br />
            Search Column B
            <input name='searchB' value={ searchB } onChange = { onChange }/>
          </form>
          </div>
          
    )
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
  
export default connect(mapStateToProps, mapDispatchToProps)(TableHomeMade);





