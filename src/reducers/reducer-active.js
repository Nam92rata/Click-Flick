const initialState = {    
    user : ""    
  }
  export default function (state = initialState, action) {
    switch (action.type) {        
        case 'ACTIVE_USER':            
            return{
                user: action.payload
            }
        default:
            return state;
    }
    
}