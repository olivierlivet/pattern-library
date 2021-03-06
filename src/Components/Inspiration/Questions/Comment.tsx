import React, { Component } from 'react'

import {
    Box,
    Button,
    Stack,
    Text
} from '@chakra-ui/react'

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { convertToRaw, convertFromRaw  } from 'draft-js';
import { EditorState, ContentState } from 'draft-js'
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';


export default class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
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

        const saveDescription = () => {

            const content = editorState.getCurrentContent();
            const dataToSaveBackend = convertToRaw(content );
            var markdownString = draftToMarkdown(dataToSaveBackend);

            this.props.setFieldValue( 'comment', markdownString );
            this.props.setStep();

            console.log( 'dataToSaveBackend',  markdownString )

        }

        return (
            <Stack spacing={{ base: 4, lg: 6 }}>
                <Text>
                    Dites-nous librement quel ??tait votre ??tat d'esprit, votre motivation ?? r??aliser ce patron. Une occasion particuli??re, combler un manque dans votre garde robe. Avez-vous h??sit?? avec un autre mod??le ?
            </Text>
            {/* <Text>
                    Tout simplement, qu'est ce que vous a convaincu ?? coudre <strong>ce patron</strong>.
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
                            `Tout simplement, qu'est ce qui vous a convaincu ?? coudre ce patron ?`
                        }
                        toolbar={toolbarOptions}
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Box>
                <Box>
                    {/* <Button onClick={() => setStep()}>Enregistrer{' '}</Button> */}
                    <Button
                        onClick={() => {
                            saveDescription()
                        }}
                    >Valider</Button>
                </Box>
                {/* <pre>
                    { JSON.stringify( editorState, null, 1 )}
                </pre> */}
            </Stack>
        )
    }
}

// export default Comment


