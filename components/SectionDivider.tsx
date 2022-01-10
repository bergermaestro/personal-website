import Image from "next/image"
import Divider1 from "../public/images/section-divider-line-1.svg";
import Divider2 from "../public/images/section-divider-line-2.svg";

const SectionDivider = ({direction} : {direction:number}) => {
    
    return (
        <div className="h-44 lg:my-24">
            <div className="hidden lg:block">
                {direction == 0
                ? <Image src={Divider1} width={3} height={1} sizes="100%"/>
                : <Image src={Divider2} width={3} height={1} sizes="100%"/>
            }
            </div>
        </div>
        // <Image src={Divider1} layout="fill" objectFit="cover" sizes="100%"/>
    )
}

export default SectionDivider
