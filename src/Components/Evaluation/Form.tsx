import React from 'react'
import { Formik, Form } from 'formik'
import Questions from './Questions'
import axios from 'axios'
import { navigate } from '@reach/router'
import { config } from '../../config'
import {authenticationService} from '../../Service/auth'
import * as yup from 'yup';

const EvaluationForm = ( { data } ) => {

    return (
        <Formik
            initialValues={
                {}
            }
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting( true )
                console.log( 'submit evaluation', values)
                axios.post(
                    `${config.apiUrl}/evaluation/${data._id}`,
                    {
                        ...values,
                        user: authenticationService.getUser().userId
                    }
                ).then((response)=> navigate(`/fr/contribution/evaluation/login/${response.data._id}`))

            }}
            validationSchema={
                yup.object().shape({
                    size: yup.number().min(30,'La taille doit être comprise entre 30 et 60').max(54,'La taille doit être comprise entre 30 et 60').nullable(),
                    fabricLength: yup.number().min(20, 'La longueur de tissu est comprise entre 20cm et 400 cm').max(400, 'La longueur de tissu est comprise entre 20cm et 400 cm').nullable(),
                })
            }
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
                        data={ data }
                        values={values}
                        errors={errors}
                        touched={touched}
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        setFieldError={setFieldError}
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                    />
                    <pre>
                        { JSON.stringify( values, null, 1 )}
                    </pre>
                </Form>
            )}
        </Formik>
    )
}

export default EvaluationForm