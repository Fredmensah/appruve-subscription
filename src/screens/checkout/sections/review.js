import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review(props) {
    const userFields = props.formData;
    const addresses = [userFields.address1 , userFields.address2, userFields.city, userFields.zip, userFields.country];
    const payments = [
        { name: 'Card type', detail: userFields.country },
        { name: 'Card holder', detail: userFields.cardName },
        { name: 'Card number', detail: userFields.cardNumber },
        { name: 'Expiry date', detail: userFields.expDate },
    ];

    const classes = useStyles();
    const subscription = JSON.parse(localStorage.getItem('selectedSubscription'));

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Package ( { subscription.title } )
            </Typography>
            <List disablePadding>
                {subscription.description.map((item , index) => (
                    <ListItem className={classes.listItem} key={item}>
                        <ListItemText textAlign={'center'} primary={`${index + 1}. ${item}`} />
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        {subscription.price}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>`${userFields.firstName} ${userFields.lastName}`</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
