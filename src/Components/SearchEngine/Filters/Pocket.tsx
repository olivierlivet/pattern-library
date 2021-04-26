import React, { FunctionComponent, useState } from 'react'
import {
    AccordionPanel,
    Box,
    Button,
    Stack,
    Checkbox,
    CheckboxGroup,
    AccordionIcon,
    AccordionButton
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
                <Box flex="1" textAlign="left">Poches&nbsp;:</Box>
                <AccordionIcon />
            </AccordionButton>

            <AccordionPanel>
                <CheckboxGroup
                    onChange={value => {
                        handleChange( 'pocket', value )
                    }}
                    value={values}
                >
                    <Stack spacing={2} direction="column">
                        <Checkbox value='with' name="pocket" >Avec poche</Checkbox>
                        <Checkbox value='without' name="pocket" >Sans poche</Checkbox>
                    </Stack>
                    {/* <ClearButton handleClear={()=>setValues( null )} /> */}
                </CheckboxGroup>
            </AccordionPanel>
        </>
    )
}

export default Filter