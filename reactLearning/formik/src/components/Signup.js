import React from 'react'
import { useFormik } from 'formik';

import validations from './validations';

function Signup() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: validations
    });

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />

                {errors.email && touched.email && <div className='error'>{errors.email}</div>}

                <br />
                <br />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />

                {errors.password && touched.password && <div className='error'>{errors.password}</div>}

                <br />
                <br />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />

                {errors.confirmPassword && touched.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}

                <br />
                <br />

                <button type="submit">Submit</button>

                <br />
                <br />

                json data : <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
        </div>
    )
}

export default Signup