import { useFormik } from "formik";
import * as Yup from 'yup';
import style from "./ContactsPage.module.css";
import {formAPI} from "../../api/api";

export const ContactsForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string()
                .max(500, 'Must be 500 characters or less')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formAPI.send(values)
                .then(() => {
                    alert('Message send')
                })
        },
    });
    return (
        <form className={style.contact__form} onSubmit={formik.handleSubmit}>
            <p className={style.contact__form_title}>Send Me Message</p>
            <div className={style.contact__form_box}>
                <input className={style.contact__form_input}
                    id="name"
                    name="name"
                    type="text"
                    placeholder='Name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}

                <input className={style.contact__form_input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>



            <input className={style.contact__form_input}
                id="subject"
                name="subject"
                type="text"
                placeholder='Subject'
                onChange={formik.handleChange}
                value={formik.values.subject}
            />

            <textarea className={style.contact__form_textarea}
                id="message"
                name="message"
                placeholder='Message'
                onChange={formik.handleChange}
                value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
                <div>{formik.errors.message}</div>
            ) : null}

            <button className={style.btn} type="submit">Send Message</button>
        </form>
    );
};