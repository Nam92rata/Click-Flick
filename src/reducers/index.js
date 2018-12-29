import {combineReducers} from 'redux';
import LoginReducer from './reducer-login';
import UserReducer from './reducer-users';


const allReducers = combineReducers({
    loginReducer : LoginReducer,
    userReducer : UserReducer
});

export default allReducers;