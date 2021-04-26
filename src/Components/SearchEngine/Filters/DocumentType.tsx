
import React, { FunctionComponent, useState } from 'react'
import {
    Box,
    Button,
    Stack,
    Checkbox,
    CheckboxGroup,
    AccordionPanel,
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
                <Box flex="1" textAlign="left">Format du patro&nbsp;:</Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
                <CheckboxGroup
                    onChange={value => {
                        handleChange( 'type', value )
                    }}
                    value={values}
                >
                    <Stack spacing={2} direction="column">
                        <Checkbox value='paper' name="fileFormat" >Pochette papier</Checkbox>
                        <Checkbox value='digital' name="fileFormat" >Fichier PDF</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </AccordionPanel>
        </>
    )
}

export default Filter