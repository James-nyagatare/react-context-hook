import React from "react";
import Navbar from "./components/navbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./contexts/themeContext";
import ToggleTheme from "./components/toggleTheme";
import AuthContextProvider from "./contexts/AuthContext";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
