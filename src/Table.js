import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from './store';


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
          // console.log(this.props)
       
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
    let { data } = this.props;
    const { onChange, onSave } = this;
    const { searchA, searchB } = this.state;

    // this works but need a drop down menu at least 
    if( searchA !== ''){
      data = data.filter((item)=> item.Cusip.includes(searchA));
    }
    if( searchB !== ''){
      data = data.filter((item)=> item.PoolName.includes(searchB));
    }

    return(
        <div>
          
        <table>
              <thead>
                    <tr>
                        <th>Cusip</th>
                        <th>Pool Name</th>
                        <th>Type</th>
                        <th>Month</th>
                        <th>C.F.</th>
                        <th>Coupon</th>
                        <th>GWAC</th>
                        <th>WALA</th>
                        <th>WAM</th>
                    </tr>
                </thead>
            <tbody>
                  
                    {
            data.map( item => { 
                return (
                    <tr key={ item.id }> 
                        <td key={ item.id + 1} >
                            { item.Cusip }
                        </td>
                        <td key={ item.id + 2 }>
                            { item.PoolName }    
                        </td>
                        <td key={ item.id + 3}>
                            { item.Type }    
                        </td>
                        <td key={ item.id + 4}>
                            { item.Month }    
                        </td>
                        <td key={ item.id + 5}>
                            { item.CF }    
                        </td>
                        <td key={ item.id + 6}>
                            { item.Coupon }    
                        </td>
                        <td key={ item.id + 7}>
                            { item.GWAC }    
                        </td>
                        <td key={ item.id + 8}>
                            { item.WALA }    
                        </td>
                        <td key={ item.id + 9}>
                            { item.WAM }    
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
        dispatch(loadData());
      }
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(TableHomeMade);





