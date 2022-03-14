import Image from 'next/image'
import Link from 'next/link'
import NavImage from '../public/images/logo.svg'

const Nav = () => {
    return (
            <nav className="py-6 bg-gradient-to-b from-default-900">
                <div className="px-6 md:px-14 lg:px-6 lg:max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">   
                    <Link href="/">
                        <Image src={NavImage}/>
                    </Link>
                    <div className='flex flex-row space-x-12 uppercase text-lg items-center'>
                        <Link href="/"><a className='hover:text-brandTeal transition-all'>Home</a></Link>
                        <Link href="/about"><a className='hover:text-brandTeal transition-all'>About</a></Link>
                        <Link href="/projects"><a className='hover:text-brandTeal transition-all'>Projects</a></Link>
                        <Link href="/blog"><a className='hover:text-brandTeal transition-all'>Blog</a></Link>
                    </div>
                    </div>
            </nav>
    )
}

export default Nav
