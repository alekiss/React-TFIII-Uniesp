import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
    return (<Link to={"/"} style={{ textDecoration: "none" }}><div className="header"><h1 className="header_title">React Exercises</h1></div></Link>)
}

export default Header;