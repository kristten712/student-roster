import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"

// context
import { useStudent } from '../../context/StudentContext' 

export default function StudentTableRow() {
  const classes = useStyles()
  const history = useHistory()  
  const {
      students,
      handleStudentSelect
  } = useStudent()

  function handleSelectedStudent(student) {
    handleStudentSelect(student.id)
    history.push(`/student-roster/students/view/${student.id}`)
  }

  return (
    <>
      {students.map((student) => (
          <TableRow key={student.id} onClick={ () => handleSelectedStudent(student)} className={classes.tr}>
            <TableCell>
                    {student.firstName + ' ' + student.lastName}
                </TableCell>
                <TableCell align="center">{student.highSchool}</TableCell>
                <TableCell align="center">{student.major}</TableCell>
                <TableCell align="center">{student.sat.math + student.sat.verbal}</TableCell>
                <TableCell align="center">{student.early ? 'Yes' : 'No'}</TableCell>
                <TableCell align="center">{student.progress}</TableCell>
          </TableRow>
        ))}
    </>
  )
}

const useStyles = makeStyles((theme) => ({
    tr: {
      '&:hover': {
        background: "aliceblue",
        cursor: "pointer"
     },
    },
}));
  