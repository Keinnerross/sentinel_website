import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../functionsUI";
import { GiHamburgerMenu } from "react-icons/gi";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <Fragment>
            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <GiHamburgerMenu size={24}/>
            </div>
            {isOpen ?

                <div className="w-screen h-screen fixed z-[99999] top-0 left-0" onClick={() => setIsOpen(!isOpen)} >
                    <div className="bg-white h-full w-[75vw] fixed right-0 p-8" onClick={(e) => e.stopPropagation()}>
                        <ul className='flex flex-col gap-8  text-md'>
                            <a href="/">Inicio</a>
                            <li className="cursor-pointer relative hover:text-gray-600 flex gap-1 items-center "  >Soluciones
                            </li>

                            <a href="/about"><li className="cursor-pointer hover:text-gray-600">Ventajas</li></a>

                            <a href="/about">  <li className="cursor-pointer hover:text-gray-600">Recursos</li></a>

                            <Link to="/about" className="cursor-pointer hover:text-gray-600" onClick={() => scrollToTop()}>Nosotros</Link>
                        </ul>
                    </div>
                </div> : ""
            }

        </Fragment >
    )
}

export default BurgerMenu;