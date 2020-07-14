import React, { Component } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { AuthContext } from "../contexts/AuthContext";
class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themecontext) => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = themecontext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ color: theme.syntax, background: theme.ui }}>
                  <h1>Context app</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? "Logged in" : "Logged out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
