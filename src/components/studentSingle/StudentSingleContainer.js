import React from 'react'
import { useHistory, useParams } from "react-router-dom";

// context
import { useStudent } from '../../context/StudentContext' 

// components
// import TestContainer from './test/TestContainer'
// import CollegeList from './CollegeList'
// import StudentCalendar from './calendarCard/StudentCalendar'

// material ui
import Grid from '@material-ui/core/Grid'
import Card from "@material-ui/core/Card";
import { Button, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';


export default function StudentContainer() {
  const classes = useStyles()
  const history = useHistory()
  const {
    handleStudentSelect,
    findStudent
  } = useStudent()

  const { studentId } = useParams()

  const student = findStudent(studentId) 

  function handleEditButton(id) {
    handleStudentSelect(id)
    history.push(`/students/edit/${id}`)
  }

  return (
    <Grid container spacing={3} justify="space-between" >
        <Grid item xs={12} >
          <Button 
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            startIcon={<EditIcon />}
            onClick={() => handleEditButton(student.id)} // TODO
          >
            Edit Student
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
                test container here {/* <TestContainer student={student} /> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              Calendar goes here

              {/* <StudentCalendar /> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10}>
          <Card>
            <CardContent>
              college list here {/* <CollegeList collegeList={collegeList} /> */}
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
  }));