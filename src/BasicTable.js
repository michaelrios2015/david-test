import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// need to clean up unused code getting some sort of error when first load does not break anything but not exactly good
// Same thing about pagination and loading


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

  function onChangeTwo(data){
    // const change = {searchA, searchB};
    // change[ev.target.name] = ev.target.value;
    
    // console.log(change)
    setSearchA(data);

    // setSearchB(change.searchB);
  }

  const classes = useStyles();
  
  let cusips = [];
  let cusipsTwo = [{cusip: ''}];
  rows.forEach(item=>cusips.push(item.Cusip));
  rows.forEach(item=>cusipsTwo.push({cusip: item.Cusip}));
  // console.log(cusipsTwo);
  // seems to remove the duplicates
  cusips = [...new Set(cusips)]
  let poolNames = [];
  let poolNamesTwo = [];
  rows.forEach(item=>poolNames.push(item.PoolName));
  rows.forEach(item=>poolNamesTwo.push({poolname: item.PoolName}));
  // seems to remove the duplicates
  poolNames = [...new Set(poolNames)]

  // console.log(searchA)
  if (searchA !== ''){
    rows = rows.filter((item)=> item.Cusip === searchA);
    // console.log(rows)
  }
  if (searchB !== ''){
    rows = rows.filter((item)=> item.PoolName.includes(searchB));
    console.log(rows)
  }

  return (
    <div>
              <Autocomplete
              id="combo-box-demo"
              options={cusips}
              getOptionLabel={(option) => option}
              style={{ width: 300 }}
              onChange={(event, value)=>setSearchA(value)}
              // console.logs value
              // onChange={(event, value)=>console.log(value.cusip)}
              // getOptionSelected={(value) => console.log(value)}
              // getOptionSelected={(option, value) => option.cusip === value.cusip && onChangeTwo(option.cusip)}
              renderInput={(params) => <TextField  {...params} label="Cusips" variant="outlined" onClick = {(ev)=> !ev.target.value && setSearchA('')}  />}
    />
              {/* <Autocomplete
              id="combo-box-pool-names"
              options={poolNamesTwo}
              getOptionLabel={(option) => option.poolname}
              style={{ width: 300 }}
              getOptionSelected={(option, value) => option.poolname === value.poolname && setSearchB(option.poolname)}
              renderInput={(params) => <TextField  {...params} label="Pool Names" variant="outlined" onClick = {(ev)=> !ev.target.value && setSearchB('')} />}
    /> */}


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