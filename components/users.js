import { List } from "antd";
import React from "react";
import UserConsumer from "../context";
import Link from "next/link";

class Users extends React.Component {
  render() {
    return (
      <React.Fragment>
        <UserConsumer>
          {(value) => {
            const { data } = value;
            return (
              <List
                data={data}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<Link href={"/user/" + item.id}>{item.name}</Link>}
                      description={item.email}
                    />
                  </List.Item>
                )}
              />
            );
          }}
        </UserConsumer>
      </React.Fragment>
    );
  }
}

export default Users;
