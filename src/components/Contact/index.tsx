import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import ContactSchema from "./ContactValidation";

interface IContactProps extends React.PropsWithChildren {}

const Contact: React.FunctionComponent<IContactProps> = (
  props
): JSX.Element => {
  const navigate = useNavigate();

  const ContactForm = (): void => {
    alert("Your message is sent successfully.");
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
    },
    validationSchema: ContactSchema,
    onSubmit: ContactForm,
  });

  return (
    <div className="grid h-full w-full grid-flow-row grid-cols-2 justify-start">
      <div className="col-span-2 flex h-[calc(100vh-176px)] w-full flex-col justify-around bg-light-primary p-12 text-light-heading dark:bg-dark-primary dark:text-dark-heading sm:col-span-1">
        <div>
          <h1 className="text-4xl font-bold uppercase">Contact Us</h1>
          <p className="text-1xl w-[70%]">
            If you need any help please contact us, we are looking forward to
            hear it. Please send your suggestions and criticisms through the
            form provided on this page and help us to improve our services.
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="text-3xl font-bold">Get in touch </h2>
          <p className=" text-1xl">
            <span className="font-bold">Email: </span> quera.group9@gmail.com
          </p>
          <p className=" text-1xl">
            <span className="font-bold">Phone: </span> +98912*******
          </p>
          <p className=" text-1xl">
            <span className="font-bold ">Tel-Fax: </span> +98216393****
          </p>
        </div>
      </div>
      <div className="col-span-2 flex h-[calc(100vh-176px)] w-full flex-col items-center justify-around bg-light-primary p-12 text-light-heading dark:bg-dark-primary dark:text-dark-heading sm:col-span-1">
        <form
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="mb-4 rounded-2xl px-8 pt-6 pb-8"
        >
          <div className="mb-4">
            <div className="flex justify-between">
              <label
                className="mb-2 block text-sm font-bold"
                htmlFor="firstName"
              >
                First Name
              </label>
              <p className="text-xs text-light-hover dark:text-dark-error">
                {formik.touched.firstName && formik.errors.firstName}
              </p>
            </div>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-1 px-3 leading-tight text-dark-primary shadow focus:outline-none"
              id="firstName"
              type="text"
              {...formik.getFieldProps("firstName")}
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <label
                className="mb-2 block text-sm font-bold"
                htmlFor="firstName"
              >
                Last Name
              </label>
              <p className="text-xs text-light-hover dark:text-dark-error">
                {formik.touched.lastName && formik.errors.lastName}
              </p>
            </div>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-1 px-3 leading-tight text-dark-primary shadow focus:outline-none"
              id="lastName"
              type="text"
              {...formik.getFieldProps("lastName")}
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <label className="mb-2 block text-sm font-bold" htmlFor="email">
                Email
              </label>
              <p className="text-xs text-light-hover dark:text-dark-error">
                {formik.touched.email && formik.errors.email}
              </p>
            </div>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-1 px-3 leading-tight text-dark-primary shadow focus:outline-none"
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <label
                className="mb-2 block text-sm font-bold"
                htmlFor="description"
              >
                Description
              </label>
              <p className="text-xs text-light-hover dark:text-dark-error">
                {formik.touched.description && formik.errors.description}
              </p>
            </div>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border py-1 px-3 leading-tight text-dark-primary shadow focus:outline-none"
              id="description"
              cols={50}
              rows={5}
              {...formik.getFieldProps("description")}
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded bg-light-hover py-2 px-8 align-baseline text-xs font-bold dark:bg-dark-error"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
