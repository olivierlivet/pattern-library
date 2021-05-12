import React from 'react'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link as GatsbyLink, navigate } from 'gatsby'
import {
    Heading,
    Link,
    List,
    ListItem,
    Stack,
    Text
} from '@chakra-ui/react'
import ProductCard from '../Product/CardSmall';






// documentToReactComponents(document, options);

const RichContent = ({ data, fontSize, spacing }) => {

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <strong>{text}</strong>,
        },
        renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => <Heading fontSize='2xl' mb='-40px' style={{marginBottom:'-20px'}} fontWeight='normal'>{children}</Heading>,
            [BLOCKS.HEADING_3]: (node, children) => <Heading fontSize='xl' mb='-4' fontWeight='normal'>{children}</Heading>,
            [BLOCKS.HEADING_4]: (node, children) => <Heading fontSize='xl' fontFamily='DM Sans' mb='-4' fontWeight='normal'>{children}</Heading>,
            [BLOCKS.UL_LIST]: (node, children) => <List>{children}</List>,
            [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [INLINES.ENTRY_HYPERLINK]: (node, children) => {
                const slug = convertIdToSlug(node.data.target.sys.id)
                // const { title, description, slug } = node.data.target.fields;
                console.log('node', node.data.target)
                console.log('children', children)
                return <Link as={GatsbyLink} color='blue.900' textDecoration='underline' to={slug}>{children} {slug}</Link>
            },
            [INLINES.EMBEDDED_ENTRY]: (node, children) => {
                const slug = convertIdToSlug(node.data.target.sys.id, data.references)
                // const { title, description, slug } = node.data.target.fields;
                console.log('node', node)
                console.log('children', children)
                return <Link as={GatsbyLink} color='blue.900' textDecoration='underline' to={`${slug}`}>{children} coucou child</Link>
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                const entry = getReferenceObject(node.data.target.sys.id)
                // const { title, description, slug } = node.data.target.fields;
                return (
                    <ProductCard
                                            key={entry.contentful_id}
                                            productId={entry.contentful_id}
                                            backendDocumentId={entry.backendDocumentId}
                                            title={entry.title}
                                            price={entry.price}
                                            level={entry.level}
                                            rating={entry.rating}
                                            editor={entry.editor}
                                            pictures={entry.pictures}
                                            // intro={<RichContent data={product.fields.intro} />}


                                            //Actions
                                            // onOpen={() => console.log('open')}
                                             onOpen={() => navigate(entry.slug) }
                                        />
                )
            },
            [INLINES.HYPERLINK]: (node, children) => {
                console.log('node', node)
                return <Link as={GatsbyLink} color='blue.700' borderBottom='solid 1px' borderColor='blue.300' as='a' to={node.data.uri}>{node.data.uri}  test {children}</Link>
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
                    return `${element.slug}`
                }
            }
        }
    }

    const getReferenceObject = (id) => {
        const { references } = data
        if (!references) {
            return '/'
        } else {
            for (let index = 0; index < references.length; index++) {
                const element = references[index];
                if (element.contentful_id === id) {
                    return element
                }
            }
        }

    }
    return(
        data && data.raw ?
            <Stack spacing={ spacing ? spacing : { base: 2, lg: 4 }} fontSize={ fontSize ? fontSize : 'md' }>{documentToReactComponents( JSON.parse(data.raw), options )}</Stack>
        :
            <Stack spacing={ spacing ? spacing : { base: 2, lg: 4 }} fontSize={ fontSize ? fontSize : 'md' }>{documentToReactComponents( data, options )}</Stack>

        )
}

export default RichContent