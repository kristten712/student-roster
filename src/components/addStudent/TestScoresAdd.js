import React from 'react'
// import { useStudent } from '../../../../context/StudentContext';
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";

// components
import PsatAdd from './individualTestAdd/PsatAdd'
import SatAdd from './individualTestAdd/SatAdd'
import ActAdd from './individualTestAdd/ActAdd'
import SubjectTestAdd from './individualTestAdd/SubjectTestAdd'
import APAdd from './individualTestAdd/ApAdd'

export default function TestScoresAdd({ register, errors, student, control }) {
    return (
        <> 
        <Box mb={3} mt={2}>
            <PsatAdd register={register} errors={errors} psat={student.psat} />
        </Box>
        <Divider variant="middle" />
        <Box mb={3} mt={2}>
            <SatAdd register={register} errors={errors} sat={student.sat} />
        </Box>
        <Divider variant="middle" />
        <Box mb={3} mt={2}>
            <ActAdd register={register} errors={errors} act={student.act} /> 
        </Box>
        <Divider variant="middle" />
        <Box mb={3} mt={2}>
            <SubjectTestAdd 
                register={register} 
                errors={errors} 
                control={control}
            />
        </Box>
        <Divider variant="middle" />
        <Box mb={3} mt={2}>
            <APAdd 
                register={register} 
                errors={errors} 
                control={control}
            />
        </Box>
        </>
    )
}

