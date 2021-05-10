import * as React from 'react';
import { config } from '../../../config'

import { AxiosRequestConfig } from 'axios';
import { Button } from '@chakra-ui/react'

import axios from 'axios'

export interface MediaUploadProps {
    id: string;
    path: string;
    value: string;
    onChange: (field: string, mediaId: string) => void;
}

export interface MediaUploadState {
    progress: number;
    file?: File;
    error?: string;
}

export class MediaUpload extends React.Component<
    MediaUploadProps,
    MediaUploadState
> {
    state: MediaUploadState = { progress: -1 };

    handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        let file = e.target.files[0];
        this.setState({ file: file });

        let data = new FormData();
        data.append('file', file);
        data.append('path', this.props.path)

        let axiosConf: AxiosRequestConfig = {
            onUploadProgress: (p: any) => {
                this.setState({ progress: Math.round(p.loaded * 100 / p.total) });
            },
        };

        this.setState({ error: undefined, progress: 0 });

        axios.post(`${config.apiUrl}/media`, data, axiosConf).then(
            res => {
                this.setState({ error: undefined, progress: -1 });
                this.props.onChange(this.props.id, res.data);
            },
            err => {
                // const message = toApiError(err);
                this.setState({ error: message, progress: -1 });

            }
        );
    }

    handleRemoveImage = () => {
        this.props.onChange(this.props.id, '');
    }

    render() {
        return (
            <div>
                <div>
                    {/* {this.props.value !== '' &&
            this.state.progress === -1 &&
            <Image path={this.props.value} size="lg" />}
          <div style={{ maxWidth: 144 }}>
            {this.state.progress > -1 &&
              <Progress percentage={this.state.progress} />}
          </div> */}
                    {this.props.value &&
                        <a
                            style={{ marginTop: -40 }}
                            className="button button--negative button--small button--secondary"
                            role="button"
                            onClick={this.handleRemoveImage}
                        >
                            Remove
            </a>}
                </div>
                <div style={{ marginTop: 10 }}>

                    <Button as='label'>Browse files
                        <input
                            style={{ display: 'none' }}
                            type="file"
                            onChange={this.handleFileChange}
                        />
                    </Button>

                </div>

            </div>
        );
    }
}