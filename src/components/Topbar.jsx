import { useEffect, useState } from "react"
import menu from '../assets/images/menu.svg'
import ExternalLinks from '../sections/ExternalLinks'
import { motion, useAnimate } from "framer-motion"
export default function Topbar() {
    const [scope, animate] = useAnimate()
    const [open, setOpen] = useState(window.innerWidth > 500)

    useEffect(() => {
        if (open) {
            animate("div#nav-items", { opacity: 1, height: 'fit-content' })
            animate("div#nav-items-container", { backgroundImage: 'linear-gradient(45deg, #F2C7CB, #F3D8C7)', boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' })
        } else {
            animate("div#nav-items", { opacity: 0, height: 0 })
            animate("div#nav-items-container", { backgroundImage: 'none', boxShadow: 'none' })
        }
    }, [open])

    return <motion.nav ref={scope} className="flex flex-col min-h-[40px] h-full md:h-fit justify-between items-center fixed w-full z-[10000] md:flex-row" >
        <motion.div className="relative rounded-md w-fit min-w-[230px] h-full md:h-fit p-2 min-h-[52px] grid ml-auto md:w-[98%] md:m-2 md:ml-3" id="nav-items-container">
            <motion.div id="nav-items" className="w-fit flex flex-col gap-2 md:w-full md:grid md:grid-cols-5 mt-2  md:my-auto md:gap-0 ">
                <a onClick={() => window.innerWidth < 700 && setOpen(false)} className=" text-[black] text-[16px] pr-[48px] md:pr-[55px] hover:text-[black] block w-full " href="#section-1">קצת עליי</a>
                <a onClick={() => window.innerWidth < 700 && setOpen(false)} className=" text-[black]  text-[16px]  pr-[48px] md:pr-[55px] hover:text-[black] block w-max" href="#section-2">מה לומדים בקורס</a>
                <a onClick={() => window.innerWidth < 700 && setOpen(false)} className=" text-[black] text-[16px]  pr-[48px] md:pr-[55px] hover:text-[black] block w-max" href="#section-4">חשוב לדעת</a>
                <a onClick={() => window.innerWidth < 700 && setOpen(false)} className=" text-[black]  text-[16px] pr-[48px] md:pr-[55px] hover:text-[black] block w-max" href="#section-5">ערכת מתנה שלי</a>
                <a onClick={() => window.innerWidth < 700 && setOpen(false)} className=" text-[black]  text-[16px] pr-[48px] md:pr-[55px] hover:text-[black] block w-max" href="#section-7">לקוחות מרוצים</a>
                {(open) && <div className="md:hidden mx-auto mt-4 w-full translate-x-[-.5rem]"><ExternalLinks /></div>}
            </motion.div>
            <span className="absolute right-[8px] top-[8px] cursor-pointer" onClick={() => setOpen((o) => !o)}>
                <img width={20} height={20} src={menu} />
                <span className="text-[12px] translate-y-[2px] block">{open ? "סגור" : 'ניווט'}</span>
            </span>
        </motion.div>
    </motion.nav>
}