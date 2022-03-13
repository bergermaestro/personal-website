import GalleryCard from './GalleryCard'
import SolidButton from './Buttons/SolidButton'

const GallerySection = ({posts, sectionInfo, sectionNumber}: {posts:any, sectionInfo:any, sectionNumber:string}) => {
    
    return (
        <div className="flex flex-col md:flex-row items-center">


       
       {/* Left Section */}
        <div className='basis-1/2'>
            <GalleryCard images={posts}/>
        </div>

        {/* Right Section */}
        <div className="bg-default-900 basis-1/2">
            <div className="px-3 sm:px-8 py-12 space-y-4 bg-[url('../public/images/gallery-background.png')] bg-contain bg-no-repeat bg-opacity-30">
                <h4 className="uppercase text-xl tracking-wider">{sectionInfo[parseInt(sectionNumber)].Name}</h4>
                <h2 className="font-bold text-4xl">{sectionInfo[parseInt(sectionNumber)].Title}</h2>
                <p className='md:w-3/4 text-md md:text-lg lg:text-base'>{sectionInfo[parseInt(sectionNumber)].Summary}</p>
                <SolidButton text={sectionInfo[parseInt(sectionNumber)].ButtonText} path="https://www.instagram.com/itsmattberger/"/>
            </div>
        </div>
      
      </div>
    )
}

export default GallerySection
