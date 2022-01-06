import Image from 'next/image'
import { BsGithub, BsTwitter, BsLinkedin} from "react-icons/bs";
import HeroImage from '../public/images/hero-image.png'

const Hero = () => {
    return (
            <div className="flex flex-row mt-12">
                <div className='basis-1/2 mt-32'>
                    <h1 className='text-5xl font-crete-round mb-6 leading-[1.2]'>Hi, I'm Matthew & I'm a Full-Stack Creative</h1>
                    <p className='text-sm mr-16 leading-relaxed'> I love taking my experience in many creative areas and helping small to medium sized business build and maintain an online presence. 
                  If you would like to contact me to commission my services, or simply ask me a question, please reach out to me at my email, any of the 
                  social icons below, and failing that, I've heard that ravens work well.</p>
                        <ul className="flex flex-col lg:flex-row space-x-6 my-6">
                            <li><a className=" hover:text-brandTeal transition-all" href="https://twitter.com/itsmattberger" target="_blank" rel="noreferrer"> <BsTwitter size={25}/></a></li>
                            <li><a className=" hover:text-brandTeal transition-all" href="https://github.com/bergermaestro" target="_blank" rel="noreferrer"> <BsGithub size={25}/></a></li>
                            <li><a className=" hover:text-brandTeal transition-all" href="https://www.linkedin.com/in/matthewaberger/" target="_blank" rel="noreferrer"> <BsLinkedin size={25}/></a></li>
                        </ul>
                </div>
                <div className='basis-1/2 pl-12 mx-auto'>
                    <Image src={HeroImage} className='mx-auto'/>
                </div>
            </div>
    )
}

export default Hero