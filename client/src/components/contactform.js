import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({
    input,
    label,
    placeholder,
    type,
    meta: { touched, error, warning }
}) => (
    <div>
        <label>{label}</label>
        <div className="form-input">
            <input {...input} placeholder={placeholder} type={type} />
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;

const ContactForm = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <div className="center">
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <Field
                    name="email"
                    type="email"
                    component={renderField}
                    label=""
                    placeholder="Email"
                    validate={email}
                />
            </div>

            <div>
                <button className="btn-large dark-primary-color" type="submit" name="action" disabled={pristine || submitting}>Submit
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </form>
        </div>
    );
};

export default reduxForm({
    form: 'contact' // a unique identifier for this form
})(ContactForm);
