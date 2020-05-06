import React from 'react';
import {makeStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        //borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
        textAlign: 'left',
        color: '#36b37e'
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    linker: {
        border: '0.5px solid #e51e82',
        color: '#e51e82',
        backgroundColor: '#FFFFFF',
        fontSize: '12px',
        padding: theme.spacing(0.8, 4),
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const TopNav = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" color="#FFFFFF" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="#36b37e" noWrap className={classes.toolbarTitle}>
                    Appruve
                </Typography>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Features
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Enterprise
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Support
                    </Link>
                </nav>
                <Button href="#" className={classes.linker}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default TopNav;
