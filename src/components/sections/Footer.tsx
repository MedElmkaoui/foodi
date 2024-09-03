import Image from "next/image"
import { RiFacebookLine, RiInstagramLine, RiYoutubeLine } from "react-icons/ri"


const Footer = ()=> {
    return (
        <div className="pt-12 flex flex-col gap-12 bg-secondary rounded-t-3xl">
            <div className="flex flex-col lg:flex-row  justify-around gap-12">
                <div className="space-y-3 flex flex-col lg:items-start items-center ">
                    <Image src={'/logo.png'} alt="" width={80} height={80} />
                    <p className="w-[80%] text-center lg:text-start">
                        Savor the artistry where every dish is a culinary masterpiece
                    </p>
                </div>
                <div className="space-y-3 flex flex-col items-center lg:items-start">
                    <h2 className="text-xl font-bold">Useful links</h2>
                    <ul className="flex flex-col items-center lg:items-start">
                        <li>About us</li>
                        <li>Events</li>
                        <li>Blogs</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="space-y-3 flex flex-col items-center lg:items-start">
                    <h2 className="text-xl font-bold">Main Menu</h2>
                    <ul className="flex flex-col items-center lg:items-start">
                        <li>Home</li>
                        <li>Offers</li>
                        <li>Menus</li>
                        <li>Reservation</li>
                    </ul>
                </div>
                <div className="space-y-3 flex flex-col items-center lg:items-start">
                    <h2 className="text-xl font-bold">Contact Us</h2>
                    <ul className="flex flex-col items-center lg:items-start">
                        <li>example@email.com</li>
                        <li>+64 958 248 966</li>
                        <li>Social media</li>
                    </ul>
                </div>
            </div>
            <div className="p-6 flex items-center flex-col lg:flex-row lg:gap-12 gap-3.5">
                <div className="flex items-center gap-3.5">
                    <RiFacebookLine size={35}  className="bg-primary text-white rounded-full p-2.5"/> 
                    <RiInstagramLine size={35} className="bg-white text-black rounded-full p-2.5" /> 
                    <RiYoutubeLine size={35} className="bg-white text-black rounded-full p-2.5" /> 
                </div>
                <span className="text-sm">Copyright 2023 Dscode | All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer