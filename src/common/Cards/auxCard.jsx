
import { FaRoad } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { IoIosAlert } from "react-icons/io";

import { MdOutlineGpsFixed } from "react-icons/md";


const AuxCard = () => {

    const [velocidad, setVelocidad] = useState(55); // Velocidad inicial
    const [aumentando, setAumentando] = useState(true); // Indica si la velocidad está aumentando o disminuyendo
    const velocidadMaxima = 85; // Velocidad máxima
    const velocidadMinima = 55; // Velocidad mínima

    useEffect(() => {
        // Función que simula el comportamiento del velocímetro
        const intervalo = setInterval(() => {
            if (aumentando) {
                setVelocidad((prevVelocidad) => {
                    if (prevVelocidad >= velocidadMaxima) {
                        setAumentando(false); // Cambiar a disminuir cuando se alcanza la velocidad máxima
                        return velocidadMaxima; // Mantener la velocidad máxima
                    }
                    return prevVelocidad + 1; // Aumentar la velocidad
                });
            } else {
                setVelocidad((prevVelocidad) => {
                    if (prevVelocidad <= velocidadMinima) {
                        setAumentando(true); // Cambiar a aumentar cuando se alcanza la velocidad mínima
                        return velocidadMinima; // Mantener la velocidad mínima
                    }
                    return prevVelocidad - 1; // Disminuir la velocidad
                });
            }
        }, 70); // Actualizamos cada 100ms para hacer la simulación más fluida

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalo);
    }, [aumentando]); // Se vuelve a ejecutar cuando cambia el estado "aumentando"



    return (
        <div
            className="rounded-[20px] bg-[#10305f] md:w-[33%] h-[400px] md:h-full p-6  bg-cover bg-center relative cursor-pointer"
        >

            <div className="flex justify-between">


                <div className="border-[2px] border-[#335992] text-white bg-[#112e58] border-solid p-3 rounded-3xl  w-[150px] h-[150px]  justify-center flex flex-col items-center relative">
                    <div className="w-full flex items-center justify-start gap-2">
                        <FaRoad fill="white" />
                        <h3 className="text-white">Velocidad</h3>
                    </div>
                    <div className=" w-[120px] h-full"></div>
                    <iframe className="scale-[1.9] pt-4  w-[120px] h-[120px] absolute" src="https://lottie.host/embed/32f85777-bb4d-4c91-97c9-e92d197525fe/qEI3dHDsHn.json"></iframe>
                    <p className="text-[14px] font-semibold">Velocidad: {velocidad} km/h</p>

                </div>
                <div className="border-[2px] border-[#335992] text-white bg-[#112e58] border-solid p-3 rounded-3xl  !mt-[40px] w-[150px] h-[150px] justify-center flex flex-col items-center">
                    <div className="w-full flex items-center justify-start gap-2 pt-4">
                        <FaRoad fill="white" />
                        <h3 className="text-white ">Rastreo</h3>
                    </div>
                    <iframe className="scale-[.9] pb-4  w-[120px] h-[120px]" src="https://lottie.host/embed/9e16899e-eecc-4425-b4f9-1cfce3bd3535/9drKB4u8yG.json"></iframe>
                </div>

            </div>
            <div>
                <div className="bg-white  p-2 rounded-full flex max-w-fit items-center gap-2 ">
                    <IoIosAlert  size={24}/>
                    <span>Mantente informado</span>
                </div>
                <h2 className="text-3xl font-semibold py-4 text-white">Mantente informado para que todo vaya bien</h2>
            </div>
        </div>
    );
}

export default AuxCard;