import Image from 'next/image'
import Logo from '../public/images/logo-white.svg'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-gradient-to-t from-default-900'>
            <div className='flex flex-col sm:flex-row mx-12 px-12 space-y-6 justify-between max-w-3xl md:mx-auto lg:px-0 py-16'>
                <div>
                    <div className="mb-5"><Image src={Logo}/></div>  
                    <p>Design and Coded by</p>
                    <p>Matthew Berger</p>
                    <div className="h-6"/>
                    <div className='inline'>Made with <FaHeart className='inline'/> in Toronto</div>
                </div>
                <div>
                    <h5 className="text-2xl font-bold mb-4">Get in touch!</h5>
                    <ul className='md:text-right space-y-2'>
                        <li>Instagram</li>
                        <li>Email</li>
                        <li>Twitter</li>
                        <li>Github</li>
                    </ul>  
                </div>
            </div>
        </div>
    )
}

export default Footer
