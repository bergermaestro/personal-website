import Image from 'next/image'
import Link from 'next/link'
import NavImage from '../public/images/logo.svg'

const Nav = () => {
    return (
            <nav className="py-6 bg-gradient-to-b from-default-900">
                <div className="max-w-5xl mx-auto flex flex-row justify-between items-center">   
                    <a href=".">
                        <Image src={NavImage}/>
                    </a>
                    <div className='flex flex-row space-x-5 uppercase '>
                        <Link href="/about"><a className='hover:text-brandTeal transition-all'>About</a></Link>
                        <Link href="/projects"><a className='hover:text-brandTeal transition-all'>Projects</a></Link>
                        <Link href="/blog"><a className='hover:text-brandTeal transition-all'>Blog</a></Link>
                    </div>
                    </div>
            </nav>
    )
}

export default Nav
