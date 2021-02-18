import React from 'react';

// Material Table
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// components
import StudentTableRow from './StudentTableRow'

export default function StudentTable() {
  return (
    <TableContainer component={Paper}>
      <Table className="student-table" aria-label="student table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">High School</TableCell>
            <TableCell align="center">Intended Major</TableCell>
            <TableCell align="center">SAT</TableCell>
            <TableCell align="center">EA/ED?</TableCell>
            <TableCell align="center">Common App</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StudentTableRow />
        </TableBody>
      </Table>
    </TableContainer>
  )
}