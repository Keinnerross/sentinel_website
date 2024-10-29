import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"


const Logo = ({ scrollUp }) => {
    return (
        <Link to="/" onClick={() => scrollUp()}>
            <img src={logo} className="w-[250px]" />
        </Link>
    )
}

export default Logo;