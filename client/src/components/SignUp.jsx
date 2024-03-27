import { Form, Formik } from 'formik';
import React from 'react';
import CustomInput from '../utils/CustomInput';
import { signUpFormValidation } from '../utils/validationSchema';

const SignUp = () => {
  const handleSubmit = (e, values) => {
    console.log(e);
    console.log("Form values:", values);
    // Here you can make an API call to submit the form data
    // setSubmitting(false)
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
      <Formik
        initialValues={{
          email: "n@gmail.com",
          password: "NNNNn1",
          confirmPassword: "NNNNn1"
        }}
        validateOnChange={false} // Update: Disable validation on change
        validateOnBlur={true} // Update: Enable validation on blur
        validate={signUpFormValidation}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: "30px" }}>
            <CustomInput label="Email"
              name="email"
              type="text"
              placeholder="Enter your email"
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            />
            <CustomInput label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            />
            <CustomInput label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Enter your confirmPassword"
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            />
            <button type="submit" style={{ border: "1px solid white" }}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
