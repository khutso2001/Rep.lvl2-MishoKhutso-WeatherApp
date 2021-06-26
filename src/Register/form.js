
 import { useFormik } from 'formik';
 import * as Yup from 'yup';

  const Formik =()=>{
 const formik= useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password:'',
      confirmpassword:'',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required(<p className="required">please enter your name</p>),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required( <p className="required">please enter your lastname</p>),
      email: Yup.string().email('Invalid email address')
      .required(<p className="required">please enter your email</p>),
      password: Yup.string()
      .min(6, 'Must be 15 characters or less')
      .required(<p className="required">please enter your password</p>),
      confirmpassword: Yup.string()
      .min(6, 'Must be 15 characters or less')
      .required(<p className="required">please enter your password</p>),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
}
 export default Formik;