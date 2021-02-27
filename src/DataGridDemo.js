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

  return (
    <div>    
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
