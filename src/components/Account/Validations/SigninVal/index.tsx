import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
    UserName: Yup.string().required("UserName Must be Filled."),
    Password: Yup.string().required("Password Must be Filled.")
});

export default SigninSchema;