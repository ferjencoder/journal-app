

import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";


export const checkingAuthentication = () => {

    return async ( dispatch ) => {

        dispatch( checkingCredentials() )

    }
};


export const startGoogleSignIn = () => {

    return async ( dispatch ) => {

        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();

        if ( !result.ok ) return dispatch( logout( result.errorMessage ) )

        dispatch( login( result ) )

    }
};


export const startCreatingUserWithEmailPassword = ( { email, name, password, displayName } ) => {

    return async ( dispatch ) => {

        dispatch( checkingCredentials() );
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword( { email, name, password, displayName } );

        if ( !ok ) return dispatch( logout( { errorMessage } ) );

        dispatch( login( { uid, displayName, email, photoURL } ) );
    };


};