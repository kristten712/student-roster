import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function BasicInfo({ register, errors, student }) {
    return (
    <>
        <TextField 
            label="First Name"
            name="firstName"
            variant="outlined"
            type="text"
            defaultValue={student.firstName}
            inputRef={register({ required: "Required" })}
            error={errors.firstName ? true : false}
            helperText={errors.firstName && errors.firstName.message}
        />
        <TextField 
            label="Last Name"
            name="lastName"
            variant="outlined"
            type="text"
            defaultValue={student.lastName}
            inputRef={register({ required: "Required" })}
            error={errors.lastName ? true : false}
            helperText={errors.lastName && errors.lastName.message}
        />
        <TextField 
            label="Email"
            name="email"
            variant="outlined"
            type="text"
            defaultValue={student.email}
            inputRef={register({
                required: "required",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Entered value does not match email format"
                }
            })}
            error={errors.email ? true : false}
            helperText={errors.email && errors.email.message}
        />  
        <TextField 
            label="High School"
            name="highSchool"
            variant="outlined"
            type="text"
            defaultValue={student.highSchool}
            inputRef={register({ required: "Required" })}
            error={errors.highSchool ? true : false}
            helperText={errors.highSchool && errors.highSchool.message}
        />  
        <TextField 
            label="Grade"
            name="grade"
            variant="outlined"
            type="number"
            defaultValue={student.grade}
            inputRef={register({ 
                required: "Required",
                max: {
                    value: 14,
                    message: "Grade must be less than 14."
                },
                min: {
                    value: 1,
                    message: "Grade must be greater than 0."
                }
            })}
            error={errors.grade ? true : false}
            helperText={errors.grade && errors.grade.message}
        />  
        <TextField 
            label="Prospective Major"
            name="major"
            variant="outlined"
            type="text"
            defaultValue={student.major}
            inputRef={register({ required: "Required" })}
            error={errors.major ? true : false}
            helperText={errors.major && errors.major.message}
        /> 
    </>
    )
}
