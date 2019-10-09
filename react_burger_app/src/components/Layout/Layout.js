import React, { Component } from "react";
import Aux from "../../hoc/Aux"; // this is used to have multiple divs in one component
import styles from "./Layout.module.css"; // to pull all css classes from Layouts.css
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

state = {
    showSideDrawer: true

}

sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
}

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
