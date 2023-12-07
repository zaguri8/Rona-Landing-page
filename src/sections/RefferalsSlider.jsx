

import TextArea from "../TextArea";
import { refferals } from "../refferals";
import { motion } from 'framer-motion'
import GenericSection from "./GenericSection";
import { useEffect, useState } from "react";
import recc from '../assets/images/recommend.png'
const RefferalSlide = ({ content }) => {
    return <div
        className="flex flex-col justify-center items-center"
    ><motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        exit={{ opacity: 0, x: -200 }}
        className="flex flex-col justify-center items-center md:min-h-[200px] reactive-text">
            <TextArea className="font-[Michal] text-[24px]">{content}</TextArea>
        </motion.div>
        <img src={recc} width={70} style={{
            filter: 'sepia(100%) saturate(100%) hue-rotate(20deg)'
        }} />
    </div>
}

export default function ReferralsSlider() {
    const [currentRef, setCurrentRef] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRef((prevRef) => (prevRef + 1) % refferals.length);
        }, 7500)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return <GenericSection className="bg-[var(--second-brown)] text-[black] my-auto">
        <b className="font-[Michal] text-[32px]">לקוחות מרוצים</b>
        <RefferalSlide key={currentRef} content={refferals[currentRef]} />
    </GenericSection>

}