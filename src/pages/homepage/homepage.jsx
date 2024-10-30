import PrimaryButton from "../../common/buttons/primaryButton";
import MainCard from "../../common/Cards/mainCard";
import AuxCard from "../../common/Cards/auxCard";
// import AccordionFAQ from "../../common/Accordion/AccordionFAQ";
import videoBanner from "../../assets/videos/1008.mp4"
import TemperatureCard from "../../common/Cards/temperatureCard";
import VideoSection from "./videoSection";
import ServicesLayout from "./services/servicesLayout";
import ProgramStatistics from "./program statistics/programStatistics";
import { Link } from "react-router-dom";



const HomePage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full md:h-[550px] flex justify-center items-center relative">
                <div className={`flex  transition-[1s] h-full  absolute bottom-0  w-full  items-end bg-gradient-to-t from-black/75 to-black/75  z-[-1]`}></div>
                <video src={videoBanner} autoPlay muted loop className="object-cover absolute w-[100%] h-full z-[-2] top-0" />
                <div className="w-[90vw] md:w-[75%] flex justify-center items-center  gap-8 text-center  text-white  ">
                    <div className="w-[100%] text-center flex-col flex justify-center items-center py-16 ">
                        <div className="flex  md:w-3/4 justify-center font-bold  ">
                        </div>
                        {/* , Seguridad y Control a tu Alcance */}
                        <h2 className="text-5xl md:text-7xl font-extrabold line md:leading-[5rem]"> GPS para tus Vehículos, Seguridad y Control a tu Alcance</h2>
                        <p className="pb-[25px] pt-6 md:text-lg md:font-semibold md:w-[65vw]"> Nuestra plataforma avanzada te ofrece <span className="md:font-bold">precisión, seguridad y comodidad, sin complicaciones.</span> Rastrear tus activos, optimizar tus rutas y mantener la seguridad de tu equipo  <span className="md:font-bold">nunca ha sido tan sencillo.</span></p>
                        <Link to="/services/4" >
                            <PrimaryButton textBtn="Comienza Ahora" long={true} />
                        </Link>

                    </div>
                    {/* <div className="w-1/2 ">

                    </div> */}

                </div>
            </div>

            {/* Estadisticas */}
            <div className="w-[90%] md:h-[450px] pt-[80px]  flex  flex-col md:flex-row justify-between gap-[50px] ">
                <AuxCard />
                <MainCard />
                <TemperatureCard />
            </div>

            {/* Video */}
            <VideoSection />

            {/* Servicios */}
            <ServicesLayout />




            <ProgramStatistics />

            {/* Preguntas Frecuentes */}

            {/* <div className="w-full flex justify-center py-[100px] bg-slate-100 h-[500px]">
                <div className="w-[75%] flex justify-between items-center gap-[80px]">
                    <div className="flex flex-col gap-8 w-[50%]">
                        <h2 className="text-[50px]">Preguntas Frecuentes</h2>
                        <p className="26px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, cupiditate dolore. Quos molestiae, tempora quidem quis id nemo fugiat numquam accusantium doloremque soluta culpa, totam, neque aspernatur ex praesentium.</p>
                        <Button colorScheme='grey' variant='outline' width="200px" fontSize="24px" paddingY="30px">
                            Hacer consulta
                        </Button>
                    </div>
                    <div className="w-[50%]">
                        <AccordionFAQ />
                    </div>
                </div>
            </div> */}





        </div >


    )
}

export default HomePage;