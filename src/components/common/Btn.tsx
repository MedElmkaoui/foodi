interface Props {
    label : string, 
}

const Btn = ({label,}: Props)=> {
    return (
        <button className="bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary transition duration-700 text-white text-sm lg:text-lg xl:text-xl py-2.5 xl:py-4 px-4 xl:px-12 rounded-full">
            {label}
        </button>
    )
}

export default Btn