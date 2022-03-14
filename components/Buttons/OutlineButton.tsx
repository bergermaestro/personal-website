import React from 'react'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'

const Button = ({text, icon, path, additionalProps, } : {text:string, icon:any, path:string, additionalProps:string}) => {
    return (
        <a href={path}>
            <div className='hover:cursor-pointer'>
                <span className={additionalProps + ' uppercase text-default-900 rounded-lg tracking-wider border border-default-900 hover:text-brandTeal hover:border-brandTeal transition-all'}>
                {icon}
                {text}</span>
            </div>
        </a>
    )
}

export default Button
