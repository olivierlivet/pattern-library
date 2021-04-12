import React, { FunctionComponent } from 'react'

import { Button } from '@chakra-ui/react'

type props = {
    handleClear: Function
}

const Label: FunctionComponent<props> = ({ handleClear }) => {
    return (
        <Button size='sm' mt={2} onClick={() => handleClear()}>Annuler</Button>
    )
}

export default Label