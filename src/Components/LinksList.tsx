import { Box, Grid, Link, List, ListItem } from '@chakra-ui/layout'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

const LinksList = ({ data }) => {
    return (
        <Box as='nav'>
            <List as={ Grid } gridTemplateColumns={{ base: '50% 50%', lg:'25% 25% 25% 25%' } }>
                {data.map(item =>
                    <ListItem>—{' '}
                        <Link as={ GatsbyLink } to={`${item.node.slug}`}>
                            {item.node.title}
                        </Link>
                    </ListItem>
                )}
            </List>
        </Box>
    )
}

export default LinksList