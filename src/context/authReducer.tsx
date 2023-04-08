import { AuthState } from "./AuthContext";
type AuthAction =
    | { type: 'signIn' }
    | { type: 'logout' }
    | { type: "changeFavIcon", payload: string }
    | { type: "changeUsername", payload: string }

// generateState
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'logout':
            return {// We could return just authInitialState, but we decided to use the spread operator just in case.
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case "changeUsername":
            return {
                ...state,
                username: action.payload
            }
        default:
            return state;
    }
}