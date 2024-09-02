import { ReactNode } from "react"

interface Props {
    children : ReactNode
}

const Container = ({children} : Props)=> {
    return (
        <div className="w-[90%] lg:w-[80%] mx-auto ">
            {
                children
            }
        </div>
    )
}

export default Container