import React, { FunctionComponent } from 'react'

type props = {
    onClose: Function
}

import {
    Button,
    Text
} from '@chakra-ui/react'

import {
    ArrowBackIcon,
    CloseIcon
} from '@chakra-ui/icons'

const CloseButton: FunctionComponent<props> = ({ onClose }) => {
    return(
        <Button
            borderRadius='full'
            boxShadow='sm'
            border='solid 1px'
            borderColor='transparent'

            bg='whiteAlpha.900'
            w={{ base:'40px', lg:'auto' }}
            h='40px'
            onClick={()=>onClose()}

            _hover={{
                bg:'white',
                border:'solid 1px',
                borderColor:'gray.100'
            }}
        >
            <ArrowBackIcon />
            <Text
                as='span'
                ml={2}
                fontWeight='small'
                display={{ base:'none', lg:'inline'}}
            >Retour</Text>
        </Button>
    )
}

export default CloseButton