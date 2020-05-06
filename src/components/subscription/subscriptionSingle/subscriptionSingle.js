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
            <Card>
                <CardHeader
                    title={subscription.title}
                    subheader={subscription.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    action={subscription.title === 'Pro' ? <StarIcon /> : null}
                    className={classes.cardHeader}
                />
                <CardContent>
                    <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                            ${subscription.price}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            /mo
                        </Typography>
                    </div>
                    <ul>
                        {subscription.description.map((line) => (
                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                {line}
                            </Typography>
                        ))}
                    </ul>
                </CardContent>
                <CardActions>
                    <Button
                        fullWidth
                        variant={subscription.buttonVariant}
                        color="primary"
                        onClick={(event) => addSubscription(event , subscription)}
                    >
                        {subscription.buttonText}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default SubscriptionSingle;
