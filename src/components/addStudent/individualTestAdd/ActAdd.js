import React from 'react'
import AddStudentSectionTitle from '../AddStudentSectionTitle';
import TextField from '@material-ui/core/TextField';


export default function SatAdd({ register, errors, act }) {
    return (
        <>
            <AddStudentSectionTitle title="ACT" size="h6"/>
                <TextField 
                    label="STEM"
                    variant="outlined"
                    name="act.stem"
                    type="number"
                    defaultValue={act.stem}
                    inputRef={register({ 
                        valueAsNumber: true,
                        max: {
                            value: 36,
                            message: "Score must be 36 or less."
                        },
                        min: {
                            value: 0,
                            message: "Score cannot be negative."
                        }
                    })}
                    error={(errors.act && errors.act.stem) ? true : false}
                    helperText={(errors.act && errors.act.stem) && errors.act.stem.message}
                /> 
                <TextField 
                    label="ELA"
                    variant="outlined"
                    name="act.ela"
                    type="number"
                    defaultValue={act.ela}
                    inputRef={register({ 
                        valueAsNumber: true,
                        max: {
                            value: 36,
                            message: "Score must be 36 or less."
                        },
                        min: {
                            value: 0,
                            message: "Score cannot be negative."
                        }
                    })}
                    error={(errors.act && errors.act.ela) ? true : false}
                    helperText={(errors.act && errors.act.ela) && errors.act.ela.message}
                />   
        </>
    )
}