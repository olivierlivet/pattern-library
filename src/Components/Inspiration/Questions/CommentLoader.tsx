import React, { Component } from 'react'
import Loadable from "react-loadable"

const Comment = Loadable({
    loader: () => import('./Comment'),
    loading: 'Loading',
});

const CommentLoader = ({ setStep, setFieldValue }) => {

        return (
            <Comment setFieldValue={ setFieldValue } setStep={setStep} />
        )
    }


export default CommentLoader


