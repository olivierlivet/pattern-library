import React, {FunctionComponent} from 'react'
import Loadable from "@loadable/component"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
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

const SearchEngineLoader: FunctionComponent<propTypes> = ({ filter, onClose, isOpen }) => (
    <Modal
        isOpen={true}
        size='full'
        onClose={()=>onClose()}
    >
        <ModalOverlay />
        <ModalContent
            my={'0'}
            borderRadius={{ base: 0, lg: 0 }}
        >
            {/* <ModalHeader>Patterns search engine</ModalHeader> */}
            <ModalCloseButton />
            <ModalBody p={0}>
                <SearchEngine filter={ filter } onClose={()=>onClose()} />
            </ModalBody>
        </ModalContent>
    </Modal>
)

export default SearchEngineLoader


// let myAdd: (x: number, y: number) => number = function (
// const OtherComponent = loadable(() => import('./OtherComponent'))
