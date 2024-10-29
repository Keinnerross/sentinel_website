import { Fragment } from "react"

import col1_1 from "../../../assets/images/programStatics/col1/1.webp"
import col1_2 from "../../../assets/images/programStatics/col1/2.webp"
import col1_3 from "../../../assets/images/programStatics/col1/3.webp"
import col1_4 from "../../../assets/images/programStatics/col1/4.webp"
import col1_5 from "../../../assets/images/programStatics/col1/5.webp"
import col1_6 from "../../../assets/images/programStatics/col1/6.mov"
import col1_7 from "../../../assets/images/programStatics/col1/7.webm"
import col1_8 from "../../../assets/images/programStatics/col1/8.webp"
import col2_1 from "../../../assets/images/programStatics/col2/1.webp"
import col2_2 from "../../../assets/images/programStatics/col2/2.webp"
import col2_3 from "../../../assets/images/programStatics/col2/3.webm"
import col2_4 from "../../../assets/images/programStatics/col2/4.webp"


import CardStatistics from "./cardStatistics"
import PrimaryButton from "../../../common/buttons/primaryButton"


const ProgramStatistics = () => {
    return (<Fragment>

        <div id="ventajas" className="w-full hidden md:flex justify-center items-center p-16">
            <div className="flex justify-between w-[90%]">
                <h3 className="text-4xl w-[40%]">
                    Contamos con el software de rastreo GPS y video telemática más robusto de la industria.
                </h3>
                <div className="w-1/2 flex gap-4 flex-col">
                    <p className="text-2xl">
                        Ofrecemos a nuestros clientes una plataforma telemática para cubrir necesidades avanzadas en todas las verticales del rastreo GPS
                    </p>
                    <div className="w-[30%]">
                        <a href="/services/2"> <PrimaryButton textBtn="Solicitar demo ->" long={true} /></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full hidden md:flex justify-end pb-10">

            <div className="w-[95%] flex justify-end ">
                <div className="flex justify-between w-full">
                    <div className="w-[55%] ">
                        <div className="flex gap-8 items-end">
                            <div className="w-[58%] flex flex-col gap-6">

                                <div >
                                    <CardStatistics>
                                        <img src={col1_1}></img>
                                    </CardStatistics>
                                </div>

                                <div className=" flex gap-6 ">
                                    <CardStatistics>
                                        <img className="" src={col1_2}></img>
                                    </CardStatistics>
                                    <CardStatistics>
                                        <img src={col1_3}></img>
                                    </CardStatistics>

                                </div>

                                <div className=" flex gap-6 ">
                                    <CardStatistics>
                                        <img src={col1_4}></img>
                                    </CardStatistics>
                                    <CardStatistics>
                                        <img src={col1_5}></img>
                                    </CardStatistics>
                                </div>

                            </div>
                            <div className="w-[40%]">
                                <CardStatistics>
                                    <video className="" src={col1_7} autoPlay muted loop ></video>

                                </CardStatistics>
                            </div>
                        </div>
                        <div className="w-full pt-4">
                            <CardStatistics>
                                <video src={col1_6} autoPlay muted loop ></video>
                            </CardStatistics>
                        </div>

                        <div className="w-full flex justify-end pt-4">
                            <div className="w-[40%]">
                                <CardStatistics>
                                    <img className="" src={col1_8}  ></img>

                                </CardStatistics>
                            </div>
                        </div>
                    </div>
                    <div className="w-[43%] flex flex-col gap-4">
                        <div>
                            <CardStatistics>
                                <img src={col2_1}></img>
                            </CardStatistics>
                        </div>
                        <div>
                            <CardStatistics>
                                <img src={col2_2}></img>
                            </CardStatistics>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-[45%]">
                                <CardStatistics >
                                    <video src={col2_3} autoPlay muted loop></video>
                                </CardStatistics>
                            </div>
                            <div className="w-[52%]">

                                <CardStatistics>
                                    <img src={col2_4}></img>
                                </CardStatistics>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default ProgramStatistics;