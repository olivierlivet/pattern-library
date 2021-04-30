import { BehaviorSubject } from 'rxjs';
import {config} from '../config'
import { handleResponse } from '../Helper/handle-response';
import { navigate } from 'gatsby'
import axios from 'axios';

// const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    loginEmailPassword,
    loginPasswordLess,
    logout,
    getUser,
    // currentUser: currentUserSubject.asObservable(),
    // get currentUserValue () { return currentUserSubject.value }
};

function login(email) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    };

    return fetch(`${config.apiUrl}/user/login-thid-party`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('tpcUser', JSON.stringify(user));
            navigate('/fr/compte');
            // currentUserSubject.next(user);

            return user;
        });
}

function loginEmailPassword( email, password ) {

    return axios.post(
        `${config.apiUrl}/user/login-email-password`,
            {
                email: email,
                password: password
            }
        )
        // .then(handleResponse)
        .then(response => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('tpcUser', JSON.stringify( response.data ));
            navigate('/fr/compte');
            // currentUserSubject.next(user);

            // return user;
        });
}

function loginPasswordLess( token ) {

    return axios.post(
        `${config.apiUrl}/user/login-token`,
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

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('tpcUser');
    // currentUserSubject.next(null);
}