import { useState } from "react";
import PrimaryButton from "../../../common/buttons/primaryButton";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../functionsUI";

const CardService = ({ title, description, url, Icon, id }) => {
    const [isHover, setIsHover] = useState(false);

    return (

        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="min-h-[350px] md:min-h-[280px] w-full md:w-[30%] rounded-[12px] cursor-pointer bg-cover bg-center relative hover:shadow-header-shadow "
            style={{ backgroundImage: `url(${url})` }}
        >
            <Link to={`/services/${id}`} onClick={() => scrollToTop()}>
                <div
                    className={`${isHover ? "opacity-100" : "opacity-100 md:opacity-0"
                        } transition-opacity duration-200 ease-in-out rounded-[12px] h-full absolute bottom-0 z-50 w-full flex items-end bg-gradient-to-t from-black/100 to-black/40`}
                >
                    <div className="text-white px-6 py-8">
                        <div className="flex items-center gap-2">
                            <Icon size={24} fill="#f87316" />
                            <h2 className="text-2xl font-semibold py-2">{title}</h2>
                        </div>
                        <p className="text-sm pb-4">{description ? description : ""}</p>
                        <PrimaryButton textBtn="Quiero saber más" />
                    </div>
                </div>
            </Link>

        </div >
    );
};

export default CardService;
