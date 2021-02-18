import React from 'react'
import AddStudentSectionTitle from '../AddStudentSectionTitle';
import TextField from '@material-ui/core/TextField';


export default function SatAdd({ register, errors, sat }) {
    return (
        <>
            <AddStudentSectionTitle title="SAT" size="h6"/>
                <TextField 
                    label="Math"
                    variant="outlined"
                    name="sat.math"
                    type="number"
                    defaultValue={sat.math}
                    inputRef={register({ 
                        valueAsNumber: true,
                        max: {
                            value: 800,
                            message: "Score must be 800 or less."
                        },
                        min: {
                            value: 0,
                            message: "Score cannot be negative."
                        }
                    })}
                    error={(errors.sat && errors.sat.math) ? true : false}
                    helperText={(errors.sat && errors.sat.math) && errors.sat.math.message}
                /> 
                <TextField 
                    label="Verbal"
                    variant="outlined"
                    name="sat.verbal"
                    type="number"
                    defaultValue={sat.verbal}
                    inputRef={register({ 
                        valueAsNumber: true,
                        max: {
                            value: 800,
                            message: "Score must be 800 or less."
                        },
                        min: {
                            value: 0,
                            message: "Score cannot be negative."
                        }
                    })}
                    error={(errors.sat && errors.sat.verbal) ? true : false}
                    helperText={(errors.sat && errors.sat.verbal) && errors.sat.verbal.message}
                />  
                <TextField 
                    label="Essay"
                    variant="outlined"
                    name="sat.essay"
                    type="number"
                    defaultValue={sat.essay}
                    inputRef={register({ 
                        valueAsNumber: true,
                        max: {
                            value: 8,
                            message: "Score must be 8 or less."
                        },
                        min: {
                            value: 0,
                            message: "Score cannot be negative."
                        }
                    })}
                    error={(errors.sat && errors.sat.essay) ? true : false}
                    helperText={(errors.sat && errors.sat.essay) && errors.sat.essay.message}
                />  
        </>
    )
}