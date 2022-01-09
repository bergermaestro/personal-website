import Image from 'next/image'
import Link from 'next/link'
import PlaceholderImage from '../public/images/placeholder-image.png'
import OutlineButton from './Buttons/OutlineButton'
import { BsGithub } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

const ProjectCard = ({title, summary, image, slug}) => {

    console.log(image);

    return (
            <a href={"./" + slug} className='group bg-white text-default-400 rounded-lg shadow-lg flex flex-col transition transform hover:-translate-y-[0.25rem] hover:-translate-x-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'>
                <div className="">
                    {/* <Image src={PlaceholderImage} objectFit='cover' className='rounded-t-lg'/> */}
                    <Image src={image} layout='fill' objectFit='cover' className='rounded-t-lg'/>
                </div>
                <div className="p-6">
                <h3 className="text-3xl my-4 font-semibold">{title}</h3>
                <p>{summary}</p>
                <div className='hidden group-hover:inline'>
                <OutlineButton text="View on Github" icon={<BsGithub className='inline mr-3 text-2xl'/>}/>
                </div>
                <div className='hidden group-hover:inline'>
                <OutlineButton text="View live site" icon={<RiComputerLine className='inline mr-3 text-2xl'/>}/>
                </div>

                </div>
            </a>
    )
}

export default ProjectCard
