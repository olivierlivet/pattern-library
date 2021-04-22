import React, { Component } from 'react'
import Reward from 'react-rewards';
import {
    Box, Center
} from '@chakra-ui/layout'
import HeartIcon from '../../Images/Icons/Favorite';

export default class FavoriteButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showValidate: false,
            isSubmiting: false
        }
    }


    render() {
        return (
            <Reward
                type='emoji'
                config={{ emoji : ['🪡','🧵','👗','👚','😍'] }}
                ref={(ref) => { this.reward = ref }}

            >
                <Center
                    onClick={(e)=>{
                        e.stopPropagation();
                        this.reward.rewardMe();
                    }}
                    p={2}
                    border='solid 1px'
                    borderColor='gray.100'
                >
                    <HeartIcon />
                </Center>
            </Reward>

        )
    }
}