export const auth = (errmsg) => {
    
    return {
        type: 'AUTH_ERROR',
        payload: errmsg
    }
};