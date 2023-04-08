import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Initial state
// It's not obligatory to export it
export const authInitialState: AuthState = {
    isLoggedIn: false
}

// We'll use it to tell to React how it looks and what the context expose.
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
}

// Create the Context
export const AuthContext = createContext({} as AuthContextProps);

// Provider component of the state.
export const AuthProvider = ({ children }: any) => {// I recive JSX sons from my props.
    const [authState, dispatch] = useReducer(authReducer, authInitialState)
    const signIn = () => {
        // the "dispatch" will only accept the options that I have available in my authReducer.tsx
        dispatch({ type: "signIn" })
    }
    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: "changeFavIcon", payload: iconName })

    } // ↑ This function must be provided ↓ (to the context) for any component to have access to it.
    const logout = () => {
        dispatch({ type: "logout" })
    }
    const changeUsername = (username: string) => {
        dispatch({ type: "changeUsername", payload: username })
    }
    return (
        <AuthContext.Provider value={{
            //authState:authInitialState,
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}
