import tiktok from '../assets/images/tiktok.svg'
import instagram from '../assets/images/instagram.svg'
import whatsapp from '../assets/images/whatsapp.png'
import React from 'react'

export const Links = [
    { link: "https://www.tiktok.com/@ronaazarya_midwife?_t=8htoZNvbFlR&_r=1", icon: tiktok },
    { link: "https://wa.link/fzb672", icon: whatsapp },
    { link: "https://instagram.com/ronaazarya_midwife?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr", icon: instagram },
]
export default function ExternalLinks() {
    return <div className='flex flex-row gap-6 items-center justify-between  z-[9999]'>
        {React.Children.toArray(Links.map(({ link, icon }) => <img src={icon} width={40} height={40} className=' cursor-pointer' onClick={() => window.open(link)} />))}
    </div>
}