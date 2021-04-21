import React, { Component } from 'react'

import {
    Box,
    Button,
    Stack,
    Text
} from '@chakra-ui/react'

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: null,
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    }

    render() {

        const toolbarOptions = {
            options: ['inline', 'blockType', 'list'],
            inline: {
                inDropdown: false,
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
                options: ['bold', 'italic', 'underline'],
                // bold: { icon: 'bold', className: undefined },
                // italic: { icon: 'italic', className: undefined },
                // underline: { icon: 'underline', className: undefined }
            },
            blockType: {
                inDropdown: true,
                options: ['Normal', 'H3', 'H4'],
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
            }
        }

        const { editorState } = this.state
        const { setStep } = this.props

        return (
            <Stack spacing={{ base: 4, lg: 6 }}>
                <Text>
                    Dites-nous librement quel était votre état d'esprit, votre motivation à réaliser ce patron. Une occasion particulière, combler un manque dans votre garde robe. Avez-vous hésité avec un autre modèle ?
            </Text>
            {/* <Text>
                    Tout simplement, qu'est ce que vous a convaincu à coudre <strong>ce patron</strong>.
            </Text> */}
                <Box
                    border='solid 1px'
                    borderColor='gray.200'
                    borderRadius={3}
                    p={2}
                >
                    <Editor
                        //   toolbarOnFocus="true"
                        value="test"
                        placeholder={
                            `Tout simplement, qu'est ce qui vous a convaincu à coudre ce patron ?`
                        }
                        toolbar={toolbarOptions}
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Box>
                <Box>
                    <Button onClick={() => setStep()}>Enregistrer{' '}</Button>
                </Box>
            </Stack>
        )
    }
}

// export default Comment


