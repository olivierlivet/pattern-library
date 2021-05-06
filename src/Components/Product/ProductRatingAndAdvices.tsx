import React, { FunctionComponent, useState } from 'react'

type props = {
    data: Object
}

import {
    Box,
    Button,
    Divider,
    SimpleGrid,
    Stack,
    Text
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const ProductsDetails: FunctionComponent<props> = ({ data }) => {

    const [openQuestion, setOpenQuestion] = useState(null)

    const questions = [
        {
            question: "Comment couper un patron pour que le tissu ne bouge pas et que l’on ne soit pas gênée ?",
            answers: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna."
            ]
        },
        {
            question: "J’ai peur de coudre des fringues pour moi, de ne pas savoir me mesurer ni si elles vont m’aller.",
            answers: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna."
            ]
        },
        {
            question: "Comment adapter le patron à ma morphologie ?",
            answers: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna."
            ]
        },
        {
            question: "Comment comprendre tous les termes et comment positionner le patron sur le tissu ?",
            answers: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna."
            ]
        },
        {
            question: "Le meilleur moyen pour décalquer le patron sur le tissu ?",
            answers: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan blandit sapien ac auctor. Nulla imperdiet tortor quis mi blandit, nec fermentum sem malesuada. Vestibulum sodales eu dolor vel mattis. Proin sed tellus ac augue consectetur pellentesque at vitae magna."
            ]
        }
    ]
    return (
        <Stack>
            { questions.map((item, index) =>
                <React.Fragment key={`question-${index}`}>
                    <Button
                        size='xl'
                        fontWeight='normal'
                        variant='link'
                        justifyContent='space-between'
                        onClick={() => setOpenQuestion(index)}
                    >
                        {item.question}
                        <ArrowForwardIcon />
                    </Button>
                    {openQuestion === index ?
                        <Stack py={8} spacing={8} pl={56}>
                            {item.answers.map((answer, y) =>
                                <>
                                    <Box>
                                        {answer}
                                    </Box>
                                    {y + 1 !== item.answers.length ? <Divider /> : null}
                                </>
                            )}
                        </Stack>
                        : null}
                    {index + 1 !== questions.length ? <Divider /> : null}
                </React.Fragment>
            )}
        </Stack>
    )
}

export default ProductsDetails