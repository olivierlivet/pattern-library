import React, { Component } from 'react'
import Reward from 'react-rewards';
import {
    Box, Center
} from '@chakra-ui/layout'
import HeartIcon from '../../Images/Icons/Favorite';
import axios from 'axios';
import { config } from '../../config'
import { authenticationService } from '../../Service/auth'
import FastLoginForm from '../FastLoginForm'
import HeartIconFull from '../../Images/Icons/FavoriteFull';

export default class FavoriteButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showValidate: false,
            isSubmiting: false,
            showLoginForm: false,
            isActive: false
        }
    }

    handleFavoriteClick() {

        if (!authenticationService.getUser()) {
            this.setState({
                showLoginForm: true
            })
        } else {
            this.saveFavorite( authenticationService.getUser().userId )

        }
        // console.log('handleUpdateFavorite')

        // axios.post(
        //     `${config.apiUrl}/favorite`,
        //     {
        //         user:"123445",
        //         product:'121212121'

        //     }
        // )

        // this.reward.rewardMe();

    }

    saveFavorite( userId ){
        axios.put(
            `${config.apiUrl}/favorite`,
            {
                user: userId,
                product: '121212121'

            }
        ).then(()=>{
            this.setState({
                showLoginForm: false,
                isActive: !this.state.isActive
            }, ()=>{
                if( this.state.isActive ){
                    this.reward.rewardMe() 
                }
            })
        })

    }


    render() {

        const { showLoginForm, isActive } = this.state;
        return (
            <>
                { showLoginForm ?
                    <FastLoginForm
                        onClose={()=> this.setState({ showLoginForm: false })}
                        onUserAuth={(userId)=>this.saveFavorite( userId )}
                        onCancel={()=> this.setState({ showLoginForm: false })}
                    />
                : null}
                <Reward
                    type='emoji'
                    config={{ emoji: ['🪡', '🧵', '👗', '👚', '😍'] }}
                    ref={(ref) => { this.reward = ref }}

                >
                    <Center
                        onClick={(e) => {
                            e.stopPropagation();
                            this.handleFavoriteClick();
                        }}
                        p={2}
                        // border='solid 1px'
                        borderColor='gray.100'
                    >
                        { !isActive
                            ?
                                <HeartIcon  />
                            :
                                <HeartIconFull color='red.400'/>
                        }
                    </Center>
                </Reward>
            </>

        )
    }
}