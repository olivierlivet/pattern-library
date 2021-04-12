import React, { FunctionComponent, useState } from 'react'
import {
    AccordionPanel,
    Box,
    Button,
    Stack,
    Checkbox,
    CheckboxGroup
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
            <Label>Assymétrie :</Label>
            <AccordionPanel>
                <CheckboxGroup
                    onChange={value => {
                        handleChange( 'asymetrical', value )
                    }}
                    value={values}
                >
                    <Stack spacing={2} direction="column">
                        <Checkbox value={ true } name="asymetrical" >Oui</Checkbox>
                        <Checkbox value={ false } name="asymetrical" >Non</Checkbox>
                    </Stack>
                    <ClearButton handleClear={()=>setValues( null )} />
                </CheckboxGroup>
            </AccordionPanel>
        </>
    )
}

export default Filter