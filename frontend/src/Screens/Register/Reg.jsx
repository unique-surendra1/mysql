import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "FirstName Too Short!")
    .max(20, "FirstName can not be more then 20 characters long!!")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "LastName Too Short!")
    .max(20, "Lastname can not be more then 20 characters long!!")
    .required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password can not be more then 20 characters long!")
    .required("Password is required"),
});

const RegisterForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here, e.g., send data to server
    console.log(values);

    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          //   <Form>
          //     <div className="mb-4">
          //       <Field
          //         name="firstName"
          //         type="text"
          //         as={TextField}
          //         label="First Name"
          //         variant="outlined"
          //         fullWidth
          //       />
          //       <ErrorMessage
          //         name="firstName"
          //         component="div"
          //         className="text-red-500"
          //       />
          //     </div>
          //     <div className="mb-4">
          //       <Field
          //         name="lastName"
          //         type="text"
          //         as={TextField}
          //         label="Last Name"
          //         variant="outlined"
          //         fullWidth
          //       />
          //       <ErrorMessage
          //         name="lastName"
          //         component="div"
          //         className="text-red-500"
          //       />
          //     </div>
          //     <div className="mb-4">
          //       <Field
          //         name="email"
          //         type="email"
          //         as={TextField}
          //         label="Email"
          //         variant="outlined"
          //         fullWidth
          //       />
          //       <ErrorMessage
          //         name="email"
          //         component="div"
          //         className="text-red-500"
          //       />
          //     </div>
          //     <div className="mb-4">
          //       <Field
          //         name="password"
          //         type="password"
          //         as={TextField}
          //         label="Password"
          //         variant="outlined"
          //         fullWidth
          //       />
          //       <ErrorMessage
          //         name="password"
          //         component="div"
          //         className="text-red-500"
          //       />
          //     </div>
          //     <Button
          //       type="submit"
          //       variant="contained"
          //       color="primary"
          //       disabled={isSubmitting}
          //       fullWidth>
          //       {isSubmitting ? "Submitting..." : "Submit"}
          //     </Button>
          //   </Form>

          <Form>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <Field
                id="firstName"
                name="firstName"
                type="text"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <Field
                id="lastName"
                name="lastName"
                type="text"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
