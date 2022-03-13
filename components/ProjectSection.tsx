import ProjectCard from "./ProjectCard"

const ProjectSection = ({posts, sectionInfo, sectionNumber} : {posts:any, sectionInfo:any, sectionNumber:string}) => {
    
    return (
        <div className="flex flex-col">

        {/* Top Section */}
        <div>
            <h4 className="uppercase text-xl tracking-wider">{sectionInfo[parseInt(sectionNumber)].Name}</h4>
            <div className="flex flex-col space-y-4 md:flex-row pb-12 pt-3 md:space-x-4 max-w-2xl">
                <h2 className="font-bold text-4xl basis-1/2">{sectionInfo[parseInt(sectionNumber)].Title}</h2>
                <p className='md:w-3/4 text-md md:text-lg basis-1/2'>{sectionInfo[parseInt(sectionNumber)].Summary}</p>
        </div>
        </div>
       
       {/* Button Section */}
        <div className="flex flex-col space-y-12 lg:flex-row lg:space-x-6 lg:items-baseline lg:h-[36em]">
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
