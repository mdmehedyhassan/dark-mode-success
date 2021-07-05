import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { GlobalStyles, lightTheme, darkTheme } from './themes';

function App() {

  const [theme, setTheme] = useState("light");
  const [darkMode, setDarkMode] = useState(true);

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div>
      <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
        <GlobalStyles />
          <button onClick={() => [themeToggle(), setDarkMode(!darkMode)]}> {darkMode ? "light" : "dark"} </button>
      </ThemeProvider>
      <p>Hello</p>
    </div>
  );
}

export default App;
