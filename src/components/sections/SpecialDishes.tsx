import { RiArrowLeftSLine, RiArrowRightSLine, RiHeartLine } from "react-icons/ri"
import Heading from "../common/Heading"
import Image from "next/image"
import { specialDishes } from "@/lib/const"

const SpecialDishes = ()=> {

    return (
        <div className="w-full mx-auto felx flex-col items-center my-24">
            <div className="flex justify-between items-end">
                <Heading title="Standout Dishes From Our Menu" subTitle="Special Dishes" variant="left"  />
                <div className="flex gap-3.5 justify-between">
                    <RiArrowLeftSLine size={50} className="bg-lightgray rounded-full p-3 " /> 
                    <RiArrowRightSLine size={50} className="bg-primary text-white rounded-full p-3 " />
                </div>
            </div>

            <div className="my-12 grid lg:grid-cols-3 gap-12 ">
                {
                    specialDishes.map((ele)=> (
                        <div key={ele.id} className="relative bg-white py-12 px-12 flex flex-col gap-3.5 items-center shadow-xl rounded-2xl">
                            <Image src={ele.img} alt='' width={250} height={250} />
                            <div className="w-full space-y-3 my-3.5">
                                <h2 className="text-xl xl:text-3xl font-bold">{ele.title}</h2>
                                <span className="text-sm">{ele.description}</span>
                                <div className="flex justify-between">
                                    <span className="font-bold xl:text-xl">{ele.price}</span>
                                    <span className="font-semibold text-gray xl:text-xl">{ele.rate}</span>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 bg-primary text-white rounded-bl-3xl rounded-tr-3xl h-14 w-14 p-2 flex justify-center items-center">
                                <RiHeartLine size={18} /> 
                            </div>
                        </div>
                    ) )
                }
                
            </div>
            
        </div>
    )
}

export default SpecialDishes