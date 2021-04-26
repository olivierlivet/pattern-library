import React, { FunctionComponent, useState } from 'react'
import {
    AccordionPanel,
    Box,
    Button,
    Stack,
    Checkbox,
    CheckboxGroup,
    Select,
    AccordionIcon,
    AccordionButton
} from '@chakra-ui/react'
import Label from './FilterLabel'
import ClearButton from './ClearButton'

const Filter: FunctionComponent = () => {
    return (
        <>
            <AccordionButton>
                <Box flex="1" textAlign="left">Mensurations&nbsp;:</Box>
                <AccordionIcon />
            </AccordionButton>  
            <AccordionPanel>
                <Select>
                    <option>36</option>
                    <option>38</option>
                    <option>40</option>
                    <option>42</option>
                    <option>44</option>
                    <option>46</option>
                </Select>
            </AccordionPanel>
        </>
    )
}

export default Filter