import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  styled,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import "./Register.css";
import Spinner from "../../components/Spinner/Spinner";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "../../components/toast/Toasts";

// validating all fields
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
  username: Yup.string()
    .min(2, "User name Too Short!")
    .max(20, "User name can not be more then 20 characters long!!")
    .required("User name is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password can not be more then 20 characters long!")
    .required("Password is required"),
  confirmpassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password can not be more then 20 characters long!")
    .required("Password is required"),
});

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Handle form submission here, e.g., send data to server
    console.log(values);

    const { firstName, lastName, email, password, confirmpassword } = values;

    if (password === confirmpassword && firstName && lastName && email) {
      toast.success("User registred succesully!", toastSuccess);
      setSubmitting(false);
      resetForm();
      navigate("/profile");
    } else {
      toast.error("Password do not matches", toastError);
    }

    setSubmitting(false);
  };

  return (
    <>
      <div>{loading ? <Spinner /> : null}</div>

      <div className="innerForm  w-full  sm:max-w-2xl md:max-w-4xl mx-auto my-20 p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl text-center  font-semibold mb-4 text-blue-700 ">
          Register Now
        </h2>
        <hr className="h-1 w-full bg-blue-700" />

        <br />
        <br />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ isSubmitting, resetForm }) => (
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
              <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 ">
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <Field
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full "
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
                    Last Name <span className="text-red-600">*</span>
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
                    Email <span className="text-red-600">*</span>
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
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700">
                    User Name <span className="text-red-600">*</span>
                  </label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700">
                    Password <span className="text-red-600">*</span>
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

                <div className="mb-4">
                  <label
                    htmlFor="confirmpassword"
                    className="block text-sm font-medium text-gray-700">
                    Confirm Password <span className="text-red-600">*</span>
                  </label>
                  <Field
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                  <ErrorMessage
                    name="confirmpassword"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </section>

              <section>
                <FormControl style={{ display: "flex" }}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group">
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </section>

              <div className="font-bold mt-10 flex flex-col sm:flex-row justify-between gap-x-10  gap-y-5">
                <Button
                  style={{ fontSize: "18px", fontWeight: "500" }}
                  className="w-full"
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
                <Button
                  style={{ fontSize: "18px", fontWeight: "500" }}
                  className="w-full"
                  type="button"
                  variant="outlined"
                  // color="default"
                  color="error"
                  onClick={() => resetForm()}>
                  Reset
                </Button>
              </div>

              {/* Or Sign In */}

              <br />
              <br />

              <hr />

              <section className="mt-5">
                <h1 className="text-gray-700 font-semibold font-mono">
                  All ready have an account ?{" "}
                  <Link className="text-blue-700" to="/login">
                    Login
                  </Link>
                </h1>
              </section>

              <br />
              <br />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterForm;
