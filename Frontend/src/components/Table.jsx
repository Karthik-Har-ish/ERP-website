import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Due 1', 5000),
  createData('Due 2', 4500),
  createData('Due 3', 8000),
  createData('Due 4', 6000),
  createData('Due 5', 7000),
  createData('Due 6', 4560),
];

export default function DenseTable() {
  return (
    <TableContainer sx={{width: "60vw"}} component={Paper}>
      <Table sx={{ minWidth: 650, backgroundColor:"#D9CAB3" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize:"28px",color:"#90323D"}} >Title</TableCell>
            <TableCell sx={{fontSize:"28px",color:"#90323D"}} align="right">Due</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontSize:"20px",color:"#90323D"}}>
                {row.name}
              </TableCell>
              <TableCell sx={{color:"#90323D"}} align="right">{row.calories}</TableCell>
              <TableCell sx={{color:"#90323D"}} align="right">{row.fat}</TableCell>
              <TableCell sx={{color:"#90323D"}} align="right">{row.carbs}</TableCell>
              <TableCell sx={{color:"#90323D"}} align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}