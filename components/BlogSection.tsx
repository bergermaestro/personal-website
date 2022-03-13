import Image from 'next/image'
import BackgroundImage from '../public/images/projects-background.png'
import BlogCard from "./BlogCard"
import SolidButton from './Buttons/SolidButton'

const BlogSection = ({posts, sectionInfo, sectionNumber}: {posts:any, sectionInfo:any, sectionNumber:string}) => {
    
    return (
        <div className="flex flex-col md:flex-row items-center">

        {/* Left Section */}
        <div className="bg-default-900 basis-1/2">
            <div className="px-3 sm:px-8 py-12 space-y-4 bg-[url('../public/images/blog-background.png')] bg-contain bg-no-repeat bg-opacity-30">
            <h4 className="uppercase text-xl tracking-wider">{sectionInfo[parseInt(sectionNumber)].Name}</h4>
            <h2 className="font-bold text-4xl">{sectionInfo[parseInt(sectionNumber)].Title}</h2>
            <p className='md:w-3/4 text-md md:text-lg lg:text-base'>{sectionInfo[parseInt(sectionNumber)].Summary}</p>
            <SolidButton text={sectionInfo[parseInt(sectionNumber)].ButtonText} path="./blog"/>
            </div>
        </div>
       
       {/* Right Section */}
        <div className='basis-1/2'>
          {/* loop over the posts and show them */}
            {posts && posts.data.slice(0,2).map((post:any) => (
              // <div key={post.id}>
              //   <h2>{post.attributes.title}</h2>
              // </div>
              <div key={post.id} >
                <BlogCard title={post.attributes.title} summary={post.attributes.summary} image={post.attributes.Image.data.attributes.url} slug={"blog/" + post.attributes.Slug}/>
                <div className='h-6'/>
              </div>

            ))}

        </div>
      
      
      </div>
    )
}

export default BlogSection
