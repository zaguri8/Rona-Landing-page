import TextArea from "../TextArea"
import GenericSection from "./GenericSection"
import gift from '../assets/images/gifty.png'
import moran4 from '../assets/images/certifiicate.jpeg'
import moran7 from '../assets/images/moran_5_showcase.jpeg'
import hearty from '../assets/images/hearty.png'


import moran2 from '../assets/images/certifiicate.jpeg'

import { TwoPhoto } from "../App"
import ScrollAnimation from "react-animate-on-scroll"
import { Links } from "./ExternalLinks"



const SummeryTextHead = `ערכת המתנה שלי`
const SummeryText = `
כל אישה תקבל ממני ערכת מתנה עם מוצרים שווים במיוחד
`
const SummeryText15 = `המוצרים בערכה עלולים להשתנות מעת לעת בהתאם למלאי. `
const SummeryText3 = `לתיאום הכנה ללידה`
const SummeryTextEnd = `
הקורס הוא פרטי,מועבר ע"י מיילדת מוסמכת בחדר לידה .מורכב ממפגש אחד באורך של כ3 וחצי שעות, שבו אני מגיעה אליכם עד הבית.ההרשמה היא זוגית ,מומלץ לעבור את הקורס סביב שבוע 30 ביחד עם המלווה שישהה לצידך בלידה
בסיום הקורס תופק על ידי חשבונית מס -אותה ניתן להגיש לקופת החולים ולקבל החזר של עד 75% בהתאם לתנאי הקופה. באחריוח הנרשמת בלבד לוודא מול הקופה את התנאים אשר קיימים אצלה בסל ההיריון במידת הצורך תשלח אלייך תעודת ההסמכה שלי יחד עם מספר רישיון מיילדותי. התכנים אשר יועברו בקורס אינם מחליפים יעוץ רפואי .
`

export default function Section4() {
    return <>
        <GenericSection className="bg-[var(--main-color)]" id="section-5">
            <TextArea>
                <img src={gift} width={75} height={75} className=" mx-auto" />
                {/* <b className="text-[22px]">{SummeryTextHead}</b> */}
                <p className="text-[18px] font-bold">{SummeryText}</p>
                <li className="text-[16px] text-center mx-auto w-fit">{SummeryText15}</li>
                <br/>
                <img src={moran4} width={300} height={300} className=" mx-auto" style={{borderRadius:'.5rem'}} />

                <br />
                <p onClick={() => window.open(Links[1].link)} className="text-[22px] bg-[#D0B8AC] text-white font-[100] w-fit min-w-[200px] mx-auto text-center p-[4px] cursor-pointer">{SummeryText3}</p>
            </TextArea>
        </GenericSection>
    
        {/* <TwoPhoto
            p1={moran4}
            p2={moran2}
            p3={moran7}
            gridColumns={'33% 33% 33%'}
            animateIn={false}
            overlay="rgba(0,0,0,0.55)"
            speed={0.5}
            className="bg-[#F3D8C7]" /> */}
    </>
}