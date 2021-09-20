import { BehaviorSubject } from 'rxjs';
import {config} from '../config'
import { handleResponse } from '../Helper/handle-response';
import { navigate } from 'gatsby'
import axios from 'axios';

// const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    loginThirdParty,
    loginEmailPassword,
    loginPasswordLess,
    logout,
    getUser,
    getEditor
    // currentUser: currentUserSubject.asObservable(),
    // get currentUserValue () { return currentUserSubject.value }
};

function loginThirdParty(email) {
    return axios.post(
        `${config.apiUrl}/user/login-third-party`,
        { email: email}
    )

}

function loginEmailPassword( email, password ) {

    return axios.post(
    `${config.apiUrl}/user/login-email-password`,
        {
            email: email,
            password: password
        }
    )
}

function loginPasswordLess( token ) {

    return axios.post(
        `${config.apiUrl}/user/`,
        {
            passwordLessToken: token
        }
    ).then((response)=>{
        localStorage.setItem('tpcUser', JSON.stringify(response.data));

    })
}

function isAuth() {
    
}

function getUser() {
    if( localStorage.getItem( 'tpcUser' ) ){
        return (JSON.parse( localStorage.getItem( 'tpcUser' )))
    }else{
        return false;
    }
}

function getEditor() {
    if( localStorage.getItem( 'tpcEditor' ) ){
        return (JSON.parse( localStorage.getItem( 'tpcEditor' )))
    }else{
        return false;
    }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('tpcUser');
    localStorage.removeItem('Favorites');
    // currentUserSubject.next(null);
}