import { RiStarSFill } from "react-icons/ri"
import Heading from "../common/Heading"
import Image from "next/image"
import { services } from "@/lib/const"
import Btn from "../common/Btn"


const Services = ()=> {
    return (
        <div className="grid lg:grid-cols-2 items-center">
            <div className="w-full space-y-8">
                <Heading title="Our Culinary Journey And Services" subTitle="Our Story & Services" variant="left" />
                <p className="xl:text-lg">
                    Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
                </p>
                <Btn label="Explore" />
            </div>
            <div>
                <div className="grid lg:grid-cols-2 gap-12 p-12">
                    {
                        services.map((ele)=> (
                            <div key={ele.id} className="bg-white shadow-xl rounded-3xl p-12 space-y-3 flex flex-col items-center ">
                                <Image src={ele.img} alt='' width={50} height={50} />
                                <h1 className="text-xl font-bold uppercase text-primary text-nowrap">{ele.label}</h1>
                                <p className="text-center font-medium text-gray">{ele.description}</p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Services