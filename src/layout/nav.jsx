import { useState } from "react";
import HoverCard from "../common/header/hovercard";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Nav = ({ flex, scrollUp }) => {

    const [isActive, setIsActive] = useState(false)




    return (
        <div>
            <ul className={`${flex ? "flex gap-8 items-center" : ""}  text-md`}>
                <li className="cursor-pointer relative hover:text-gray-600 flex gap-1 items-center " onMouseEnter={() => setIsActive(true)} >Soluciones <div className="pt-1"> <IoIosArrowDown /></div>
                    <HoverCard isActive={isActive} setIsActive={setIsActive} />
                </li>
                <a href="/about"><li className="cursor-pointer hover:text-gray-600">Ventajas</li></a>

                <li className="cursor-pointer hover:text-gray-600">Recursos</li>

                <Link to="/about" className="cursor-pointer hover:text-gray-600" onClick={() => scrollUp()}>Nosotros</Link>
            </ul>
        </div >
    )
}

export default Nav;