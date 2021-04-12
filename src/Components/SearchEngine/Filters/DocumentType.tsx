
import React, { FunctionComponent, useState } from 'react'
import {
    Box,
    Button,
    Stack,
    Checkbox,
    CheckboxGroup,
    AccordionPanel
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
            <Label>Format du patron :</Label>
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
                    <ClearButton handleClear={()=>setValues( null )} />
                </CheckboxGroup>
            </AccordionPanel>
        </>
    )
}

export default Filter