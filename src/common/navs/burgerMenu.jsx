import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../functionsUI";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { MdBusinessCenter } from "react-icons/md";
import { FaStar, FaRegFolderOpen, FaUserFriends } from "react-icons/fa";
import Logo from "../logo/logo"

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
            {/* Botón de menú hamburguesa */}
            <div
                className="md:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir menú"
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
            >
                <GiHamburgerMenu size={24} />
            </div>

            {/* Menú deslizable */}
            <div
                className={`fixed inset-0 z-[99999] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            >
                <div
                    className={`bg-[#DBE4EC] h-full w-[75vw] fixed right-0 p-8 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <ul className='flex flex-col gap-8 text-md font-semibold text-gray-800'>
                        <p className="font-bold">Navegación</p>
                        <Link to="/" className="flex gap-2 items-center" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                            <AiFillHome />Inicio
                        </Link>
                        <Link to="/about" className="cursor-pointer relative hover:text-gray-600 flex gap-1 items-center" onClick={() => setIsOpen(false)}>
                            <MdBusinessCenter />Soluciones
                        </Link>
                        <Link to="/about" className="cursor-pointer hover:text-gray-600 flex gap-2 items-center" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                            <FaStar />Ventajas
                        </Link>
                        <Link to="/about" className="cursor-pointer hover:text-gray-600 flex gap-2 items-center" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                            <FaRegFolderOpen />Recursos
                        </Link>
                        <Link to="/about" className="cursor-pointer hover:text-gray-600 flex gap-2 items-center" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                            <FaUserFriends />Nosotros
                        </Link>
                    </ul>
                        {/* <div className="h-1/2 flex items-end">
                            <Logo />
                        </div> */}
                </div>
            </div>
        </Fragment>
    );
};

export default BurgerMenu;
