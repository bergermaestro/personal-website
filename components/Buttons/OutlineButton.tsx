import React from 'react'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'

const Button = ({text, icon, additionalProps} : {text:string, icon:any, additionalProps:string}) => {
    return (
        <Link href="./blog">
            <div className=''>
                <span className={additionalProps + ' uppercase text-default-900 rounded-lg tracking-wider border border-default-900 hover:text-brandTeal hover:border-brandTeal transition-all'}>
                {icon}
                {text}</span>
            </div>
        </Link>
    )
}

export default Button
