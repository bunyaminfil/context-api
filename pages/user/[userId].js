import React, { Component } from "react";
import UserConsumer from "../../context";
import User from "../../components/user";

class UserPage extends Component {
  render() {
    return (
      <React.Fragment>
        <User />
      </React.Fragment>
    );
  }
}

export default UserPage;
