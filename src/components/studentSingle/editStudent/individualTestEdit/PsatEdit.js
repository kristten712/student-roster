import React from 'react'
import EditStudentSectionTitle from '../EditStudentSectionTitle';
import TextField from '@material-ui/core/TextField';


export default function PsatAdd({ register, errors, psat }) {
    return (
        <>
            <EditStudentSectionTitle title="PSAT" size="h6"/>
                <TextField 
                    label="Math"
                    name="psat.math"
                    variant="outlined"
                    type="number"
                    defaultValue={psat.math}
                    inputRef={register({ 
                        valueAsNumber: true,
                        max: {
                            value: 760,
                            message: "Score must be 760 or less."
                        },
                        min: {
                            value: 160,
                            message: "Score cannot be less than 160."
                        }
                    })}
                    error={(errors.psat && errors.psat.math) ? true : false}
                    helperText={(errors.psat && errors.psat.math) && errors.psat.math.message}
                /> 
                <TextField 
                    label="Reading & Writing"
                    name="psat.readingWriting"
                    variant="outlined"
                    type="number"
                    defaultValue={psat.readingWriting}
                    inputRef={register({ 
                        valueAsNumber: true,
                        max: {
                            value: 760,
                            message: "Score must be 760 or less."
                        },
                        min: {
                            value: 160,
                            message: "Score cannot be less than 160."                        
                        }
                    })}
                    error={(errors.psat && errors.psat.readingWriting) ? true : false}
                    helperText={(errors.psat && errors.psat.readingWriting) && errors.psat.readingWriting.message}
                />  
        </>
    )
}