import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function AddtudentAddSectionTitle({ title, size }) {
    return (
        <Typography variant={size}>
            {title}
        </Typography>
    )
}
