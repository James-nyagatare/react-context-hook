import React, { Component } from "react";
import { ThemeContext } from "../contexts/themeContext";
class ToggleTheme extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toggle Theme</button>;
  }
}

export default ToggleTheme;
