import {combineReducers} from 'redux';
import LoginReducer from './reducer-login';
import UserReducer from './reducer-users';
import ActiveReducer from './reducer-active';

const allReducers = combineReducers({
    loginReducer : LoginReducer,
    userReducer : UserReducer,
    activeReducer : ActiveReducer
});

export default allReducers;