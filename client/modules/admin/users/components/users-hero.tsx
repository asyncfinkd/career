import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  _id: string,
  fullName: string,
  email: string,
  status: string,
) {
  return { _id, fullName, email, status };
}

export default function UsersHero({ item }: any) {
  const rows = item.map((sec: any) =>
    createData(sec._id, sec.fullName, sec.email, sec.role),
  );
  return (
    <>
      {console.log(item)}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontFamily: 'MarkGEO' }}>ID</TableCell>
              <TableCell align="right" sx={{ fontFamily: 'MarkGEO' }}>
                სახელი გვარი
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: 'MarkGEO' }}>
                ელ.ფოსტა
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: 'MarkGEO' }}>
                სტატუსი
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {console.log(row)}
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontFamily: 'MarkGEO' }}
                >
                  {row._id}
                </TableCell>
                <TableCell align="right" sx={{ fontFamily: 'MarkGEO' }}>
                  {row.fullName}
                </TableCell>
                <TableCell align="right" sx={{ fontFamily: 'MarkGEO' }}>
                  {row.email}
                </TableCell>
                <TableCell align="right" sx={{ fontFamily: 'MarkGEO' }}>
                  {row.status == 'admin' && 'ადმინისტრატორი'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
