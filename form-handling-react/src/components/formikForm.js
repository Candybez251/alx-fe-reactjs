import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalids email format').required('Email is required'),
    password: Yup.string().min(6, 'Minimum 6 required Characters').required('Password is required')
});

const FormikForm = () => {
    return (
        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log('Submitted values:', values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (

                <Form>
                    <div>
                        <label>Username:</label>
                        <Field type='text' name='username' placeholder='Enter your Username' />
                        <ErrorMessage name='username' component='p' className='error' />
                    </div>

                    <div>
                        <label>Email:</label>
                        <Field type='email' name='email' placeholder='Enter your email address' />
                        <ErrorMessage name='email' component='p' className='error' />
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field type='password' name='password' placeholder='Enter your Password' />
                        <ErrorMessage name='password' component='p' className='error' />
                    </div>

                    <button type="submit" disabled={isSubmitting}>Register</button>
                </Form>

            )


            }
        </Formik>
    );
};

export default FormikForm;