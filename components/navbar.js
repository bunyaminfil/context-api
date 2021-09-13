import React from "react";
import { Menu } from "antd";

class Navbar extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="users">
          <a
            href="/users"
            rel="noopener noreferrer"
          >
            Users
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default Navbar;
