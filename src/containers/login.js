import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { loginUser } from './../actions/action-login';
import { auth } from './../actions/action-auth';
var errmsg = "";
class LoginPage extends Component {
    
    validateUser = () => {
        let flag = false;
        this.props.users.map((user) => {            
            if (user.first === this.name.value){
                flag = true;
                             
            }            
        })
        return flag;
    }
    handleSubmit = () =>{  
        
        if(this.validateUser()){
            this.props.loginUser();
            return;
        }
        else{            
            errmsg = "Login failed !!";
            this.props.auth(errmsg);
            return;
        }      
        
    }
    
    render() {        
        return(
            <div > 
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 custom">
                    </div>
                </div>              
                <section>  
                <div className="row">      
                <div className="col-md-10 col-md-offset-1" >           
                    <h2>Click Flick</h2>
                    { this.props.user.authError && <div className="alert alert-danger">{this.props.user.authError}</div> }
                    <form >
                        <div className="form-group">
                            <input type="text" ref={input => this.name = input} className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="text" ref={input => this.pwd = input} className="form-control" placeholder="Password"/>
                        </div>                        
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" type="button"  onClick = {this.handleSubmit}>Login</button>
                        </div>
                    </form>  
                    
                    </div>   
                    </div>             
                </section>
                
            </div>            
        )
   
}
}

function mapStateToProps(state) {
    return {
        user: state.loginReducer,
        users: state.userReducer   }     
    
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({loginUser: loginUser, auth: auth}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(LoginPage);