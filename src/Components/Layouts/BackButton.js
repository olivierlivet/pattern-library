import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { 
    Flex,
    Button
} from '@chakra-ui/react'

const BackButton = () => {
    return(
        <Flex
            py={ 8 }
        >
            <Button
                as={ GatsbyLink}
                to='../'
            >
                Back
            </Button>
        </Flex>

    )
}

export default BackButton