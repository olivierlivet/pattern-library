import React, { FunctionComponent, useState } from 'react'
import {
    AccordionPanel,
    Box,
    Button,
    Stack,
    Checkbox,
    CheckboxGroup,
    Select
} from '@chakra-ui/react'
import Label from './FilterLabel'
import ClearButton from './ClearButton'

const Filter: FunctionComponent = () => {
    return (
        <>
            <Label>Longueur :</Label>
            <AccordionPanel>
                <Stack spacing={2} direction="column">
                    <Checkbox value='length' name="pocket" >Genou</Checkbox>
                    <Checkbox value='length' name="pocket" >Basse</Checkbox>
                </Stack>
            </AccordionPanel>
        </>
    )
}

export default Filter