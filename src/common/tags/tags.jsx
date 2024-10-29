const Tag = ({ title, color, Icon }) => {
    return (
        <div className={`bg-${color} w-fit px-4 py-2 cursor-pointer rounded-full text-white flex gap-1 items-center text-md font-semibold`}>
            {Icon ? <Icon size={16} /> : ""}
            {title}
        </div>
    )
}


export default Tag;