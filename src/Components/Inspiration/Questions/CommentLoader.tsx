import React, { Component } from 'react'
import Loadable from "@loadable/component"
const Comment = Loadable(() => import('./Comment'))

const CommentLoader = () => {


        return (
            <Comment />
        )
    }


export default CommentLoader


