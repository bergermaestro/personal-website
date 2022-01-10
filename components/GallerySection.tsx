import GalleryCard from './GalleryCard'
import SolidButton from './Buttons/SolidButton'

const GallerySection = ({sectionInfo, sectionNumber}) => {
    
    return (
        <div className="flex flex-col md:flex-row items-center">


       
       {/* Left Section */}
        <div className='basis-1/2'>
            <GalleryCard/>
        </div>

        {/* Right Section */}
        <div className="bg-default-900 basis-1/2">
            <div className="px-8 py-12 space-y-4 bg-[url('../public/images/gallery-background.png')] bg-contain bg-no-repeat bg-opacity-30">
                <h4 className="uppercase text-xl tracking-wider">{sectionInfo[parseInt(sectionNumber)].Name}</h4>
                <h2 className="font-bold text-4xl">{sectionInfo[parseInt(sectionNumber)].Title}</h2>
                <p className='w-3/4'>{sectionInfo[parseInt(sectionNumber)].Summary}</p>
                <SolidButton text={sectionInfo[parseInt(sectionNumber)].ButtonText}/>
            </div>
        </div>
      
      </div>
    )
}

export default GallerySection
