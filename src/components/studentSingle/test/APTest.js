import React from 'react';
import Test from './Test'

// list
import List from '@material-ui/core/List';

export default function APTest({ aps }) {
    return (
        <List>
            {aps.map((ap) => 
                <Test key={ap.id} testType={`${ap.type}: ${ap.score}`}  />
            )} 
        </List>
    )
}