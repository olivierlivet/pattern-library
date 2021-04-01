import React from 'react'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link as GatsbyLink } from 'gatsby'
import {
    Link,
    Stack,
    Text
} from '@chakra-ui/react'






// documentToReactComponents(document, options);

const RichContent = ({ data }) => {

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <strong>{text}</strong>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [INLINES.ENTRY_HYPERLINK]: (node, children) => {
                const slug = convertIdToSlug(node.data.target.sys.id)
                // const { title, description, slug } = node.data.target.fields;
                console.log('node', node.data.target)
                console.log('children', children)
                return <Link as={GatsbyLink} color='blue.900' textDecoration='underline' to={`${slug}`}>{children}</Link>
            },
            [INLINES.EMBEDDED_ENTRY]: (node, children) => {
                const slug = convertIdToSlug(node.data.target.sys.id, data.references)
                // const { title, description, slug } = node.data.target.fields;
                console.log('node', node)
                console.log('children', children)
                return <Link as={GatsbyLink} color='blue.900' textDecoration='underline' to={`${slug}`}>{children} child</Link>
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                const slug = convertIdToSlug(node.data.target.sys.id)
                // const { title, description, slug } = node.data.target.fields;
                console.log('node', node)
                return <Link as={GatsbyLink} color='blue.900' textDecoration='underline' to={`${slug}`}>{children}</Link>
            },
            [INLINES.HYPERLINK]: (node, children) => {
                console.log('node', node)
                return <Text color='blue.700' borderBottom='solid 1px' borderColor='blue.300' as='a' href={node.data.uri}>{children}</Text>
            },
        },
    }

    const convertIdToSlug = (id) => {
        // console.log('id', id, data.references)
        const { references } = data
        if (!references) {
            return '/'
        } else {
            for (let index = 0; index < references.length; index++) {
                const element = references[index];
                if (element.contentful_id === id) {
                    return `/${element.node_locale}${element.slug}`
                }
            }
        }
    }
    return(
        data && data.raw ?
            <Stack spacing={{ base: 3, lg: 5 }}>{documentToReactComponents( JSON.parse(data.raw), options )}</Stack>
        :
            <Stack spacing={{ base: 3, lg: 5 }}>{documentToReactComponents( data, options)}</Stack>
        )
}

export default RichContent