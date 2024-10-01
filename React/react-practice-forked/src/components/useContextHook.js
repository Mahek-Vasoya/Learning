import React, { useContext } from "react";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

const UseContextHook = () => {
  return (
    <ThemeContext.Provider value={themes.light}>
      <ContextConsumer />
    </ThemeContext.Provider>
  );
};

export default UseContextHook;

const ContextConsumer = () => {
  const value = useContext(ThemeContext);
  return <p>{value.background}</p>;
};
