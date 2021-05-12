import { Box, Text } from '@chakra-ui/layout'
import { Table, Tbody, Td, Tr } from '@chakra-ui/table'
import React, { FC } from 'react'

type props = {
    data: any
}

const MeasuresTable: FC<props> = ({ data }) => {
    return (
        <Box maxW='80vw' overflowX='scroll'>
            <Table variant="simple" size='sm'>
                <Tbody>
                    {data.map((line, index) =>
                        <Tr>
                            <Td><strong>{line.label}</strong></Td>
                            {line.values.map(value =>
                                <Td>
                                    { index === 0 ?
                                        <Box
                                            flex='1'
                                        >
                                                <Text
                                                    as='span'
                                                    borderBottom='solid 2px'
                                                    borderColor='brand.green.500'
                                                >
                                                { value }
                                                </Text>
                                                
                                            </Box>
                                    :
                                        value
                                    }
                                    
                                </Td>

                            )}
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </Box>
    )
}

export default MeasuresTable