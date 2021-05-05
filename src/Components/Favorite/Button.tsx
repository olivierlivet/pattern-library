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

    componentDidMount(){
        this.isButtonActive()
    }

    isButtonActive(){
        let favorites = localStorage.getItem( 'Favorites' )
        if( favorites && favorites.includes( this.props.product ) ){
            this.setState( { isActive: true } )
        }
    }

    handleFavoriteClick() {

        console.log(' Debug favorite 2 ')

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
        console.log('debug favorite 1', userId)
        axios.put(
            `${config.apiUrl}/favorite`,
            {
                user: userId,
                product: this.props.product

            }
        ).then((response)=>{
            this.updateLocalFavorite(response.data)
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

    updateLocalFavorite( favorites ){
        console.log('favorites that need to update', favorites )
        let newFavorites = []
        for (let index = 0; index < favorites.length; index++) {
            newFavorites.push( favorites[index].product )
            // const element = favorites[index]; 
        }
        localStorage.setItem('Favorites', JSON.stringify( newFavorites ))
    }


    render() {
        const { showLoginForm, isActive } = this.state;
        return (
            <>
                { showLoginForm ?
                    <FastLoginForm
                        onClose={()=> this.setState({ showLoginForm: false })}
                        onLogin={(user)=>this.saveFavorite( user )}
                        onCancel={()=> this.setState({ showLoginForm: false })}
                        title='Identifiez-vous pour ajouter des favoris'
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
                        p={3}
                        // border='solid 1px'
                        cursor='pointer'
                        borderColor='gray.100'
                        borderRadius='3px'
                        _hover={{
                            background:!isActive ? 'red.400' : 'gray.100',
                            color:'white'
                        }}
                        
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