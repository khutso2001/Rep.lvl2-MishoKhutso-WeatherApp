import React from "react";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Box } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ElevateAppBar from "../Header/AppBar";
import Footer from "../Footer/Footer";
import { makeStyles } from '@material-ui/core';
import SignInButton from "./SignInButton";
import "./SignIn.css";
import * as Yup from 'yup';
const useStyles = makeStyles({
    contentCenter: {
        justifyContent: 'center',
    },
    fieldWidth: {
        width: '600px',
    },
    remember: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    SigninContent:{
        justifyContent: 'center',
        padding:'20px',
    }
});
const SignIn = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema: Yup.object({

            email: Yup.string().email(<p className="required">Invalid email address</p>)
            .required(<p className="required">please enter your email</p>),
            password: Yup.string()
            .min(8, <p className="required">Must be 8 characters or more</p>)
            .required(<p className="required">please enter your password</p>),
      
      
          }),
        onSubmit: (values, { setStatus, resetForm }) => {
            fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    username: values.email,
                    password: values.password,
                }),
            })
                .then((res) => res.json())
                .then((json) => {
                    console.log(json);
                    setStatus(true);
                    resetForm();
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    console.log("sent");
                    window.localStorage.setItem(values.email, values.password);
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
                    <Grid item  className={classes.SigninContent}>
                        <h1>Sign In</h1>
                    </Grid>
                    <Grid item direction='column'>
                        <Grid item className={classes.contentCenter}>
                            <TextField className={classes.fieldWidth}
                                id="email"
                                value={formik.values.email}
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                label="Your email"
                                variant="outlined"
                                style={{ marginBottom: "20px" }}
                            />
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        </Grid>
                        <Grid item className={classes.contentCenter}>
                            <TextField className={classes.fieldWidth}
                                id="password"
                                value={formik.values.password}
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                label="Your password"
                                variant="outlined"
                            />
                            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                        </Grid>
                        <Grid item className={classes.remember}>
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
                                label="Remember me"
                            />

                            <p>
                                <a className="forgetPass" href="">
                                    Forgot password?
                                </a>
                            </p>
                        </Grid>
                        <SignInButton />

                    </Grid>
                    <Grid item direction='column' >
                        <Grid item className={classes.contentCenter}>
                            <p c>
                                Not a member?{" "}
                                <a href="" >
                                    Register
                                </a>
                            </p>
                        </Grid>
                        <Grid item className={classes.contentCenter}>
                            <p className="fixed">or sign in with:</p>

                        </Grid>
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
                    <Grid item>
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </form>

    )
};

export default SignIn;



