import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Button, Input, Box, Stack } from '@chakra-ui/react';
import React, { FunctionComponent, useState } from 'react'
import { Transition } from 'react-transition-group';

type props = {

}

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out, max-height ${duration}ms ease-in-out`,
    opacity: 0,
    transform: `translateY(-20px)`,
    pointerEvents: 'none'
}

const transitionStyles = {
    entering: {
        maxHeight: 0,
        opacity: 1,
        transform: `translateY(0)`
    },
    entered: {
        maxHeight: '1000px',
        opacity: 1,
        transform: `translateY(0)`,
        pointerEvents: `auto`
    },
    exiting: { opacity: 0, maxHeight: 0 },
    exited: { opacity: 0, maxHeight: 0 },
}

const LoginForm: FunctionComponent<props> = ({ }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <Stack spacing={{ base: 2, lg: 4 }}>
            <FormControl>
                <FormLabel>Email :</FormLabel>
                <Input
                    name='email'
                    type='email'
                    placeholder='email'

                    onBlur={(e)=> setEmail(e.target.value)}
                />
            </FormControl>

            <Transition in={email} timeout={duration}>
            {
                state => (

                    <FormControl
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    >
                        <FormLabel>Password :</FormLabel>
                        <Input
                            name='password'
                            type='password'
                            placeholder='password'

                            onBlur={(e)=> setPassword(e.target.value)}

                        />
                        <FormHelperText>
                            <Button variant='link' fontWeight='normal' justifyContent='flex-end' w='100%'>
                                Mot de passe oublié ?
                            </Button>
                        </FormHelperText>
                    </FormControl>
                )
            }
            </Transition>

            <Transition in={(email && password)} timeout={duration}>
            {
                state => (

                    <Box
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    >
                        <Button>
                            Valider
                        </Button>
                    </Box>
                )
            }
            </Transition>


        </Stack>
    )
}

export default LoginForm