import { FaSun, FaMoon } from "react-icons/fa";

const ContextApi = () => {
  const darkTheme = false;

  return (
    <div>
      <span className="icon">
        {darkTheme ? <FaMoon /> : <FaSun />}
      </span>
      <button>{darkTheme ? <h1>Enable Ligth Theme</h1> : <h1>Enable Dark Theme</h1>}</button>
    </div>
  )
}

export default ContextApi