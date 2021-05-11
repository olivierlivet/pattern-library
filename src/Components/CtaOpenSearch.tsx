import React, { useState, FC } from 'react'
import {
    Box,
    Button,
} from '@chakra-ui/react'

import { ArrowDownIcon } from '@chakra-ui/icons';

type props = {
    handleSubmit: Function,
    label: String
}

const CtaOpenSearch: FC<props> = ({ handleSubmit, label }) => {
    const [step, setStep] = useState(0)


    return (
        <>
            <Box>
                <Button

                    onClick={ ()=>handleSubmit() }

                    bg='black'
                    borderRadius={3}
                    fontFamily='Noe Display'
                    fontWeight='normal'
                    p={6}
                    py={3}
                    color='white'
                    zIndex='overlay'
                    position='relative'
                    _hover={{
                        bg: 'brand.green.600',
                        outline: 'none'

                    }}
                    _active={{
                        bg: 'brand.green.500',
                        outline: 'none'

                    }}
                    _focus={{
                        bg: 'brand.green.500',
                        outline: 'none'
                    }}
                >
                    {label ? label : `Je cherche un patron`}
                    <ArrowDownIcon ml={2} />
                </Button>
            </Box>
        </>
    )
}

export default CtaOpenSearch