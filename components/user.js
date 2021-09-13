import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <React.Fragment>
          <div> id : {this.props.id}</div>
          <div> name :{this.props.name}</div>
      </React.Fragment>
    );
  }
}

export default User;
