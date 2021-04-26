
import React, { FunctionComponent, useState } from 'react'
import {
    Box,
    Button,
    Stack,
    Checkbox,
    CheckboxGroup,
    AccordionIcon,
    AccordionButton
} from '@chakra-ui/react'
import Label from './FilterLabel'

const Filter: FunctionComponent = () => {
    const [ values, setValues ] = useState()
    return (
        <Box>
            <AccordionButton>
                <Box flex="1" textAlign="left">Fermeture&nbsp;:</Box>
                <AccordionIcon />
            </AccordionButton>
            <CheckboxGroup
                onChange={value => {
                    console.log('onChange', value);
                    // setValues( );
                  }}
                value={ values }
            >
            <Stack spacing={2} direction="column">
                <Checkbox value='button' name="button" >Bouton</Checkbox>
                <Checkbox value='zip' name="zip" >Zip</Checkbox>
                <Checkbox value='elastic' name="elastic" >Elastique</Checkbox>
            </Stack>
            {/* <Button onClick={()=> setValues( null )}>Annuler</Button> */}
            </CheckboxGroup>
        </Box>
    )
}

export default Filter