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
import SignUnButton from "./SignUpButton";
import "./SignUp.css";
const useStyles = makeStyles({
    SignUpContent: {
        justifyContent: 'center',
        padding: '20px',
    },
    contentCenter: {
        justifyContent: 'center',
        marginTop:'10px',
    },
    nameLastnameWidth:{
        width:'300px',
    },
    fieldWidth: {
        width: '600px',
        justifyContent: 'center',
    },
});
const SignUp = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [register, setIsRegister] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: "",
        },

        onSubmit: (values, { setStatus, resetForm, setErrors, setSubmitting }) => {
            fetch("http://159.65.126.180/api/register", {
                  method: "POST",
                  body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    password_confirmation: values.password_confirmation,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                  },
                })
                
            .then(res => res.json())
              .then((json) => {
                console.log(json);
                  setStatus(true);
                  setIsRegister(true);
                  resetForm();
                
              })
              .catch((error) => {
                console.log(error);
                setErrors({ main: "Error" });
              })
              .finally(() => {
                setSubmitting(true);
              });
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
                        <TextField className={classes.nameLastnameWidth}
                            id="name"
                            value={formik.values.name}
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            label="First Name"
                            variant="outlined"

                        />
                        {formik.errors.name ? <div>{formik.errors.name}</div> : null}


                    </Grid>
                    <Grid item direction='column'  >
                        <Grid item className={classes.contentCenter}>
                            <TextField className={classes.fieldWidth}
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
                        <Grid item  className={classes.contentCenter}>
                            <TextField className={classes.fieldWidth}
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
                        <Grid item className={classes.contentCenter}>
                            <TextField className={classes.fieldWidth}
                                id="password_confirmation"
                                value={formik.values.password_confirmation}
                                name="password_confirmation"
                                type="password"
                                onChange={formik.handleChange}
                                label="Phone Number"
                                variant="outlined"
                                style={{ marginTop: "20px" }}
                                helperText="Optional - for two step authentication"
                            />
                            {formik.errors.password_confirmation ? (
                                <div>{formik.errors.password_confirmation}</div>
                            ) : null}

                        </Grid>
                        <Grid item className={classes.contentCenter}>
                            <FormControlLabel
                                style={{ color: "#6c757d" }}
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        name="checked"
                                        color="primary"
                                    />
                                }
                                label="Subscribe to our newsletter"
                            />
                        </Grid>
                        <SignUnButton className={classes.contentCenter} />
                                <Grid item className={classes.contentCenter}>
                                <p className="fixed">or sign in with:</p>

                                </Grid>
                        <Grid item className={classes.contentCenter}>
                            <Button>
                                <i className="fab fa-facebook-f second"></i>
                            </Button>
                            <Button>
                                <i className="fab fa-twitter second"></i>
                            </Button>
                            <Button>
                                <i className="fab fa-linkedin-in second"></i>
                            </Button>
                            <Button>
                                <i className="fab fa-github"></i>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.contentCenter}>
                        <p>By clicking Sign up you agree to our<a href="#">terms of service</a> </p>
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