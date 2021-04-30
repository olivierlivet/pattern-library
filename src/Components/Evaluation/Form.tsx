import { Box } from '@chakra-ui/layout'
import React from 'react'
import { Formik, Form } from 'formik';
import Questions from './Questions'
import axios from 'axios';
import { navigate } from '@reach/router';
import { config } from '../../config';
const EvaluationForm = ( { productId } ) => {

    return (
        <Formik
            initialValues={
                {
                    product: productId
                    // NoticeComprehensibilityDetail: '',
                    // ProductCustomisation: '',
                }
            }
            onSubmit={(values, { setSubmitting }) => {
                axios.post(
                    `${config.apiUrl}/evaluation`,
                    values
                ).then((response)=> navigate(`/fr/compte/contribution/evaluation/login/${response.data._id}`))
                // setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                //     navigate('/fr/compte/contribution/evaluation/login/_contributionID_')

                // }, 400);
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
                setFieldTouched,
                /* and other goodies */
            }) => (
                <Form>
                    {/* Product { productId } */}
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