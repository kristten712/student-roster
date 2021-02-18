import React from 'react'
// import { useStudent } from '../../../../context/StudentContext';
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";

// components
import PsatEdit from './individualTestEdit/PsatEdit'
import SatEdit from './individualTestEdit/SatEdit'
import ActEdit from './individualTestEdit/ActEdit'
import SubjectTestEditNew from './individualTestEdit/SubjectTestEdit'
import APEdit from './individualTestEdit/ApEdit'

export default function TestScoresEdit({ register, errors, student, control }) {
    return (
        <> 
        <Box mb={3} mt={2}>
            <PsatEdit register={register} errors={errors} psat={student.psat} />
        </Box>
        <Divider variant="middle" />
        <Box mb={3} mt={2}>
            <SatEdit register={register} errors={errors} sat={student.sat} />
        </Box>
        <Divider variant="middle" />
        <Box mb={3} mt={2}>
            <ActEdit register={register} errors={errors} act={student.act} /> 
        </Box>
        <Divider variant="middle" />
        <Box mb={3} mt={2}>
            <SubjectTestEditNew 
                register={register} 
                errors={errors} 
                control={control}
            />
        </Box>
        <Divider variant="middle" />
        <Box mb={3} mt={2}>
            <APEdit 
                register={register} 
                errors={errors} 
                control={control}
            />
        </Box>
        </>
    )
}

