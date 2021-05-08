import React, { Component } from 'react'
import Loadable from "@loadable/component"
const Comment = Loadable(() => import('./Comment'))

const CommentLoader = ({ setStep, setFieldValue }) => {

        return (
            <Comment setFieldValue={ setFieldValue } setStep={setStep} />
        )
    }


export default CommentLoader


