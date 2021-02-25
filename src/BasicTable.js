import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// lost the minwidth without this guy can probably be hard coded in somewhere 
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

//rows are now created in store :) 
function BasicTable({ rows }) {
  const [searchA, setSearchA ] = useState('');
  useEffect(() => {
   //if i add search buttons I think I will need this

    console.log(searchA)

  })

  function onSave(ev){
    // console.log(ev)
    ev.preventDefault();
    // if (this.state.search)
    // console.log(this.state.searchA)   
  }

  function onChange(ev){
    //const change = {};
    //change[ev.target.name] = ev.target.value;
    
    // this.setState(change);
    // console.log(this.state.searchA);
    console.log(ev.target.value)
  }

  // console.log(rows);


  const classes = useStyles();

  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Column A</TableCell>
            <TableCell >Column B</TableCell>
            <TableCell >Column C</TableCell>
            <TableCell >Column D</TableCell>
            <TableCell >Column E</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.columnA}
              </TableCell>
              <TableCell >{row.columnB}</TableCell>
              <TableCell >{row.columnC}</TableCell>
              <TableCell >{row.columnD}</TableCell>
              <TableCell >{row.columnE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              <form onSubmit = { onSave }>
              Search Column A
              <input name='searchA' value={ searchA } onChange = { ()=> setSearchA(searchA += '1')}/>
              </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
}


export default connect(mapStateToProps, null)(BasicTable);