import React from 'react';
import {connect} from 'react-redux';

class HomePage extends React.Component {
  render() {
    return (
        <div>
            <section>
                <h2>Welcome Home !! Here all the posts will be shown.</h2>
                <ul>
                {this.props.users.map((user) =>{
                    return(
                        <li key = {user.id}><b>{user.first} {user.last} :</b> {user.description}</li>
                        
                    )
                })}
                </ul>
                
            </section>
        </div>
    );
  }
}
function mapStateToProps(state) {
    return {
        users: state.userReducer
    };
}
export default connect(mapStateToProps)(HomePage);