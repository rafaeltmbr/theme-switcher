import { ThemeProvider, DefaultTheme } from "styled-components";

import usePersistedState from "./util/usePersistedState";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

export default function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}
