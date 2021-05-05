import React, { FunctionComponent } from 'react'

type props = {
    onClose: Function
}

import {
    Button
} from '@chakra-ui/react'

import {
    ArrowBackIcon,
    CloseIcon
} from '@chakra-ui/icons'

const CloseButton: FunctionComponent<props> = ({ onClose }) => {
    return(
        <Button
            borderRadius='full'
            w='50px'
            h='50px'
            position={{ base:'fixed'}}
            top={5}
            left={5}
            onClick={()=>onClose()}
            zIndex='tooltip'
        >
            <ArrowBackIcon />
        </Button>
    )
}

export default CloseButton