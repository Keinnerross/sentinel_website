const CardAbout = ({ Icon, title, description }) => {
    return (
        <div className="w-[400px] h-[230px] flex justify-center items-center cursor-pointer ">
            <div className="text-white">
                <Icon fill="white" size="40" />
                <h2 className="text-2xl font-medium">{title}</h2>
                <p>{description}</p>

            </div>
        </div>
    )
}

export default CardAbout;