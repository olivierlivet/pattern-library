import {
    Box,
    Button,
    Flex,
    Image,
    Grid,
    HStack,
    Text,
    ButtonGroup,
    Stack,
    Tag,
    TagLabel
} from '@chakra-ui/react'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { config } from '../../config'
import InspirationDetails from './InspirationDetails';

const Inspiration = ({ }) => {

    const [data, setData] = useState();
    const [details, setDetails] = useState();

    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/inspiration`
        );
        setData(result.data);
    }, []);

    return (
        <Box w='full' my='20' bg='white' p={10}>
            <Stack>
                {data ?

                    data.map(item =>
                        <>
                            <Grid
                                templateColumns={{
                                    base: `40px 1fr 200px`
                                }}
                                gap={6}
                            >
                                <Box>
                                    <Image
                                        w='40px'
                                        h='40px'
                                        objectFit='cover'
                                        borderRadius='full'
                                        src={`${config.imageBaseUrl}${item.pictures[0]}`}
                                    />
                                </Box>
                                <Flex align='center'>
                                    {item.product ? `${item.product.title} ` : `Product unknown `}
                                de {item.user.firstName}{' '}
                                </Flex>
                                <Flex
                                    justify='flex-end'
                                    align='center'
                                >
                                    <ButtonGroup
                                        size='sm'
                                    >
                                        <Tag
                                            variant={
                                                item.status === 'draft'
                                                    ? 'outline'
                                                    : 'solid'
                                            }
                                            colorScheme={
                                                item.status === 'draft'
                                                    ? 'yellow'
                                                    : 'green'
                                            }
                                        >
                                            {item.status}
                                        </Tag>
                                        {item.blogUrl ?
                                            <Tag>
                                                <a
                                                    href={`${item.blogUrl}`}
                                                    target='_blank'
                                                >
                                                    {item.blogUrl}
                                                </a>
                                            </Tag>
                                        : null}
                                        {item.instagramAccount ?
                                            <Tag>
                                                <a
                                                    href={`https://instagram.com/${item.instagramAccount.slice(1, 200)}`}
                                                    target='_blank'
                                                >
                                                    {item.instagramAccount}
                                                </a>
                                            </Tag>
                                        : null}
                                        <Button
                                            colorScheme='blue'
                                            onClick={() => setDetails(details && details._id === item._id ? undefined : item)}
                                        >
                                            Update
                                        </Button>
                                    </ButtonGroup>
                                </Flex>
                            </Grid>
                            {details && item._id === details._id ?
                                <InspirationDetails
                                    data={details}
                                />
                                : null}
                        </>
                    )
                    : null}
            </Stack>

            {/* <pre>
                { JSON.stringify( data, null, 1 )}
            </pre> */}

        </Box>
    )
}

export default Inspiration
