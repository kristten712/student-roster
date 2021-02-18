// NOTE KNOWN ERROR WITH TEST.ID BEING REMOVED FROM REACT FORM

import React from 'react';
import Test from './Test'

// list
import List from '@material-ui/core/List';

export default function SubjectTest({ satSubjectTests }) {
    return (
        <List>
            {satSubjectTests.map((test, index) => 
                <Test key={test.id} testType={`SAT II ${test.type}: ${test.score}`}  />
            )} 
        </List>
    )
}
