import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

// OPTIONAL: pull data from "https://api.data.gov/ed/collegescorecard/v1/")

export default function CollegeListContainer({ collegeList }) {
  return (
  <>
    <Typography variant="h6">
      College List
    </Typography>
    <TableContainer>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>College</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Acceptance Rate</TableCell>
            <TableCell align="center">Application Cycle</TableCell>
            <TableCell align="center">Middle 50% SAT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {collegeList.map((college) => ( 
            <TableRow key={college.id}>
              <TableCell component="th" scope="row">
                {college.collegeName}
              </TableCell>
              <TableCell align="center">todo: collegescorecard API</TableCell>
              <TableCell align="center">todo: collegescorecard API</TableCell>
              <TableCell align="center">{college.cycle}</TableCell>
              <TableCell align="center">todo: collegescorecard API</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}