import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Registration() {
    const initialValues = {
        userName: "",
        password: "",
      };

      const validationSchema = Yup.object().shape({
        userName: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3002/auth", data).then(() => {
            console.log(data)
        })
    }

  return (
<div>
<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    <Form className='formContainer'>
    <label>Username:</label>
    <ErrorMessage name="username" component="span"/>
    <Field 
        id="inputCreatePost" 
        name="userName" 
        placeholder="(Ex. John123)"/>

    <label>Password:</label>
    <ErrorMessage name="password" component="span"/>
    <Field 
        id="inputCreatePost" 
        type="password"
        name="password" 
        placeholder="Your password"/>
        <button type='submit'>Register</button>
    </Form>
</Formik>
</div>
  )
}

export default Registration