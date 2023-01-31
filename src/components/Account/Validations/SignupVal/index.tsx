import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    UserName: Yup.string().required("UserName Must be Filled."),
    EMail: Yup.string().email("E-Mail Format is incorrect").required("E-Mail Must be Filled."),
    Password: Yup.string().required("Password Must be Filled."),
    RePassword: Yup.string().required("Repeat Password Must be Filled.")
});

export default SignupSchema;