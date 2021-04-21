import React, { Component } from 'react'
import Loadable from "@loadable/component"
const Comment = Loadable(() => import('./Comment'))

const CommentLoader = ({ setStep }) => {

        return (
            <Comment setStep={setStep} />
        )
    }


export default CommentLoader


