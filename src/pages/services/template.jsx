import ServicesForm from "../../forms/ServicesForm"
import { services } from "../homepage/services/dataServices";
import { useParams } from 'react-router-dom';
import ServicesLayaut from "../homepage/services/servicesLayout";

const ServicesTemplate = () => {

    const { serviceId } = useParams() ;

    return (
        <div>
            <div className="h-screen bg-no-repeat bg-cover bg-center relative " style={{
                backgroundImage: `url('${services[serviceId].urlImg}')`
            }} >

                <div
                    className="h-full absolute bottom-0 z-50 w-full justify-center flex bg-gradient-to-t from-black/100 to-black/40 text-white"
                >

                    <div className="w-80% h-full flex items-center justify-center">
                        <div className="pl-20 flex flex-col justify-center items-center w-1/2 h-full">
                            <h2 className="text-7xl font-bold pb-6">
                                {services[serviceId].title}
                            </h2>
                            <p>{services[serviceId].description}</p>
                        </div>
                        <div className="flex justify-center items-center w-1/2  h-full" >

                            <ServicesForm />
                        </div>
                    </div>
                </div >
            </div >
            <ServicesLayaut />
        </div>
    )
}

export default ServicesTemplate;