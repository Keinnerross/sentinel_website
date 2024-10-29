import { LuCalendarDays } from "react-icons/lu";



const PrimaryButton = ({ textBtn, negative }) => {


    return (
        <div className={`
        
        ${negative ? "bg-white border-[1px] border-solid border-black" : "text-white bg-orange-500 hover:bg-orange-400"} 
        rounded-[18px] cursor-pointer flex items-center justify-center py-[13px] px-4 `}>
            <span className="flex gap-2 items-center font-semibold text-md"><LuCalendarDays size={20} /> {textBtn ? textBtn : ""}</span>
        </div >
    )
}


export default PrimaryButton;