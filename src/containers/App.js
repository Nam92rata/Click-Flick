import React, { Component } from 'react';
import LoginPage from './login';
import Home from './home';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {  

  render() {
    if (this.props.user.isLoggedIn){
      return(
        <div className="App">        
        <div className="row"> 
            <div className="col-md-10">
              <Home />
            </div>            
        </div>
                
        </div>
        
      )
    }
    else{
      return(
        <div className="App">        
          <div className="row">
            <div className="col-md-6 col-md-offset-2">
              <LoginPage />
            </div>
          
          </div>
        </div>
        
      )
    }
    
    
  }
}
function mapStateToProps(state) {
  return {
      user: state.loginReducer
  };
}
export default connect(mapStateToProps)(App);
