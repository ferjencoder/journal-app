

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice( {
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', not-authenticated', 'authenticated
        uid: null,
        email: null,
        desplayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.desplayName = payload.desplayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },

        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.desplayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },

        checkingCredentials: ( state ) => {
            state.status = 'checking'
        }
    }
} );

export const { login, logout, checkingCredentials } = authSlice.actions;


