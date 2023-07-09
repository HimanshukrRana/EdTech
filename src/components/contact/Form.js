import { useFormik } from "formik";
import React from "react";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

function Form() {
  const signUpSchema = Yup.object({
    name: Yup.string().min(4).max(20).required("Please enter your Name"),

    email: Yup.string().email().required("Please enter your Email"),
    phone: Yup.number().required("Please enter your Phone Number"),

    company: Yup.string().min(5).max(30).required("Please enter your Address"),
    subject: Yup.string().min(5).max(50).required("Please enter your Subject"),

    message: Yup.string()
      .min(10)
      .max(100)
      .required("Please enter your Message for Reaching"),
  });

  const initialValues = {
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  };

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        action.resetForm();
        sendContactForm(values);
      },
    });

  const sendContactForm = async (data) => {
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      toast.success("Your Form submitted successfully");

      // console.log(res, 'res');
    });
  };
  return (
    <form className="col-lg-8" onSubmit={handleSubmit}>
      <div className="row">
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="md:w-1/2">
            <div className="form-group">
              <input
                className="h-14 w-full rounded-2xl border-none pl-4 pr-20 shadow-2xl focus:shadow focus:outline-none "
                placeholder="Enter your name"
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="text-red-500">{errors.name}</p>
              ) : null}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="form-group">
              <input
                className="h-14 w-full rounded-2xl border-none pl-4 pr-20 shadow-2xl focus:shadow focus:outline-none "
                type="number"
                placeholder=" Phone Number"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                onBlur={handleBlur}
              />
            </div>
            {errors.phone && touched.phone ? (
              <p className="text-red-500">{errors.phone}</p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <div className="col-lg-6">
            <input
              className=" h-14 w-full rounded-2xl border-none pl-4 pr-20 shadow-2xl focus:shadow focus:outline-none "
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="text-red-500">{errors.email}</p>
            ) : null}
          </div>

          <div className="col-lg-6">
            <input
              className=" h-14 w-full rounded-2xl border-none pl-4 pr-20 shadow-2xl focus:shadow focus:outline-none "
              placeholder="Subject"
              type="text"
              name="subject"
              onChange={handleChange}
              value={values.subject}
              onBlur={handleBlur}
            />
            {errors.subject && touched.subject ? (
              <p className="text-red-500">{errors.subject}</p>
            ) : null}
          </div>

          <div className="col-lg-12">
            <textarea
              className=" w-full  rounded-2xl border-none pl-4 pr-20 shadow-2xl focus:shadow focus:outline-none "
              placeholder="Message"
              name="message"
              onChange={handleChange}
              value={values.message}
              onBlur={handleBlur}
              // onSubmit={onSubmit}
            />
            {errors.message && touched.message ? (
              <p className="text-red-500">{errors.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="rounded-xl bg-[#1D2130]  p-2 text-white hover:bg-[#313852] active:bg-[#313852]"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
