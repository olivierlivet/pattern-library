import { Box } from '@chakra-ui/layout'
import React from 'react'
import { Formik } from 'formik'
import Questions from './Questions'
const ContributionForm = ({ }) => {



    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
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
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <Questions />
                </form>
            )}
        </Formik>
    )
}

export default ContributionForm