import * as React from 'react';
// import  { useState } from 'react';
import { connect } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'Cusip', headerName: 'Cusip', width: 130 },
  { field: 'PoolName', headerName: 'Pool Name', width: 130 },
  { field: 'Type', headerName: 'Type', width: 130 },
  { field: 'Month', headerName: 'Month', width: 130 },
  { field: 'CF', headerName: 'CF', type: 'number', width: 90 },
  { field: 'Coupon', headerName: 'Coupon', type: 'number', width: 130 },
  { field: 'GWAC', headerName: 'GWAC', type: 'number', width: 130 },
  { field: 'WALA', headerName: 'WALA', type: 'number', width: 130 },
  { field: 'WAM', headerName: 'WAM', type: 'number', width: 90 },
  
];
//very cool but the filter feature might be less useful than I thought
function DataGridDemo({rows}) {
  const [searchA, setSearchA ] = React.useState('');
  const [searchB, setSearchB ] = React.useState('');

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
  
  let cusips = [];
  rows.forEach(item=>cusips.push(item.Cusip));
  // seems to remove the duplicates
  cusips = [...new Set(cusips)]
  let poolNames = [];
  rows.forEach(item=>poolNames.push(item.PoolName));
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
    <div>    Cusip:
    <select name='searchA' value={ searchA } onChange = { onChange }>
      <option value = ''>-- choose a Cusip</option>
        {
            cusips.map( (cusip, idx) => { 
                    return (
                        <option key={ idx } value = { cusip }>
                            { cusip } 
                        </option>
                    );
                })
        }
    </select>
    Pool Name:
    <select name='searchB' value={ searchB } onChange = { onChange }>
      <option value = ''>-- choose a Pool Name</option>
      {
          poolNames.map( (poolName, idx) => { 
                  return (
                      <option key={ idx } value = { poolName }>
                          { poolName } 
                      </option>
                  );
              })
      }
  </select> 
    <div style={{ height: 1000, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={15} />
    </div>
    </div>

  );
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(DataGridDemo);
