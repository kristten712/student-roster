import React from 'react';
import { useForm } from 'react-hook-form'
import { useStudent } from '../../context/StudentContext'
import { useHistory } from 'react-router-dom'

// material ui 
import { makeStyles } from '@material-ui/core/styles'
import Box from "@material-ui/core/Box"
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

// components
import AddStudentSectionTitle from './AddStudentSectionTitle'
import AddBasicInfo from './AddBasicInfo'
import TestScoresAdd from './TestScoresAdd'
import CollegeListAdd from './CollegeListAdd'

export default function AddStudentContainer() {
    const classes = useStyles();
    const history = useHistory();
    const {
      handleResetNewStudent,
      newStudent,
      handleAppendNewStudent
    } = useStudent()

    const { register, control, handleSubmit, errors } = useForm({
        defaultValues: {
          sat: newStudent.sat,
          aps: newStudent.aps,
          collegeList: newStudent.collegeList
        }
      });

    const onSubmit = data => { 
        handleAppendNewStudent({...newStudent, ...data})
        handleResetNewStudent()
        history.push(`/`)
    }

    return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Box mb={3} mt={2}>
            <AddStudentSectionTitle title="Basic Information" size="h5" />
            <AddBasicInfo register={register} errors={errors} student={newStudent} />
        </Box>
        <Divider />
        <Box mb={3} mt={2}>
            <AddStudentSectionTitle title="Test Scores" size="h5" />
            <TestScoresAdd register={register} errors={errors} student={newStudent} control={control} />
        </Box>
        <Divider />
        <Box mb={3} mt={2}>
            <AddStudentSectionTitle title="College List " size="h5" />
            <CollegeListAdd register={register} errors={errors} control={control} />
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
