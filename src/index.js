import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { loadTests } from './store';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
    const useStyles = makeStyles({
      table: {
        minWidth: 650,
      },
    });
    
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }
    
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
 
    // let { tests } = this.props;
    // const { onChange, onSave } = this;
    // const { search } = this.state;
    // console.log(tests);
    // if( search !== ''){
    //   tests = tests.filter((_, idx)=> idx === search*1)
    // }

    const classes = useStyles();
    return (
        <div>
        {/* <table>
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
       */}
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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




// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   const classes = useStyles();

//   return (
    // <TableContainer component={Paper}>
    //   <Table className={classes.table} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Dessert (100g serving)</TableCell>
    //         <TableCell align="right">Calories</TableCell>
    //         <TableCell align="right">Fat&nbsp;(g)</TableCell>
    //         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow key={row.name}>
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="right">{row.calories}</TableCell>
    //           <TableCell align="right">{row.fat}</TableCell>
    //           <TableCell align="right">{row.carbs}</TableCell>
    //           <TableCell align="right">{row.protein}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
//   );
// }
