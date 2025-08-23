import UseLocalStorage from "../QRCodeGenerator/UseLocalStorage";
import "./ThemeSwitch.css";

export default function ThemeSwitch() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handleChangeThemeClick() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  console.log(theme);

  return (
    <div className="theme-switch" data-theme={theme}>
      <h1 className="theme-msg">Click to Change Theme!</h1>
      <button
        className="change-theme-btn"
        onClick={() => {
          handleChangeThemeClick();
        }}
      >
        Change Theme
      </button>
    </div>
  );
}
