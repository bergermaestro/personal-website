import React from 'react'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'

const Button = ({text, icon}) => {
    return (
        <Link href="./blog">
            <div className='pt-4 my-5'>
                <span className='uppercase px-4 py-2.5 text-default-900 rounded-lg tracking-wider border border-default-900 hover:text-brandTeal hover:border-brandTeal transition-all'>
                {icon}
                {text}</span>
            </div>
        </Link>
    )
}

export default Button
