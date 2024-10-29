import React, { useState, useEffect } from "react";


import { FaThermometerHalf } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
const TemperatureCard = () => {

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
        }, 30); // Actualizamos cada 100ms para hacer la simulación más fluida

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalo);
    }, [aumentando]); // Se vuelve a ejecutar cuando cambia el estado "aumentando"


    return (

        <div
            className="rounded-[20px] bg-[#10305f] md:w-[33%] h-[400px] md:h-full p-6  bg-cover bg-center flex flex-col justify-between "
        >

            <div className="">
                <div className="border-[2px] border-[#335992] bg-[#112e58] cursor-pointer text-white border-solid rounded-3xl  w-full h-[150px] justify-center flex flex-col items-center p-4">
                    <div className="w-full flex items-center justify-start gap-2">
                        <FaThermometerHalf fill="white" />
                        <h3 className="text-white">Rastreo</h3>
                    </div>
                    <div className="w-full ">
                        <h1>Simulación de Temperatura</h1>
                        <div  className="flex justify-end pr-10 rounded-full h-3 mt-2" style={{
                            background: "linear-gradient(to right, #06367c, #f87316)",
                            position: "relative"
                        }}>
                            <div  className="" style={{
                                width: "60%",
                                height: "10px",
                                position: "relative"
                            }}>
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: `${(velocidad - velocidadMinima) / (velocidadMaxima - velocidadMinima) * 100}%`,
                                        transform: "translate(-50%, -50%)",
                                        width: "12px",  // Tamaño del punto
                                        height: "12px",
                                        backgroundColor: "blue",  // Color del punto, puedes ajustarlo
                                        borderRadius: "50%",  // Hace el div circular
                                    }}
                                />
                            </div>
                        </div>
                        <hr className="my-4 divide-[#335992]"></hr>
                        <div className="flex justify-between items-start">
                            <span>Ver más sobre este servicio</span>
                            <span>btn</span>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="bg-orange-500 text-white p-2 rounded-full flex max-w-fit items-center gap-2 cursor-pointer">
                    <IoIosAlert size={24} />
                    <span>Mantente informado</span>
                </div>
                <h2 className="text-3xl font-semibold py-4 text-white">Vigile la temperatura y evite perdidas </h2>
            </div>

        </div>
    )
}



export default TemperatureCard;