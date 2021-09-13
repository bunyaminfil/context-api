import React, { Component, useReducer } from "react";
import axios from "axios";
const UserContext = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_USER":
//       return state;
//   }
// };

export class UserProvider extends Component {
  state = {
    data: [],
    // dispatch: (action) => {
    //   this.setState((state) => reducer(state, action));
    // },
  };
  componentDidMount = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
    this.setState({
      data: response.data,
    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;
