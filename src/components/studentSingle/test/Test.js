import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

// list
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root:{
    fontSize:'.9em',
  },
  item: {
    padding: 0
  },
}));

export default function Test({ testType }) {
  const classes = useStyles();

    return (
        <ListItem classes={{ root: classes.item }}>
            <ListItemText
              classes={{ primary:classes.root, secondary:classes.root }}
              primary={testType}
            />
        </ListItem>
    )
}
