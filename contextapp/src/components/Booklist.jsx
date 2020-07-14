import React, { Component } from "react";
import { ThemeContext } from "../contexts/themeContext";
class Booklist extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="book-list"
              style={{ color: theme.syntax, background: theme.bg }}
            >
              <ul>
                <li style={{ background: theme.ui }}>Washington Denzel</li>
                <li style={{ background: theme.ui }}>Pirate De calaibe</li>
                <li style={{ background: theme.ui }}>Fast And Furious</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Booklist;
