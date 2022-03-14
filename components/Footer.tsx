import Image from 'next/image'
import Logo from '../public/images/logo-white.svg'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-gradient-to-t from-default-900'>
            <div className='flex flex-col sm:flex-row px-6 md:px-12 space-y-6 justify-between max-w-3xl md:mx-auto lg:px-0 py-16'>
                <div className='flex flex-row sm:flex-col justify-between'>
                    <div className="mb-5"><Image src={Logo}/></div> 
                    <div>
                        <p>Design and Coded by</p>
                        <p>Matthew Berger</p>
                        <div className="h-6"/>
                        <div className='inline'>Made with <FaHeart className='inline'/> in Toronto</div>
                    </div> 
                </div>
                <div>
                    <h5 className="text-2xl font-bold mb-4 hidden sm:block">Get in touch!</h5>
                    <ul className='flex flex-row sm:flex-col md:text-right sm:space-y-2 justify-between mt-12 sm:mt-0'>
                    <li><a className=" hover:text-brandTeal transition-all" href="https://twitter.com/itsmattberger" target="_blank" rel="noreferrer"> Twitter</a></li>
                            <li><a className=" hover:text-brandTeal transition-all" href="https://github.com/bergermaestro" target="_blank" rel="noreferrer"> Github</a></li>
                            <li><a className=" hover:text-brandTeal transition-all" href="https://www.linkedin.com/in/matthewaberger/" target="_blank" rel="noreferrer"> LinkedIn</a></li>
                            <li><a className=" hover:text-brandTeal transition-all" href="mailto:matthew17berger@gmail.com" target="_blank" rel="noreferrer"> Email</a></li>
                    </ul>  
                </div>
            </div>
        </div>
    )
}

export default Footer
