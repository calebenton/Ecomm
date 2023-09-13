import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function CreateInventory() {
  let navigate = useNavigate();
  const initialValues = {
    Name: "",
    Quantity: "",
  };

  const validationSchema = Yup.object().shape({
    Name: Yup.string().required(),
    Quantity: Yup.string().required(),
})

  const onSubmit = (data) => {
    axios.post("http://localhost:3002/items", data).then((response) => {
      navigate("/");
      })
  }

  return (
    <div class='createPostPage'> 
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='formContainer'>
        <label>Product Name:</label>
        <ErrorMessage name="title" component="span"/>
        <Field 
            id="inputCreatePost" 
            name="title" 
            placeholder="(Name of Item)"/>
        <label>Quantity:</label>
        <Field 
            id="inputCreatePost" 
            name="postText" 
            placeholder="(How many in stock)"/>
        <ErrorMessage name="title" component="span"/>
            <button type='submit'>Add Inventory</button>
        </Form>
    </Formik>
    </div>
  )
}

export default CreateInventory