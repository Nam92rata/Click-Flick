import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { logoutUser } from './../actions/action-logout';
import { auth } from './../actions/action-auth';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import WelcomePage from './../components/welcome';
import HomePage from './homepage';
import ProfilePage from './profilepage';

class Home extends Component {
    handleLogout = () => {
       this.props.logoutUser() 
       this.props.auth("")
    }
    render() {
        return(
            <Router>
            <div>
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 custom">
                        <div>
                        <nav className="navbar navbar-default">
                                <div className="container-fluid">
                                    <ul className="nav navbar-brand navbar-header">                                        
                                        <NavLink to="/" exact activeStyle={{ color:'green' }}><b>Click-Flick</b></NavLink>                                     
                                    </ul>
                                    <ul className="nav navbar-nav">
                                        <li className="active"><NavLink to="/home" exact activeStyle={{ color:'green' }}>Home</NavLink></li>  
                                        <li className="active"><NavLink to="/profile" exact activeStyle={{ color:'green' }}>Profile</NavLink></li>                                      
                                    </ul>
                                    <form className="navbar-form navbar-left" >
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Search"/>
                                        </div>                                        
                                    </form>
                                    <div className="nav navbar-nav navbar-right">
                                        <button type="submit" className="btn btn-danger navbar-btn" onClick = { this.handleLogout }>Logout</button>                                        
                                    </div>                             
                                </div>
                            </nav>
                        </div>
                        <Route path="/" exact strict component = {WelcomePage}/>
                        <Route path="/home" exact strict component = {HomePage}/>
                        <Route path="/profile" exact strict component = {ProfilePage}/>
                        
                    </div>
                </div>                 
            </div>
        </Router>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.loginReducer
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({logoutUser: logoutUser, auth: auth}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Home);