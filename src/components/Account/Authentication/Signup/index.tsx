import { useFormik } from "formik";
import SignupSchema from "../../Validations/SignupVal";
import { Link, useNavigate } from "react-router-dom";

interface ISignupProps extends React.PropsWithChildren {}

const Signup: React.FunctionComponent<ISignupProps> = (props): JSX.Element => {
  //------------------- Submit Form -------------------------
  const navigate = useNavigate();

  const SignupForm = (): void => {
    alert("You have successfully registered.");
    navigate("/sign-in");
  };

  const formik = useFormik({
    initialValues: {
      UserName: "",
      EMail: "",
      Password: "",
      RePassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: SignupForm,
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
                <p className="text-xs text-light-error">
                  {formik.touched.UserName && formik.errors.UserName}
                </p>
              </div>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-1 px-3 leading-tight text-dark-primary shadow focus:outline-none"
                id="username"
                type="text"
                {...formik.getFieldProps("UserName")}
              />
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <label
                  className="mb-2 block text-sm font-bold text-dark-heading"
                  htmlFor="email"
                >
                  EMAIL
                </label>
                <p className="text-xs text-light-error">
                  {formik.touched.EMail && formik.errors.EMail}
                </p>
              </div>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-1 px-3 leading-tight text-dark-primary shadow focus:outline-none"
                id="email"
                type="email"
                {...formik.getFieldProps("EMail")}
              />
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <label
                  className="mb-2 block text-sm font-bold text-dark-heading"
                  htmlFor="password"
                >
                  PASSWORD
                </label>
                <p className="text-xs text-light-error">
                  {formik.touched.Password && formik.errors.Password}
                </p>
              </div>
              <input
                className="focus:shadow-outline border-red-500 text-gray-700 mb-3 w-full appearance-none rounded border py-1 px-3 leading-tight shadow focus:outline-none"
                id="password"
                type="password"
                {...formik.getFieldProps("Password")}
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <label
                  className="mb-2 block text-sm font-bold text-dark-heading"
                  htmlFor="password"
                >
                  REPEAT PASSWORD
                </label>
                <p className="text-xs text-light-error">
                  {formik.touched.RePassword && formik.errors.RePassword}
                </p>
              </div>
              <input
                className="focus:shadow-outline border-red-500 text-gray-700 mb-3 w-full appearance-none rounded border py-1 px-3 leading-tight shadow focus:outline-none"
                id="password"
                type="password"
                {...formik.getFieldProps("RePassword")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Link to="/sign-in"
                className="text-white focus:shadow-outline rounded py-2 px-4 text-xs font-bold text-light-error focus:outline-none"
              >
                LOG IN
              </Link>
              <button
                type="submit"
                className="inline-block rounded bg-light-error py-2 px-8 align-baseline text-xs font-bold"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
