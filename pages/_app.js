import "../styles/globals.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import React from "react";
import { UserProvider } from "../context";
import Navbar from '../components/navbar';
class MyApp extends React.Component {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <React.Fragment>
        <UserProvider>
          <Navbar/>
          <Component {...pageProps} />
        </UserProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
