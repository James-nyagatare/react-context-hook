import React, { Component } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { AuthContext } from "../contexts/AuthContext";
class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          const { isAuthenticated, authToggle } = authContext;
          <ThemeContext.Consumer>
            {(themecontext) => {
              const { isLightTheme, light, dark } = themecontext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ color: theme.syntax, background: theme.ui }}>
                  <h1>Context app</h1>
                  <div>{isAuthenticated ? "Logged in" : "Logged out"}</div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>;
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
