import React, { FunctionComponent } from 'react'

import { Box, Select } from '@chakra-ui/react'
import Label from './FilterLabel'
const Filter:FunctionComponent = () => {
    return(
        <Box>
            <Label>Longueur :</Label>
            <Select>
                <option>Épaule</option>
                <option>Genou</option>
                <option>Genou</option>
            </Select>
        </Box>
    )

}

export default Filter