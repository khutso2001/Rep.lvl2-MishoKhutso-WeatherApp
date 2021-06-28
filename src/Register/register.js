import React from 'react';
 import { Formik, useFormik} from 'formik';
 import './App.css';
 import * as Yup from 'yup';
 import Loader from './Register/Components/Loader';
 import './Register.css';
 
 function Form(){
  const formik = useFormik({
    initialValues: {
      email: '',
      firstname:'',
      lastname:'',
      password:'',
      
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, <p className="required">Must be 15 characters or less</p>)
        .required(<p className="required">please enter your name</p>),
      lastname: Yup.string()
        .max(20, <p className="required">Must be 20 characters or less</p>)
        .required( <p className="required">please enter your lastname</p>),
      email: Yup.string().email(<p className="required">Invalid email address</p>)
      .required(<p className="required">please enter your email</p>),
      password: Yup.string()
      .min(8, <p className="required">Must be 8 characters or more</p>)
      .required(<p className="required">please enter your password</p>),


    }),
    onSubmit: values => {
      console.log(values);
      fetch('https://reqres.in/api/users', {
          method: "POST",
          body: JSON.stringify(
            {
                email:values.email,
                password:values.password,
                name:{
                    firstname:values.firstname,
                    lastname:values.lastname
                }
            }
        )
    })
       .then(res=>res.json())
       .then(json=>{
         console.log(json);
         setStatus(true);
       }
       ).catch((e)=>{
          console.log(e);
       }).finally(()=>{
          setSubmitting(true); 
          
       })
      },
  });
  const {
    values,
    errors,
    touched,
    handleChange, 
    handleBlur,
    handleSubmit,
    setStatus,
    status,
    setSubmitting,
    isSubmitting,
  }=formik;
  const MyInput = ({ field, form, ...props }) => {
    return <input {...field} {...props} />;
  };
  const Welcome =()=>(<div className="Done"> <img  className="welldone"src="data:image/png;base64,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"></img><h1 className="status">WELL DONE</h1></div>)
   return(

    <div className="main">
  
 {status ? (<Welcome/>) : ( 
     
     <Loader isLoading={isSubmitting}>

     
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
     </Loader>
  )}


  </div>
   )
   
 };
 
 export default Form;
