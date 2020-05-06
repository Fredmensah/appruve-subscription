import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm(props) {
    const userFields = props.formData;

    const [formFields , setFormFields] = React.useState({
        cvv: userFields.cvv,
        cardName: userFields.cardName,
        cardNumber: userFields.cardNumber,
        expDate: userFields.expDate,
    });

    const handleChange = (event) => {
        const { ...formData }  = formFields;
        formData[event.target.name] = event.target.value;
        setFormFields(formData);
        props.collectData(event);
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        label="Name on card"
                        onChange={handleChange}
                        value={formFields.cardName}
                        fullWidth
                        name="cardName"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Card"
                        onChange={handleChange}
                        value={formFields.cardNumber}
                        name="cardNumber"
                        number
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        value={formFields.expDate}
                        label="Expiry date"
                        onChange={handleChange}
                        fullWidth
                        name="expDate"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        name="cvv"
                        onChange={handleChange}
                        value={formFields.cvv}
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember credit card details for next time"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
