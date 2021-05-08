import { Box } from '@chakra-ui/layout'
import React from 'react'
import { Form, Formik } from 'formik'
import Questions from './Questions'
import {authenticationService} from '../../Service/auth'
import { navigate } from '@reach/router'
import axios from 'axios'
import { config } from '../../config'


const InspirationForm = ({ productId, data }) => {

    return (
        <Formik
            initialValues={{ }}
            onSubmit={(values, { setSubmitting }) => {
                axios.post(
                    `${config.apiUrl}/inspiration/${productId}`,
                    {
                        ...values,
                        user: authenticationService.getUser().userId
                    }
                ).then((response)=> console.log(response.data))
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldError,
                setFieldTouched,
                setFieldValue
                /* and other goodies */
            }) => (
                <Form onSubmit={handleSubmit}>
                    <Questions
                        values={values}
                        setFieldValue={setFieldValue}
                        setFieldError={setFieldError}
                        setFieldTouched={setFieldTouched}
                        handleSubmit={handleSubmit}
                        data={data}
                    />
                    <pre>
                        {JSON.stringify(values, null, 1)}
                    </pre>
                </Form>
            )}

        </Formik>
    )
}

export default InspirationForm