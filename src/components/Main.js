import React from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

// context
import { StudentProvider } from '../context/StudentContext'

// components
import MenuBar from './menubar/MenuBar'
import Routes from './Routes'

export default function Main() {
    const appBarHeight = 50 // customized height of MenuBar
    const classes = useStyles()    

    return (
        <StudentProvider>
            <Router>
                <div className={classes.root}>
                    <MenuBar appBarHeight={appBarHeight} />
                    <main className={classes.content}>
                    <div style={{ "height": appBarHeight + 'px' }} />
                        <Switch>
                            <Routes />
                        </Switch>
                    </main>
                </div>
            </Router>
        </StudentProvider>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        width: "100%",
        margin: theme.spacing(3),
    }
}))