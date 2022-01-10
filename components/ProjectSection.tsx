import ProjectCard from "./ProjectCard"

const ProjectSection = ({posts, sectionInfo, sectionNumber}) => {
    
    return (
        <div className="flex flex-col">

        {/* Top Section */}
        <div>
            <h4 className="uppercase text-xl tracking-wider">{sectionInfo[parseInt(sectionNumber)].Name}</h4>
            <div className="flex pb-12 pt-3 space-x-4 max-w-2xl">
                <h2 className="font-bold text-4xl basis-1/2">{sectionInfo[parseInt(sectionNumber)].Title}</h2>
                <p className='text-sm basis-1/2'>{sectionInfo[parseInt(sectionNumber)].Summary}</p>
        </div>
        </div>
       
       {/* Button Section */}
        <div className='flex space-x-6'>
          {/* loop over the posts and show them */}
            {posts && posts.data.slice(0,3).map((post) => (
              <div key={post.id} >
                <ProjectCard title={post.attributes.title} summary={post.attributes.summary} image={"http://localhost:1337" + post.attributes.Image.data.attributes.url} slug={post.attributes.Slug}/>
              </div>

            ))}

        </div>
      
      
      </div>
    )
}

export default ProjectSection