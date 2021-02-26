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
// changed so cusip and pool would not run together should be a better way
const useStyles = makeStyles({
  table: {
    minWidth: 730,
  },
});

//rows are now created in store :) 
function BasicTable({ rows }) {
  const [searchA, setSearchA ] = useState('');
  const [searchB, setSearchB ] = useState('');
  useEffect(() => {
  },[])

  function onSave(ev){
    ev.preventDefault();
  }

  function onChange(ev){
    const change = {searchA, searchB};
    change[ev.target.name] = ev.target.value;
    
    console.log(change)
    setSearchA(change.searchA);

    setSearchB(change.searchB);
  }

  const classes = useStyles();

  console.log(searchA)
  if (searchA !== ''){
    rows = rows.filter((item)=> item.Cusip.includes(searchA));
    // console.log(rows)
  }
  if (searchB !== ''){
    rows = rows.filter((item)=> item.PoolName.includes(searchB));
    console.log(rows)
  }

  return (
    <div>
        <form onSubmit = { onSave }>
          Search Column A
          <input name='searchA' value={ searchA } onChange = { onChange }/>
          Search Column B
          <input name='searchB' value={ searchB } onChange = { onChange }/>
        </form>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Cusip</TableCell>
              <TableCell align="right">Pool Name</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Month</TableCell>
              <TableCell align="right">CF</TableCell>
              <TableCell align="right">Coupon</TableCell>
              <TableCell align="right">GWAC</TableCell>
              <TableCell align="right">WALA</TableCell>
              <TableCell align="right">WAM</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row"> {row.Cusip} </TableCell>
                <TableCell align="right">{row.PoolName}</TableCell>
                <TableCell align="right">{row.Type}</TableCell>
                <TableCell align="right">{row.Month}</TableCell>
                <TableCell align="right">{row.CF}</TableCell>
                <TableCell align="right">{row.Coupon}</TableCell>
                <TableCell align="right">{row.GWAC}</TableCell>
                <TableCell align="right">{row.WALA}</TableCell>
                <TableCell align="right">{row.WAM}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
}


export default connect(mapStateToProps, null)(BasicTable);