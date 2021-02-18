import React from 'react'
import { useHistory } from "react-router-dom"

// button
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import AddCircleIcon from '@material-ui/icons/AddCircle'

// components
import StudentTable from './StudentTable'

export default function StudentsContainer() {
    const classes = useStyles();
    const history = useHistory()
  
    function handleAddStudent() {
      history.push('/new')
    }  

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<AddCircleIcon />}
                onClick={handleAddStudent}
            >
                Add Student
            </Button>
            <Typography color="textSecondary" style={{display: 'inline-block'}}>
                Click on a row to view student details and edit or delete the student. 
            </Typography>
            <StudentTable />
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    button: {
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
}));

