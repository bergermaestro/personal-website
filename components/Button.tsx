import React from 'react'
import Link from 'next/link'

const Button = ({text} : {text:string}) => {
    return (
        <Link href="./blog">
            <div className='pt-4'>
                <span className='uppercase p-4 bg-white text-default-400 rounded-lg tracking-wider hover:bg-brandTeal transition-all'>{text} &rarr;</span>
            </div>
        </Link>
    )
}

export default Button
