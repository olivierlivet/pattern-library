import React, { FunctionComponent, useState } from 'react'
import {
    AccordionPanel,
    Box,
    Button,
    Stack,
    Checkbox,
    CheckboxGroup,
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
                <Box flex="1" textAlign="left">Assymétrie&nbsp;:</Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
                <CheckboxGroup
                    onChange={value => {
                        handleChange('asymetrical', value)
                    }}
                    value={values}
                >
                    <Stack spacing={2} direction="column">
                        <Checkbox value={true} name="asymetrical" >Oui</Checkbox>
                        <Checkbox value={false} name="asymetrical" >Non</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </AccordionPanel>
        </>
    )
}

export default Filter