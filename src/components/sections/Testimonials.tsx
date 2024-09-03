import { RiStarSFill } from "react-icons/ri"
import Heading from "../common/Heading"


const Testimonials = ()=> {
    return (
        <div className="mt-52 py-12 grid gap-12 lg:grid-cols-2 items-center ">
            <div className="relative flex justify-center">
                <div className="relative bg-primary rounded-t-full rounded-b-2xl h-[330px] w-[330px] lg:h-[450px] lg:w-[500px]">
                    <img src="/testimonials/01.png" alt="" className="absolute bottom-0  lg:w-[450px] w-[350px]" />
                    <img src="/testimonials/02.png" alt="" className="absolute lg:bottom-52 bottom-32 -right-5  w-[45px]" />
                    <img src="/testimonials/03.png" alt="" className="absolute lg:bottom-52 bottom-32 -left-5  w-[45px]" />
                    <div className="bg-white shadow-lg rounded-full py-2.5 px-6 absolute -bottom-3 lg:-right-16 -right-3 ">
                        <p className="">Our Best Chef 😁</p>
                    </div>
                </div>
            </div>
            
            <div className="w-full space-y-8">
                <Heading title="What Our Customers Say" subTitle="Testimonials" variant="left" />
                <p className="xl:text-lg">
                    “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
                </p>
                <div className="py-3.5 flex items-center gap-5">
                    <div className="flex selection:">
                        <img src="/testimonials/06.png" alt="" className=" w-[60px] border-2 rounded-full border-white" />
                        <img src="/testimonials/05.png" alt="" className="-ml-5 w-[60px]" />
                        <img src="/testimonials/04.png" alt="" className="-ml-5 w-[60px]" />
                    </div>
                    <div>
                        <h2 className="font-semibold">Customer Feedback</h2>
                        <div className="flex gap-2.5 items-center">
                            <RiStarSFill size={20} className="text-yellow-300" /> 
                            <span className="font-bold">4.9</span>
                           <span className="text-sm">(18.6k Reviews)</span> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials