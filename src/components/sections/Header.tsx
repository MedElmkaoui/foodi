import Image from "next/image"
import Link from "next/link"
import { RiArrowDropDownLine, RiArrowRightSFill, RiPhoneLine, RiSearchLine, RiShoppingBasketLine } from "react-icons/ri"
import Btn from "../common/Btn"


const Header = ()=> {
    return (
        <div className="w-full mx-auto">
            <nav className="w-full mx-auto h-[64px] flex items-center justify-between">
                <Image src={'/logo.png'} alt="" width={100} height={50} />
                <ul className="hidden lg:flex items-center gap-5">
                    <li className="text-primary "><Link href={''}> Home </Link></li>
                    <li className="flex items-center gap-1"><Link href={''}> Menu </Link> <RiArrowDropDownLine  size={20} className="text-primary " /> </li>
                    <li className="flex items-center gap-1"><Link href={''}> Services </Link> <RiArrowDropDownLine size={20}  className="text-primary " /></li>
                    <li className=""><Link href={''}> Offers </Link></li>
                </ul>
                <div className="relative flex items-center gap-3.5">
                    <RiSearchLine size={20} /> 
                    <RiShoppingBasketLine size={20}/> 
                    <button className="bg-primary rounded-full py-2.5 px-5 flex items-center gap-1.5 text-white text-sm">
                        <RiPhoneLine size={22} />  
                        <span>Contact</span>
                    </button>
                </div>
            </nav>

            <div className="my-12 flex gap-12 flex-col-reverse lg:flex-row justify-between items-center">
                <div className="space-y-8 lg:space-y-12">
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-[60px] lg:leading-[80px]">Dive into Delights <br /> Of Delectable <span className="text-primary">Food</span> </h1>
                    <p className="xl:text-lg">
                        Where Each Plate Weaves a Story of Culinary <br /> Mastery and Passionate Craftsmanship
                    </p>
                    <div className="flex gap-8 py-2.5 ">
                        <Btn label="Order Now" />
                        <button className="flex gap-2.5 items-center">
                            <span>Watch Video</span>
                            <RiArrowRightSFill size={50} className="bg-white p-2.5 shadow-md rounded-full" /> 
                        </button>
                    </div>
                </div>
                <div className="relative ">
                    <div className="relative bg-primary lg:w-[500px] lg:h-[500px] w-[380px] h-[380px] rounded-full">
                        <Image src={'/hero.png'} alt="hero" width={500} height={500} className="absolute -top-12 -left-5"  />
                    </div>
                    <div className="bg-white shadow-sm rounded-full py-2.5 px-6 absolute top-5 lg:-left-10 left-5">
                        <p className="text-meta-red">Hot spicy Food 🌶</p>
                    </div>
                    <div className="z-1 absolute lg:-left-10 left-16 lg:bottom-2 -bottom-10 flex flex-col lg:flex-row lg:gap-12 gap-3">
                        <div className="bg-white rounded-xl w-[220px] shadow-lg py-2.5 px-2.5 flex gap-3.5 items-center">
                            <Image src={'/hero/01.png'} alt="" width={60} height={50}  />
                            <div>
                                <h2 className="text-sm font-semibold text-nowrap">Spicy noodles</h2>
                                <span className="text-gray font-semibold">$18.00</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl w-[220px] shadow-lg py-2.5 px-2.5 flex gap-3.5 items-center">
                            <Image src={'/hero/01.png'} alt="" width={60} height={50} />
                            <div>
                                <h2 className="text-sm font-semibold text-nowrap">Vegetarian salad</h2>
                                <span className="text-gray font-semibold">$23.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header