import Image from 'next/image'
import Link from 'next/link'
import PlaceholderImage from '../public/images/placeholder-image.png'

const BlogCard = ({title, summary, image, slug}) => {
    return (
            <a href={"./" + slug} className='bg-white text-default-400 rounded-lg shadow-lg flex flex-col md:flex-row transition transform hover:-translate-y-[0.25rem] hover:-translate-x-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'>
                <div className='basis-5/12 bg-default-400'>
                    <div className="w-full h-full relative bg-default-400">
                        <Image src={image} layout='fill' objectFit='cover' className='rounded-l-lg'/>
                    </div>
                </div>
                <div className="p-6 basis-7/12">
                <span className='tracking-wider bg-brandTeal rounded-lg my-2 px-2 py-1'>lifestyle</span>
                <h3 className="text-3xl my-4 font-semibold">{title}</h3>
                <p className="text-lg lg:text-base">{summary}</p>
                </div>
            </a>
    )
}

export default BlogCard
