import { Box } from '@chakra-ui/layout'
import React from 'react'
import { Formik, Form } from 'formik';
import Questions from './Questions'
const EvaluationForm = ({ }) => {

    return (
        <Formik
            initialValues={
                {
                    // NoticeComprehensibility: '',
                    // NoticeComprehensibilityDetail: '',
                    // ProductCustomisation: '',
                }
            }
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                initialValues,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldError,
                setFieldValue,
                setFieldTouched
                /* and other goodies */
            }) => (
                <Form>
                    <Questions
                        values={values}
                        errors={errors}
                        touched={touched}
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        setFieldError={setFieldError}
                        handleSubmit={handleSubmit}
                    />

                    <pre>
                        { JSON.stringify( values , null, 1)}
                    </pre>
                </Form>
            )}
        </Formik>
    )
}

export default EvaluationForm