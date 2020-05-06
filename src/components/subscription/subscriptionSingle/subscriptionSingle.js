import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {makeStyles} from "@material-ui/core";
import StarIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import paths from "../../../utilities/paths";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        textTransform: 'uppercase',
        fontSize: '16px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #e5e5e552'
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
        color: '#e51e82'
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
    outlined: {
        border: '0.5px solid #e51e82',
        color: '#e51e82',
        backgroundColor: '#FFFFFF',
        fontSize: '14px',
        width: '200px',
        margin: '0 auto'
    },
    contained: {
        border: '0.5px solid #e51e82',
        color: '#FFFFFF',
        backgroundColor: '#e51e82',
        fontSize: '14px',
        width: '200px',
        textAlign: 'center',
        margin: '0 auto'
    }
}));

const SubscriptionSingle = (props) => {
    const history = props.history;
    const subscription = props.subscription;
    const classes = useStyles();

    const addSubscription = (event , subscription) => {
        localStorage.setItem('selectedSubscription' , JSON.stringify(subscription));
        history.push(paths.checkout);
    }

    return (
        <Grid item key={subscription.title} xs={12} sm={subscription.title === 'Enterprise' ? 12 : 6} md={4}>
            <Card className={subscription.title === 'Pro' ? 'shadow2' : 'shadow1'}>
                <CardHeader
                    title={subscription.title}
                    subheader={subscription.subheader}
                    titleTypographyProps={{ align: 'center' , textTransform: 'uppercase' , fontSize: '16px' }}
                    subheaderTypographyProps={{ align: 'center' , fontSize: '16px'}}
                    action={subscription.title === 'Pro' ? <StarIcon style={{color:'#e51e82'}} /> : null}
                    className={classes.cardHeader}
                />
                <CardContent>
                    <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h4">
                            ${subscription.price}
                        </Typography>
                        <Typography variant="h6">
                            /mo
                        </Typography>
                    </div>
                    <ul>
                        {subscription.description.map((line, index) => (
                            <Typography style={{fontSize: '14px'}} component="li" variant="subtitle1" align="center" key={index}>
                                {line}
                            </Typography>
                        ))}
                    </ul>
                </CardContent>
                <CardActions>
                    <Button
                        fullWidth
                        className={classes[subscription.buttonVariant]}
                        onClick={(event) => addSubscription(event , subscription)}
                    >
                        {subscription.buttonText}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default withRouter(SubscriptionSingle);
