import { services } from "../../pages/homepage/services/dataServices"

const HoverCard = ({ isActive, setIsActive }) => {
    return (
        <div className={`${isActive ? "flex" : "hidden"} flex-col absolute top-[47px] right-[-40] bg-white items-center justify-center w-[250px] text-[14px] z-50`} onMouseLeave={() => setIsActive(false)} >

            <div className="border-solid border-blueMain border-[2px] w-full h-[1px]"></div>

            <div className="p-6">
                <ul className="flex-col flex cursor-pointer text-gray-600">
                    {services ? services.map((service, i) =>
                        <a href={`/services/${i}`} key={i} className="flex gap-2 items-center hover:text-slate-950 py-2" >
                            <service.icon size={17}/> <li>{service.title}</li></a>) : "No hay nada que mostrar"}
                </ul>
            </div>
        </div >

    )
}

export default HoverCard;