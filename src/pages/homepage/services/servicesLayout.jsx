import CardService from "./cardServices"
import { services } from "./dataServices"
import Tag from "../../../common/tags/tags"
import { TbAlertCircleFilled } from "react-icons/tb";


const ServicesLayout = () => {

    return (
        <div className="flex flex-col items-center pb-[100px] w-full pt-20">
                <Tag title="principales sectores" color="orange-500" Icon={TbAlertCircleFilled} />
                <h2 className="text-4xl font-semibold md:w-[50vw] text-center py-2">Servicios más demandados para la gestión integral de tu empresa</h2>
            <div className="w-[90vw] flex flex-col md:flex-row flex-wrap gap-14 justify-center pt-14">

                {services ?
                    services.map((service, i) =>
                        <CardService key={i}
                            title={service.title} description={service.description} url={service.urlImg} Icon={service.icon} id={i} />
                    ) : "No hay nada que mostrar"
                }

            </div>
        </div>
    )
}

export default ServicesLayout