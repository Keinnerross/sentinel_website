import CardAbout from "./cardAbout";
import { FaHandSparkles } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import ProgramStatistics from "../homepage/program statistics/programStatistics";
import aboutimg from "../../assets/images/aboutimg.jpg"
import Tag from "../../common/tags/tags";
import { FaShieldAlt, FaLock, FaCar, FaTools, FaRegCheckCircle } from 'react-icons/fa';



const About = () => {

    const benefits = [
        {
            text: 'Seguridad Mejorada',
            icon: <FaShieldAlt />,
        },
        {
            text: 'Prevención de Robos',
            icon: <FaLock />,
        },
        {
            text: 'Control Total',
            icon: <FaCar />,
        },
        {
            text: 'Ahorro en Seguros',
            icon: <FaRegCheckCircle />,
        },
        {
            text: 'Historial de Viajes',
            icon: <FaTools />,
        },
        {
            text: 'Mejor Gestión de Flotas',
            icon: <FaCar />,
        },
        {
            text: 'Alertas Personalizadas',
            icon: <FaShieldAlt />,
        },
        {
            text: 'Facilidad de Instalación',
            icon: <FaTools />,
        },
        {
            text: 'Soporte al Cliente',
            icon: <FaRegCheckCircle />,
        },
        {
            text: 'Escalabilidad',
            icon: <FaCar />,
        },
        {
            text: 'Protección de Datos',
            icon: <FaLock />,
        },
        {
            text: 'Compatibilidad Multiplataforma',
            icon: <FaShieldAlt />,
        },
    ];

    return (
        <div>
            <div className="w-full flex  justify-center items-center pt-12 md:pt-28 pb-20">
                <div className="md:w-[80%] flex justify-center gap-16 flex-col md:flex-row">
                    <div className="md:w-[50%] flex items-center flex-col text-center md:block md:text-left px-4 md:px-0">
                        <Tag title="Soñamos con transformar" color="orange-500" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 py-4 md:py-2">Pasión por la Seguridad: Conociendo a Sentinel GPS</h2>
                        <p className="text-lg mb-4">
                            En <strong>Sentinel GPS</strong>, nos dedicamos a ofrecer soluciones de rastreo GPS que transforman la manera en que las empresas gestionan sus flotas y recursos en Chile. Con un enfoque en la seguridad y el control, nuestra misión es proporcionar a nuestros clientes las herramientas necesarias para optimizar sus operaciones y garantizar la protección de sus activos.
                        </p>
                        <p className="text-lg mb-4">
                            Con años de experiencia en la industria, hemos desarrollado una plataforma telemática robusta que se adapta a diversas necesidades. Ya sea que operes en el sector retail, transporte de pasajeros, minería o cualquier otro ámbito, nuestros servicios están diseñados para brindarte información en tiempo real y mejorar la eficiencia de tus procesos.
                        </p>

                    </div>
                    <div className="md:w-[50%] px-4 md:px-0">


                        <img className="rounded-lg " src={aboutimg}></img>
                        <div className="flex flex-wrap gap-4 p-6 justify-center md:justify-start">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center border-[1px] border-solid border-orange-500 text-gray-800 px-4 py-2 rounded-full hover:scale-[1.05] hover:bg-orange-500 hover:text-white cursor-pointer transition-all  "
                                >
                                    <span className="mr-2">{benefit.icon}</span>
                                    <span className="">{benefit.text}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-slate-900 flex justify-center items-center">
                <div className="flex w-[80%] md:gap-8 justify-between flex-wrap md:flex-nowrap">
                    <CardAbout Icon={FaHandSparkles} title="Confiabilidad" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    <CardAbout Icon={FaHandshake} title="Compromiso " description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    <CardAbout Icon={FaStar} title="Transparencia" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    <CardAbout Icon={MdScience} title="Innovación" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                </div>
            </div>

            <ProgramStatistics />
        </div>
    )
}

export default About;