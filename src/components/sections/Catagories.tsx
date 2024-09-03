import Image from "next/image"
import Heading from "../common/Heading"
import { Categories } from "@/lib/const"


const Catagories = ()=> {
    return (
        <div className="w-full mx-auto">
            <Heading title="Popular Catagories" subTitle="Customer Favorites" variant="center"  />
            <div className="my-12 grid lg:grid-cols-4 justify-center gap-12">

                {
                    Categories.map((ele)=> (
                        <div key={ele.id} className="w-fit border border-gray lg:w-full space-y-4 bg-white shadow-xl flex flex-col items-center justify-center gap-1.5 py-12 px-16 rounded-3xl">
                            <div className="rounded-full flex items-center justify-center bg-secondary p-1.5 w-24 h-24">
                                <Image src={ele.img} alt="" width={200} height={200}  />
                            </div>
                            <div className="text-center">
                                <h2 className="text-xl xl:text-2xl font-bold">{ele.label}</h2>
                                <span className="text-xs">{ele.status}</span>
                            </div>
                        </div>
                    ) )
                }
                
               
                
            </div>
        </div>
    )
}

export default Catagories