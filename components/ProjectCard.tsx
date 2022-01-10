import Image from 'next/image'
import Link from 'next/link'
import PlaceholderImage from '../public/images/placeholder-image.png'
import OutlineButton from './Buttons/OutlineButton'
import { BsGithub } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

const ProjectCard = ({title, summary, image, slug} : {title:string, summary:string, image:any, slug:string}) => {

    console.log(image);

    return (
            <a href={"./" + slug} className='group bg-white text-default-400 rounded-lg shadow-lg flex flex-col hover:translate-y-[-1.3rem] transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none'>
                    <div className="w-full h-56 relative">
                        {/* <Image src={PlaceholderImage} objectFit='cover' className='rounded-t-lg'/> */}
                        <Image src={image} layout='fill' objectFit='cover' className='rounded-t-lg'/>
                    </div>
                <div className="p-6 basis-1/2">
                    <h3 className="text-3xl my-4 font-semibold">{title}</h3>
                    <p className="text-lg lg:text-base">{summary}</p>
                    <div className='pt-0 my-0 group-hover:pt-4 group-hover:my-5 transition-all duration-300'>
                    <OutlineButton text="View on Github" icon={<BsGithub className='inline mr-3 text-2xl'/>} additionalProps="transition-all duration-300 my-0 opacity-0 h-0 group-hover:opacity-100 group-hover:h-full group-hover:my-3 group-hover:py-3 group-hover:px-4"/>
                    </div>
                    <div className='pt-0 my-0 group-hover:pt-4 group-hover:my-5 transition-all duration-300'>
                    <OutlineButton text="View live site" icon={<RiComputerLine className='inline mr-3 text-2xl'/>} additionalProps="transition-all duration-300 my-0 opacity-0 h-0 group-hover:opacity-100 group-hover:h-full group-hover:my-6 group-hover:py-3 group-hover:px-4"/>
                    </div>
                </div>
            </a>
    )
}

export default ProjectCard
