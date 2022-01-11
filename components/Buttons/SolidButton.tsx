import React from 'react'
import Link from 'next/link'

const Button = ({text, path} : {text:string, path:string}) => {
    return (
        <Link href={path}>
            <div className='pt-4'>
                <span className='uppercase p-4 bg-white text-default-400 rounded-lg tracking-wider hover:bg-brandTeal transition-all'>{text} &rarr;</span>
            </div>
        </Link>
    )
}

export default Button
