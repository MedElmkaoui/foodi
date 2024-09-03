

interface Props {
    title : string, 
    subTitle : string,
    variant : 'center' | 'left'
}

const Heading = ({title, subTitle, variant}: Props)=> {
    return (
        <div className={`${variant === 'center' ? 'text-center w-full' : 'text-left lg:w-80 xl:w-[600px] xl:space-y-8'}  `}>
            <span className="text-meta-red uppercase font-semibold "> {subTitle} </span>
            <h1 className="text-4xl xl:text-6xl font-bold"> {title} </h1>
        </div>
    )
}

export default Heading