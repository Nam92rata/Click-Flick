const initialState = {
    isLoggedIn: false,
    authError: "",
    
    
  }
export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOGGED_IN':
            return {
                isLoggedIn : action.payload
            }
            
        case 'LOGGED_OUT':
            return {
                isLoggedIn : action.payload
            }

        case 'AUTH_ERROR':
            return{
                authError: action.payload
            }
        
        default:
            return state;
    }
    
}