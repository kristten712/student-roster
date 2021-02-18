import React from 'react'
import { useForm } from 'react-hook-form'
import { useStudent } from '../../../context/StudentContext'
import { useParams, useHistory } from 'react-router-dom'

// material ui 
import { makeStyles } from '@material-ui/core/styles'
import Box from "@material-ui/core/Box"
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

// components
import EditStudentSectionTitle from './EditStudentSectionTitle'
import BasicInfo from './BasicInfo'
import TestScoresEdit from './TestScoresEdit'
import CollegeListEdit from './CollegeListEdit'

export default function EditStudentContainer() {
    const classes = useStyles();
    const history = useHistory();
    const {
        handleStudentChange,
        findStudent
      } = useStudent()
    const { studentId } = useParams()
    const student = findStudent(studentId) 
    const { register, control, handleSubmit, errors } = useForm({
        defaultValues: {
          sat: student.sat,
          aps: student.aps,
          collegeList: student.collegeList
        }
      });

    const onSubmit = data => {
        handleStudentChange(student.id, { ...student, ...data })
        history.push(`/student-roster/students/view/${student.id}`)
    }

    return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Box mb={3} mt={2}>
            <EditStudentSectionTitle title="Basic Information" size="h5" />
            <BasicInfo register={register} errors={errors} student={student} />
        </Box>
        <Divider />
        <Box mb={3} mt={2}>
            <EditStudentSectionTitle title="Test Scores" size="h5" />
            <TestScoresEdit register={register} errors={errors} student={student} control={control} />
        </Box>
        <Divider />
        <Box mb={3} mt={2}>
            <EditStudentSectionTitle title="College List " size="h5" />
            <CollegeListEdit register={register} errors={errors} control={control} />
       </Box>
        <Box mb={3} mt={2}>
            <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"            
            >
                Submit
            </Button>
        </Box>
    </form>
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
