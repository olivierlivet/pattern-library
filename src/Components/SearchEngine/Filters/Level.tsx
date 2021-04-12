
import React, { FunctionComponent, useState } from 'react'
import {
    AccordionButton,
    AccordionIcon,
    AccordionPanel,

    Box,
    Stack,
    Checkbox,
    CheckboxGroup
} from '@chakra-ui/react'
import Label from './FilterLabel'

type props = {
    handleChange: Function
}

const Filter: FunctionComponent<props> = ({ handleChange }) => {
    const [values, setValues] = useState()
    return (
        <>
            <Label>Niveau de pratique :</Label>
            <AccordionPanel>
                <CheckboxGroup
                    onChange={value => {
                        // console.log('onChange', value);
                        handleChange('level', value)
                        // setValues( );
                    }}
                    value={values}
                >
                    <Stack spacing={2} direction="column">
                        <Checkbox value={"1"} name="level" >Débutant</Checkbox>
                        <Checkbox value={"2"} name="level" >Intermédiaire</Checkbox>
                        <Checkbox value={"3"} name="level" >Confirmé</Checkbox>
                        <Checkbox value={"4"} name="level" >Expert</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </AccordionPanel>
        </>

    )
}

export default Filter