import React from 'react';
import {connect} from 'react-redux';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>        
          <section>              
              <h2>Welcome {this.props.user.first} {this.props.user.last}</h2>
              <div>Profile:</div>
              <div>Age: {this.props.user.age}</div>
              <div>Description: {this.props.user.description}</div>        
          </section>
      </div>
    );
  }
}
function mapStateToProps(state) {  
  return {     
      user: state.activeReducer.user,
  };
}

export default connect(mapStateToProps)(ProfilePage);