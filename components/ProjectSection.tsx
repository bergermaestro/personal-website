import Link from "next/link"
import ProjectCard from "./ProjectCard"

const ProjectSection = ({posts, sectionInfo, sectionNumber} : {posts:any, sectionInfo:any, sectionNumber:string}) => {
    
    return (
        <div className="flex flex-col">

        {/* Top Section */}
        <div>
            <h4 className="uppercase text-xl tracking-wider pb-4">{sectionInfo[parseInt(sectionNumber)].Name}</h4>
            <div className="flex flex-col md:flex-row pb-12 md:space-x-4 max-w-3xl">
                <h2 className="font-bold text-4xl basis-1/2">{sectionInfo[parseInt(sectionNumber)].Title}</h2>
                <div className="basis-1/2 md:w-3/4 text-md md:text-lg">
                  <p className='pb-4'>{sectionInfo[parseInt(sectionNumber)].Summary}</p>
                  <span className="mt-4 pt-4">
                    <Link href="./projects">SEE ALL PROJECTS &rarr;</Link>
                  </span>
                </div>
            </div>
        </div>
       
       {/* Button Section */}
        <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:space-x-6 lg:items-baseline lg:h-[33em]">
          {/* loop over the posts and show them */}
            {posts && posts.data.slice(0,3).map((post:any) => (
              <div key={post.id} className='basis-1/3'>
                {/* <ProjectCard title={post.attributes.title} summary={post.attributes.summary} image="https://res.cloudinary.com/matthewberger/image/upload/v1645503517/106691377_1682772741875942_281587236741181828_n_cf38f7951c.jpg" slug={"projects/" + post.attributes.slug}/> */}
                <ProjectCard title={post.attributes.title} summary={post.attributes.summary} image={post.attributes.Image.data.attributes.url} slug={"projects/" + post.attributes.slug} projectLinks={post.attributes.projectLinks}/>
                {/* <ProjectCard title={post.attributes.title} summary={post.attributes.summary} image={"http://localhost:1337" + post.attributes.Image.data.attributes.url} slug={"projects/" + post.attributes.slug}/> */}
              </div>

            ))}

        </div>
      
      </div>
    )
}

export default ProjectSection
