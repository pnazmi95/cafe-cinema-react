import { useFormik } from "formik";
import SigninSchema from "../../Validations/SigninVal";
import React from "react";
import { Link, useNavigate } from "react-router-dom";


interface ISignInProps extends React.PropsWithChildren{}

const Signin: React.FunctionComponent<ISignInProps> = (props): JSX.Element => {
  
  const navigate = useNavigate();
  const SigninForm = (): void => {
    alert("You logged in successfully");
    navigate('/');
  };

  const formik = useFormik({
    initialValues : {
      UserName: "",
      Password: ""
    },
    validationSchema : SigninSchema,
    onSubmit: SigninForm
  });
  //------------------- Return Codes Must be Viewed -------------------------
  return (
    <>
      <div className="mt-10 grid justify-items-center">
        <div className="w-full max-w-sm">
          <form
            autoComplete="off"
            onSubmit={formik.handleSubmit}
            className="mb-4 rounded-2xl bg-dark-primary px-8 pt-6 pb-8 shadow-md"
          >
            <div className="mb-4">
              <div className="flex justify-between">
                <label
                  className="mb-2 block text-sm font-bold text-dark-heading"
                  htmlFor="username"
                >
                  USER NAME
                </label>
                <p className="text-xs italic text-dark-error">
                  {formik.touched.UserName && formik.errors.UserName}
                </p>
              </div>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-1 px-3 leading-tight text-dark-primary shadow focus:outline-none"
                id="username"
                type="text"
                {...formik.getFieldProps("UserName")}
                // value={formik.values.UserName}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <label
                  className="mb-2 block text-sm font-bold text-dark-heading"
                  htmlFor="password"
                >
                  PASSWORD
                </label>
                <p className="text-xs italic text-dark-error">
                  {formik.touched.Password && formik.errors.Password}
                </p>
              </div>
              <input
                className="border-red-500 text-gray-700 focus:shadow-outline mb-3 w-full appearance-none rounded border py-1 px-3 leading-tight shadow focus:outline-none"
                id="password"
                type="password"
                {...formik.getFieldProps("Password")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Link to="/sign-up"
                className="text-white focus:shadow-outline rounded py-2 px-4 text-xs font-bold text-light-error focus:outline-none"
              >
                CREATE AN ACCOUNT
              </Link>
              <button
                type="submit"
                className="inline-block rounded bg-light-error py-2 px-8 align-baseline text-xs font-bold"
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;