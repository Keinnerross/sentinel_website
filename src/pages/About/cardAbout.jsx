const CardAbout = ({ Icon, title, description }) => {
    return (
        <div className="w-[400px] py-10 md:py-0 md:h-[230px] flex justify-center items-center cursor-pointer ">
            <div className="text-white flex flex-col items-center text-center md:text-left md:block">
                <Icon fill="white" size="40" />
                <h2 className="text-2xl font-medium">{title}</h2>
                <p>{description}</p>

            </div>
        </div>
    )
}

export default CardAbout;