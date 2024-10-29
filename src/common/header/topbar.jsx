import { useEffect, useState } from "react";


import { FaCommentDots } from "react-icons/fa";

// import { RiFunctionFill } from "react-icons/ri";



const TopBar = () => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsActive(true)
        }, 1500)
    }, [])

    // const colorBg = "[#0d264a]";
    // 153d75
    return (
        <div className={`${isActive ? "flex" : "hidden"}  w-full h-14 flex justify-center items-center bg-blueMain`}>
            <div className="w-[90%] text-center flex gap-6 justify-between items-center">
                <div className="flex items-center gap-4">
                    <FaCommentDots fill="white" />   <p className="text-white text-sm text-left">Sentinel Asistent: su asistente IA para obtener información más rápida sobre nosotros</p>
                </div>
                <div className="flex text-white">
                    <li className={`h-full hover:bg-white hover:text-slate-900 p-4 cursor-pointer`}>Blog</li>
                    <li className={`h-full hover:bg-white hover:text-slate-900 p-4 cursor-pointer`}>Soporte</li>
                    <li className={`h-full hover:bg-white hover:text-slate-900 p-4 cursor-pointer`}>Comunidad</li>
                    <a href="https://partners.redgps.com/login" target="_blank"> <li className={`h-full hover:bg-white hover:text-slate-900 p-4 cursor-pointer `}>Iniciar Sesión</li></a>
                </div>
            </div>
        </div>
    )
}

export default TopBar;

{/* <div className="flex gap-2 items-center bg-white px-4 py-[3px] rounded-full">
                    <RiFunctionFill />
                    <span className="font-bold cursor-pointer">Todas las funcionalidades</span>
                </div> */}