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

type props = {
    handleChange: Function
}

const Filter: FunctionComponent<props> = ({ handleChange }) => {
    const [values, setValues] = useState()
    return (
        <>
            <AccordionButton>
                <Box flex="1" textAlign="left">Taille&nbsp;:</Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
                <CheckboxGroup
                    onChange={value => {
                        handleChange('waist', value)
                    }}
                    value={values}
                >
                    <Stack spacing={2} direction="column">
                        <Checkbox value='high' name="waist" >Haute</Checkbox>
                        <Checkbox value='classic' name="waist" >Classique</Checkbox>
                        <Checkbox value='low' name="waist" >Basse</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </AccordionPanel>
        </>
    )
}

export default Filter