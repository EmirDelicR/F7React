import React from "react";
import {
  App,
  Views,
  View,
  Statusbar,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from "framework7-react";

import routes from "../js/routes";

import { F7Provider } from "../context/f7Context";
import ToolbarComponent from "../components/Panels/toolbar";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      // Framework7 Parameters
      f7params: {
        name: "My App", // App name
        theme: "auto", // Automatic theme detection
        // App root data
        data: function() {
          return {
            user: {
              firstName: "John",
              lastName: "Doe"
            },
            // Demo products for Catalog section
            products: [
              {
                id: "1",
                title: "Apple iPhone 8",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."
              },
              {
                id: "2",
                title: "Apple iPhone 8 Plus",
                description:
                  "Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"
              },
              {
                id: "3",
                title: "Apple iPhone X",
                description:
                  "Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."
              }
            ]
          };
        },

        // App routes
        routes: routes
      },
      // Login screen demo data
      username: "",
      password: "",
      $f7: null
    };
    console.log("This: ", this);
  }
  render() {
    return (
      <F7Provider value={this.state.$f7}>
        <App params={this.state.f7params}>
          {/* Status bar overlay for fullscreen mode*/}
          <Statusbar></Statusbar>

          {/* Views/Tabs container */}
          <Views tabs className="safe-areas">
            {/* Tabbar for switching views-tabs */}
            <Toolbar tabbar labels bottom>
              <ToolbarComponent />
            </Toolbar>

            <View main tabActive url="/" className="safe-areas" />
          </Views>

          {/* Popup */}
          <Popup id="my-popup">
            <View>
              <Page>
                <Navbar title="Popup">
                  <NavRight>
                    <Link popupClose>Close</Link>
                  </NavRight>
                </Navbar>
                <Block>
                  <p>Popup content goes here.</p>
                </Block>
              </Page>
            </View>
          </Popup>

          <LoginScreen id="my-login-screen">
            <View>
              <Page loginScreen>
                <LoginScreenTitle>Login</LoginScreenTitle>
                <List form>
                  <ListInput
                    type="text"
                    name="username"
                    placeholder="Your username"
                    value={this.state.username}
                    onInput={e => this.setState({ username: e.target.value })}
                  ></ListInput>
                  <ListInput
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={this.state.password}
                    onInput={e => this.setState({ password: e.target.value })}
                  ></ListInput>
                </List>
                <List>
                  <ListButton
                    title="Sign In"
                    loginScreenClose
                    onClick={() => this.alertLoginData()}
                  />
                  <BlockFooter>
                    Some text about login information.
                    <br />
                    Click "Sign In" to close Login Screen
                  </BlockFooter>
                </List>
              </Page>
            </View>
          </LoginScreen>
        </App>
      </F7Provider>
    );
  }
  alertLoginData() {
    this.$f7.dialog.alert(
      "Username: " +
        this.state.username +
        "<br>Password: " +
        this.state.password
    );
  }
  componentDidMount() {
    this.$f7ready(f7 => {
      this.setState({ $f7: f7 });
    });
  }
}
