import React from 'react'

const Button = ({text}) => {
    return (
        <div className='pt-4'>
            <span className='uppercase p-4 bg-white text-default-400 rounded-lg tracking-wider hover:bg-brandTeal transition-all'>{text} &rarr;</span>
        </div>
    )
}

export default Button
