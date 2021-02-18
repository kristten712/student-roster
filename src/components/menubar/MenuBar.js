import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Box from '@material-ui/core/Box'
import { useHistory } from "react-router-dom"

// icons
import GitHubIcon from '@material-ui/icons/GitHub'

export default function MenuBar({ appBarHeight }) {
    const classes = useStyles()
    const history = useHistory()

    function handleGoToPage(path) {
        history.push(path)
    }

    function handleRedirect(url) {
        var win = window.open(url, '_blank')
        win.focus()
    }

    return (
        <AppBar position="fixed" className={classes.appbar} style={{ "height": appBarHeight + 'px' }}>
            <Toolbar>
            <Box display='flex' flexGrow={1}>
                {menuListItems.map((item, index) => (
                    <List key={index} component="nav">
                        <ListItem button onClick={() => handleGoToPage(item.path)}>
                            <ListItemText primary={item.name} className={classes.listItemText} />
                        </ListItem>
                    </List>
                ))}
                </Box>            
                    <IconButton onClick={() => handleRedirect(github.url)}>
                        {github.icon}
                    </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: fade("#abdbe3", 0.9),
        justifyContent: 'center',
    },
    listItemText : {
        color: 'black'
    }
}));

const github = {
        url: 'https://github.com/kristten712/',
        icon: <GitHubIcon />,
}

const menuListItems = [
    {
        name: 'Student Overview',
        path: '/student-roster' 
    }, 
    {
        name: 'Add New Student',
        path: '/student-roster/new'
    }
]