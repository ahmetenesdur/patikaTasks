import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(5).required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')],"Password doesn't match").required('Confirm Password is required')
});

export default validations;