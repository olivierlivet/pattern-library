import React, {FunctionComponent} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from "@chakra-ui/react"
const SearchEngine = Loadable(() => import('./index.js'))

// type propsType = {
//     filter: string,
//     onClose: Function
// }

type propTypes = {
    filter: object,
    onClose: Function,
    isOpen: boolean
}

const SearchEngineLoader: FunctionComponent<propTypes> = ({ filter, onClose, isOpen }) =>{

    return(        
            <Modal
                isOpen={true}
                size='full'
                onClose={()=>onClose()}
                id='modalSearchForm'
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent
                    my={'0'}
                    borderRadius={{ base: 0, lg: 0 }}
                    bg='gray.50'
                >
                    <ModalBody p={0}>
                        <SearchEngine
                            mainFilters={ filter }
                            onClose={()=>onClose()}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        
    )
} 

export default SearchEngineLoader
