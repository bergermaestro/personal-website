import ProjectCard from "./ProjectCard"

const ProjectSection = ({posts, sectionInfo, sectionNumber} : {posts:any, sectionInfo:string, sectionNumber:string}) => {
    
    return (
        <div className="flex flex-col">

        {/* Top Section */}
        <div>
            <h4 className="uppercase text-xl tracking-wider">{sectionInfo[parseInt(sectionNumber)].Name}</h4>
            <div className="flex flex-col space-y-4 md:flex-row pb-12 pt-3 md:space-x-4 max-w-2xl">
                <h2 className="font-bold text-4xl basis-1/2">{sectionInfo[parseInt(sectionNumber)].Title}</h2>
                <p className='text-lg lg:text-sm basis-1/2'>{sectionInfo[parseInt(sectionNumber)].Summary}</p>
        </div>
        </div>
       
       {/* Button Section */}
        <div className="flex flex-col space-y-12 lg:flex-row lg:space-x-6 items-baseline">
          {/* loop over the posts and show them */}
            {posts && posts.data.slice(0,3).map((post:any) => (
              <div key={post.id} className='basis-1/3'>
                <ProjectCard title={post.attributes.title} summary={post.attributes.summary} image={"http://localhost:1337" + post.attributes.Image.data.attributes.url} slug={"projects/" + post.attributes.slug}/>
              </div>

            ))}

        </div>
      
      
      </div>
    )
}

export default ProjectSection
