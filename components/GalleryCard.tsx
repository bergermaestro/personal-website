import Image from 'next/image'
import PlaceholderImage from '../public/images/placeholder-image.png'

const GalleryCard = () => {
    return (
            <div className='bg-white text-default-400 rounded-lg shadow-lg grid grid-cols-3 grid-rows-3 gap-3 p-3 aspect-square'>

                {/* loop over the images and show them */}
                {/* {posts && posts.data.slice(0,2).map((post) => (
                // <div key={post.id}>
                //   <h2>{post.attributes.title}</h2>
                // </div>
                <div key={post.id} >
                    <BlogCard title={post.attributes.title} summary={post.attributes.summary} image={post.attributes.image} slug={post.attributes.Slug}/>
                    <div className='h-6'/>
                </div>

                ))} */}
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>          
            </div>
    )
}

export default GalleryCard
