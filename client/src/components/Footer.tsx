import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <>
            <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
                <img width={150} src={assets.logo} alt="" />
                <p className='flex-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Developer Debargha | All right reserved.</p>
                <div className='flex gap-1'>
                    <img width={40} src={assets.facebook_icon} alt="" />
                    <img width={40} src={assets.twitter_icon} alt="" />
                    <img width={40} src={assets.google_plus_icon} alt="" />
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <h1 className='text-center mb-2.5'>Devloped with ❤️ by Debargha Mondal</h1>
            </div>

        </>


    )
}

export default Footer
