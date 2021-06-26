import React from 'react';
 import {Formik, useFormik } from 'formik';
 import './App.css';
 import * as Yup from 'yup';
 function Form(){
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: '',
      firstName:'',
      lastName:'',
      password:'',
      
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, <p className="required">Must be 15 characters or less</p>)
        .required(<p className="required">please enter your name</p>),
      lastName: Yup.string()
        .max(20, <p className="required">Must be 20 characters or less</p>)
        .required( <p className="required">please enter your lastname</p>),
      email: Yup.string().email(<p className="required">Invalid email address</p>)
      .required(<p className="required">please enter your email</p>),
      password: Yup.string()
      .min(6, <p className="required">Must be 20 characters or less</p>)
      .required(<p className="required">please enter your password</p>),


    }),
    onSubmit: values => {
      console.log(values);
      fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    emial: Formik.values.email,
                    password:Formik.values.password,
                    lastName:Formik.values.lastName,
                    firstname:Formik.values.firstname
                    
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    },
  });
   return(
    <div>
        <form  onSubmit={handleSubmit}>
          <label>please enter your name</label>
           <input className="inputs"
            type="fistname"
            placeholder="fisrt name"
            name="firstname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstname}
          />
           {errors.firstname && touched.firstname && <span className="errors">{errors.firstname}</span>}
           <label>please enter your lastname</label>
           <input className="inputs"
           placeholder="lastname"
            type="lastname"
            name="lastname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastname}
          />
          {errors.lastname && touched.lastname && <span className="errors">{errors.lastname}</span>}
          <label>please enter your email</label>
          <input className="inputs" 
            placeholder="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && <span className="errors">{errors.email}</span>
          }
          <label>please enter your password</label>
          <input className="inputs"
          placeholder="password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && <span className="errors">{errors.password}</span>}
        
          <button className="button" type="submit" disabled={isSubmitting} >
            Submit
          </button>
        </form>
  </div>
   )
   
 };
 
 export default Form;
