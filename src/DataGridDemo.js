import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'Cusip', headerName: 'Cusip', width: 130 },
  { field: 'PoolName', headerName: 'Pool Name', width: 130 },
  { field: 'Type', headerName: 'Type', width: 130 },
  { field: 'Month', headerName: 'Month', width: 130 },
  { field: 'CF', headerName: 'CF', width: 130 },
  { field: 'Coupon', headerName: 'Coupon', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  
];

const rows = [
  { id: 1, Cusip: 'Snow', PoolName: 'Jon', Type: null, Month: null, CF: null, Coupon: null, age: 35 },
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

// If I can figure out how to put my own data in this I should be good to go :) 
//seem to only be able to filter one column at a time
export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
