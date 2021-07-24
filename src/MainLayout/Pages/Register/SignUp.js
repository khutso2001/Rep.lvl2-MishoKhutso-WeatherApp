import React from "react";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Box } from "@material-ui/core";
import ElevateAppBar from "../../Header/AppBar";
import Footer from "../../Footer/Footer";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    SignUpContent: {
        justifyContent: 'center',
        padding: '20px',
    },
    contentCenter: {
        justifyContent: 'center',
    },
    fieldWidth: {
        width: '600px',
        justifyContent: 'center',
    },
});
const SignUp = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: '',
        },

        onSubmit: (values) => {
            console.log('sent');
        },
    });

    return (
        <form className="styling" onSubmit={formik.handleSubmit}>
            <Container>
                <Grid Container direction='column'>
                    <Grid item>
                        <ElevateAppBar />
                    </Grid>
                    <Grid item className={classes.SignUpContent}>
                        <h1>Sign Up</h1>
                    </Grid>
                    <Grid item className={classes.contentCenter}>
                        <TextField
                            id="firstName"
                            value={formik.values.firstName}
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            label="First Name"
                            variant="outlined"
                        />
                        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

                        <TextField
                            id="lastName"
                            value={formik.values.lastName}
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            label="Last Name"
                            variant="outlined"
                        />
                        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                    </Grid>
                    <Grid item direction='column'  >
                        <Grid item>
                        <TextField 
                            id="email"
                            value={formik.values.email}
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            label="Your email"
                            variant="outlined"
                        />
                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                        </Grid>
                        <Grid item >
                        <TextField 
                            id="password"
                            value={formik.values.password}
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            label="Your password"
                            variant="outlined"
                            style={{ marginTop: "20px" }}
                            helperText="At least 8 characters and 1 digit"
                        />
                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                            </Grid>
                            <Grid item>
                            <TextField 
                            id="phoneNumber"
                            value={formik.values.phoneNumber}
                            name="phoneNumber"
                            type="number"
                            onChange={formik.handleChange}
                            label="Phone Number"
                            variant="outlined"
                            style={{ marginTop: "20px" }}
                            helperText="Optional - for two step authentication"
                        />
                        {formik.errors.phoneNumber ? (
                            <div>{formik.errors.phoneNumber}</div>
                        ) : null}

                            </Grid>
                        
                       
                        
                        
                    </Grid>

                    <Grid item>
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </form>
    );
};

export default SignUp;