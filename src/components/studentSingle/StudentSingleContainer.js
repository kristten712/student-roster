import React from 'react'
import { useHistory, useParams } from "react-router-dom"

// context
import { useStudent } from '../../context/StudentContext' 

// components
import TestContainer from './test/TestContainer'
import Calendar from 'react-calendar'
import CollegeList from './CollegeList'

// material ui
import Grid from '@material-ui/core/Grid'
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import { Button, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

export default function StudentContainer() {
  const classes = useStyles()
  const history = useHistory()
  const {
    handleStudentSelect,
    findStudent,
    handleDeleteStudent
  } = useStudent()

  const { studentId } = useParams()

  const student = findStudent(studentId) 

  function handleEditButton(id) {
    handleStudentSelect(id)
    history.push(`/students/edit/${id}`)
  }

  function handleDelete(id) {
    handleDeleteStudent(id)
    history.push(`/`)
  }

  return (
    <Grid container spacing={3} justify="space-between">
        <Grid item xs={2}>
            <Typography variant="h5">
                {`${student.firstName} ${student.lastName}`}
            </Typography>
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={5}>
          <Grid container justify="flex-end">
          <Button 
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<EditIcon />}
            onClick={() => handleEditButton(student.id)} // TODO
          >
            Edit Student
          </Button>
            <Button 
              variant="contained"
              color="secondary"
              size="small" 
              onClick={() => handleDelete(student.id)}
              startIcon={<DeleteIcon />} 
            >
              Delete Student
            </Button>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
                <TestContainer student={student} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Calendar (todo: add scheduling)
              </Typography>
                <Calendar />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <CollegeList collegeList={student.collegeList} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '25ch',
      },
    },
    button: {
      marginRight: theme.spacing(2)
    }
  }));