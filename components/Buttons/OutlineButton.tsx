import React from 'react'
import Link from 'next/link'

const Button = ({text} : {text:string}) => {
    return (
        <Link href="./blog">
            <div className='pt-4'>
                <span className='uppercase px-4 py-2.5 text-default-900 rounded-lg tracking-wider border border-default-900 hover:text-brandTeal hover:border-brandTeal transition-all'>{text}</span>
            </div>
        </Link>
    )
}

export default Button
