import { Form, Formik } from 'formik';
import React from 'react';
import CustomInput from '../utils/CustomInput';
import { signUpFormValidation } from '../utils/validationSchema';

const SignUp = () => {
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post("url", values, {
        headers: {
          "content-type": "application/json"
        }
      })
    } catch (error) {
      // error logic

      // toast error, alert msg, ...
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validateOnBlur={true}
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
