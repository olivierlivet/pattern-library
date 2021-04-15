import React, { FunctionComponent } from 'react'
import { Transition } from 'react-transition-group';

import { Button, Divider, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react'

type props = {
    isVisible: Boolean,
    onClick: Function,
    setCategory: Function,
    setVariant: Function,
    categories: Array<object>,
    variants: Array<object>,
    mainFilters: Object
}

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform  ${duration}ms ease-in-out`,
    transform: `translateY(-15px)`,
    opacity: 0,
    pointerEvents: `none`
}

const transitionStyles = {
    entering: {
        opacity: 1,
        transform: `translateY(0)`,
    },
    entered: {
        opacity: 1,
        pointerEvents: `auto`,
        transform: `translateY(0)`,
    },
    exiting: {
        opacity: 0,
        transform: `translateY(-10px)`
    },
    exited: {
        opacity: 0,
        transform: `translateY(-10px)`,
    },
}


const CategoriesButtons: FunctionComponent <props> = (
    {
        isVisible,
        onClick,
        categories,
        variants,
        mainFilters,
        setCategory,
        setVariant
    }) => {
    return (
        <Transition in={isVisible} timeout={duration}>
            {state => (
                <Stack
                    bg='whiteAlpha.800'
                    position='absolute'
                    // boxShadow='md'
                    borderRadius={4}
                    top={20}
                    w='max'
                    zIndex='overlay'
                    w={{ base:'xs', lg:'md' }}
                    spacing={ 4 }

                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}

                // display={detailsOpen ? 'block' : 'none'}
                // pt={20}
                >
                    {/* <pre>
                        { JSON.stringify( mainFilters, null, 1 )}
                    </pre> */}
                    <Text>
                        Quelle pièce ?
                    </Text>
                    <SimpleGrid gap={2} columns={{ base: 2, lg: 3 }} color='gray.700'>
                        {categories && categories.map( item =>
                            <Button
                                size="sm"
                                colorScheme={ mainFilters.category === item.categoryId ? 'blue' : 'gray' }
                                onClick={()=>setCategory( item.categoryId )}
                            >{ item.label }</Button>
                        )}
                    </SimpleGrid>
                    { variants && variants.length ? 
                    <>
                    <Text>
                        Quel style ?{' '}
                        <Text as='span' fontSize='sm' color='gray.500' letterSpacing='wide'>(Facultatif)</Text>
                    </Text>
                    <SimpleGrid gap={2} columns={{ base: 2, lg: 3 }} color='gray.700'>
                        {variants && variants.map( item =>
                            <Button
                                size="sm"
                                colorScheme={ mainFilters.variant === item.variantId ? 'blue' : 'gray' }
                                onClick={()=>{
                                    setVariant( item.variantId );
                                    onClick();
                                }}
                            >{ item.label }</Button>
                        )}
                    </SimpleGrid>
                    </> : null }
                    <Flex>
                        <Button onClick={()=>onClick()} variant='outline' size='sm'>Valider</Button>
                    </Flex>
                </Stack>)}
        </Transition>
    )
}

export default CategoriesButtons