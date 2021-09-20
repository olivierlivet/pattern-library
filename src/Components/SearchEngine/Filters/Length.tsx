import React, { FunctionComponent, useState } from 'react'
import {
    AccordionPanel,
    Box,
    Button,
    Stack,
    Checkbox,
    CheckboxGroup,
    Select,
    AccordionButton,
    AccordionIcon
} from '@chakra-ui/react'
import Label from './FilterLabel'
import ClearButton from './ClearButton'

const Filter: FunctionComponent<props> = ({ handleChange }) => {
    const [values, setValues] = useState()

    return (
        <>
            <AccordionButton>
                <Box flex="1" textAlign="left">Longueur :</Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
                <CheckboxGroup
                    onChange={value => {
                        handleChange('length', value)
                    }}
                    value={values}
                >
                    <Stack spacing={2} direction="column">
                        <Checkbox name='length' value="knee" >Genou</Checkbox>
                        <Checkbox name='length' value="aboveKnee" >Sous le genou</Checkbox>
                        <Checkbox name='length' value="long">Longue</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </AccordionPanel>
        </>
    )
}

export default Filter