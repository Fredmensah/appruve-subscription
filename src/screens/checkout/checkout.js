import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from "./sections/addressForm";
import PaymentForm from "./sections/paymentForm";
import Review from "./sections/review";
import TopNav from "../../components/appBar/appBar";
import Footer from "../../components/footer/footer";
import { v1 as uuidv1 } from 'uuid';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        backgroundColor: '#e51e82',
        padding: theme.spacing(0.8 , 7),
    },
    button1: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        backgroundColor: '#FFFFFF',
        color: '#e51e82',
        border: '0.5px solid #e51e82',
        padding: theme.spacing(0.8 , 7),
    },
}));

export default function Checkout() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [data , setData] = React.useState({
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        zip: '',
        country: '',
        cvv: '',
        cardName: '',
        cardNumber: '',
        expDate: '',
    });

    const steps = ['Customer address', 'Payment details', 'Review your subscription'];

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <AddressForm formData={data} collectData={formDataHandler}/>;
            case 1:
                return <PaymentForm formData={data} collectData={formDataHandler}/>;
            case 2:
                return <Review formData={data} collectData={formDataHandler}/>;
            default:
                throw new Error('Unknown step');
        }
    }

    const formDataHandler = event => {
        const { ...formData }  = data;

        formData[event.target.name] = event.target.value;
        /*if (event.target.name === 'password') {
            this.form.isFormValid(false);
        }*/
        setData(formData);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <TopNav/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your subscription.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your subscription number is {uuidv1()}.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button1}>
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Complete' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
                <Footer/>
            </main>
        </React.Fragment>
    );
}
