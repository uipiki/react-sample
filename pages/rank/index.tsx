import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import Layout from '../../components/layout'

const columns: GridColDef[] = [
  { field: 'id', headerName: '順位', width: 100 },
  {
    field: 'name',
    headerName: '名前',
    width: 150,
    editable: true,
  },
  {
    field: 'score',
    headerName: 'score',
    width: 150,
    editable: true,
  },
  {
    field: 'scoreDifference',
    headerName: 'score差',
    width: 150,
    editable: true,
  },
  {
    field: 'scoreDifferenceFromTop',
    headerName: '1位までの差',
    sortable: false,
    width: 160
  },
];

const rows = [
  { id: 1, name: 'Snow', score: 'Jon', scoreDifference: 35, scoreDifferenceFromTop: 0 },
  { id: 2, name: 'Lannister', score: 'Cersei', scoreDifference: 42, scoreDifferenceFromTop: 0 },
  { id: 3, name: 'Lannister', score: 'Jaime', scoreDifference: 45, scoreDifferenceFromTop: 0 },
  { id: 4, name: 'Stark', score: 'Arya', scoreDifference: 16, scoreDifferenceFromTop: 0 },
  { id: 5, name: 'Targaryen', score: 'Daenerys', scoreDifference: null, scoreDifferenceFromTop: 0 },
  { id: 6, name: 'Melisandre', score: null, scoreDifference: 150, scoreDifferenceFromTop: 0 },
  { id: 7, name: 'Clifford', score: 'Ferrara', scoreDifference: 44, scoreDifferenceFromTop: 0 },
  { id: 8, name: 'Frances', score: 'Rossini', scoreDifference: 36, scoreDifferenceFromTop: 0 },
  { id: 9, name: 'Roxie', score: 'Harvey', scoreDifference: 65, scoreDifferenceFromTop: 0 },
];

export default function DataTable() {
  return (
    <Layout>
    <Grid container alignItems="center" justify="center">
      <div style={{ height: 600, width: '80%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
        />
        </div>
    </Grid>
    </Layout>
  );
}
