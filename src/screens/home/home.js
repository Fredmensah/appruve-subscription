import React, {Fragment} from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TopNav from "../../components/appBar/appBar";
import SubscriptionSingle from "../../components/subscription/subscriptionSingle/subscriptionSingle";
import Footer from "../../components/footer/footer";
import Particles from 'react-particles-js';

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
    topContent: {
        padding: theme.spacing(8, 0, 6),
        backgroundColor: '#d63a88'
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
    mainHeading: {
        fontSize: '20px',
        fontWeight: '500',
        color: '#535353'
    },
    secondaryHeading: {
        fontSize: '18px',
        fontWeight: '300',
        color: '#272727'
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

const subscriptions = [
    {
        title: 'Free',
        price: '0',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '30',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'outlined',
    },
];
const BackGround = ({ children }) => (
    <>
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 4
                        }
                    }
                }
            }}
            /*params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }}*/
            style={{
                width: '100%',
            }}
        />
        {children}
    </>
);

const Home = (props) => {
    const classes = useStyles();
    const { history } = props;

    return (
        <Fragment>
            <CssBaseline />

            <TopNav/>
            <Container maxWidth="xl" component="main" className={classes.topContent}>
                <BackGround>
                {/*<Typography component="h1" variant="h2" align="center" color="#FFFFFF">
                    Tools to connect Africans to opportunities all over the world
                </Typography>*/}
                </BackGround>
            </Container>
            {/* INtroduction UNit */}
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Pricing
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.mainHeading}>
                    Simple Pricing, no surprises.
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.secondaryHeading}>
                    Start with a 14 days free trial. Upgrade or dwongrade anytime
                </Typography>
            </Container>
            {/* End introduction unit */}

            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {subscriptions.map((subscription , index) => (
                        <SubscriptionSingle subscription={subscription} key={index} history={history}/>
                    ))}
                </Grid>
            </Container>

            {/* Footer */}

            <Footer/>
            {/* End footer */}

        </Fragment>
    );
}

export default Home;
