import React from 'react'
import { useFieldArray} from "react-hook-form"
import { v4 as uuidv4 } from 'uuid'
import TextField from '@material-ui/core/TextField';
import EditStudentSectionTitle from '../EditStudentSectionTitle'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import AddCircleIcon from '@material-ui/icons/AddCircle';


export default function ApEdit({ control, register, errors }) {
    const classes = useStyles();
    const { fields, remove, append } = useFieldArray(
        {
          control,
          name: "aps",
          keyName: 'react-hook-id' // deafult and you can rename to others
        }
    );

    return (
    <>
        <EditStudentSectionTitle title="AP Exams" size="h6" />
        {fields.map((field, index) => {
          return (
            <div key={index} className={classes.container}>
                <TextField 
                    label="Test Type"
                    variant="outlined"
                    type="text"
                    name={`aps[${index}].type`}
                    defaultValue={`${field.type}`}
                    inputRef={register()}
                />
                <TextField 
                    label="Test Score"
                    variant="outlined"
                    type="text"
                    name={`aps[${index}].score`}
                    defaultValue={`${field.score}`}
                    inputRef={register({ 
                        valueAsNumber: true,
                        max: {
                            value: 5,
                            message: "Score must be 5 or less."
                        },
                        min: {
                            value: 0,
                            message: "Score cannot be negative."
                        }
                    })}
                    error={(errors.aps && errors.aps[index]) ? true : false}
                    helperText={
                        (errors.aps && errors.aps[index]) 
                        && errors.aps[`${index}`].score.message
                    }
                />

                {/* hidden input to register the id */}
                <input type="hidden" key={field.id} name={`aps[${index}].id`} ref={register()} defaultValue={`${field.id}`} />
                
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<RemoveCircleOutlineIcon />}
                    onClick={() => remove(index)}
                >
                    Remove AP Exam
                </Button> 
            </div>
          );
        })} 
        <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<AddCircleIcon />}
            onClick={() => append({ id: uuidv4(), type: "", score: 0 })}
        >
            Add AP Exam
        </Button> 
    </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        height: '35px',
    }
  }));

