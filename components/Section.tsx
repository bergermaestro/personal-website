import Image from 'next/image'
import BackgroundImage from '../public/images/projects-background.png'
import Card from "./Card"
import Button from './Button'

const Section = () => {
    return (
        <div className="flex flex-row items-center">

        <div className="bg-default-900 basis-1/2">
            <div className="px-8 py-12 space-y-4 bg-[url('../public/images/projects-background.png')] bg-contain bg-no-repeat bg-opacity-30">
            <h4 className="uppercase text-xl tracking-wider">The Projects</h4>
            <h2 className="font-bold text-4xl">The things i've worked on</h2>
            <p className='w-3/4'>Take a look at the things I’ve learned, the mistakes I’ve made, and the 
                experiences I’ve written about during this crazy adventure</p>
            <Button text="See My Work"/>
            </div>
        </div>
       
        <div className='basis-1/2'>
          <Card/>
          <div className='h-6'/>
          <Card/>
        </div>
      
      
      </div>
    )
}

export default Section
