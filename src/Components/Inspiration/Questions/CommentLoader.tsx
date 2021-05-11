import React, { Component } from 'react'
import Loadable from "react-loadable"

const Comment = Loadable({
    loader: () => import('./Comment'),
    loading: <Center minH='100vh' w='100vw'><Spinner /></Center>,
});

const CommentLoader = ({ setStep, setFieldValue }) => {

        return (
            <Comment setFieldValue={ setFieldValue } setStep={setStep} />
        )
    }


export default CommentLoader


