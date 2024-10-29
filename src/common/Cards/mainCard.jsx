import img from "../../assets/images/descarga.jpeg";

const MainCard = ({ width }) => {
    return (
        
        <div
            className={`rounded-[20px]  md:w-[40%] h-[400px] md:h-full bg-slate-900 bg-cover bg-center relative cursor-pointer`}
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent rounded-[20px]"></div>
            <h4 className="w-[70%] absolute text-white text-xl p-4 bottom-[10px] ">Gestiona tu flota de manera inteligente y eficiente</h4>
        </div>
    );
}

export default MainCard;