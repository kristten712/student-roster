import React from 'react'
import TextField from '@material-ui/core/TextField';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useFieldArray} from "react-hook-form"
import { v4 as uuidv4 } from 'uuid'
import MenuItem from '@material-ui/core/MenuItem';
import ReactHookFormSelect from './ReactHookFormSelect'



export default function CollegeListAdd({ control, register }) {
    const classes = useStyles();
    const { fields, remove, append } = useFieldArray(
        {
          control,
          name: "collegeList",
          keyName: 'react-hook-id' // deafult and you can rename to others
        }
    );

    return (
    <>
        {fields.map((field, index) =>
            <div key={field.id} className={classes.container}>
                <TextField 
                    label='College'
                    variant="outlined"
                    type="text"
                    name={`collegeList[${index}].collegeName`}
                    defaultValue={`${field.collegeName}`}
                    inputRef={register()}
                />

                <ReactHookFormSelect
                    name={`collegeList[${index}].cycle`}
                    label="Cycle"
                    defaultValue={`${field.cycle}`}
                    control={control}
                >
                {collegeCycles.map((cycle) => (
                        <MenuItem key={cycle} value={cycle}>
                                {cycle}
                        </MenuItem>
                    ))}
                </ReactHookFormSelect>

                {/* hidden input to register the id */}
                <input type="hidden" key={field.id} name={`collegeList[${index}].id`} ref={register()} defaultValue={`${field.id}`} />


                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<RemoveCircleOutlineIcon />}
                    onClick={() => remove(index)}
                >
                    Remove College
                </Button>
            </div>
        )}
        <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<AddCircleIcon />}
            onClick={() => append({ id: uuidv4(), collegeName: "", cycle: "" })}
        >
            Add College
        </Button> 
    </>
    )
}

const collegeCycles = ['Early Action', 'Early Decision', 'Regular Decision']

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
