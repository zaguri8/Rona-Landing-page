import TextArea from "../TextArea"
import GenericSection from "./GenericSection"
import gift from '../assets/images/gifty.png'
import moran4 from '../assets/images/moran_3.jpeg'
import moran7 from '../assets/images/moran_8_showcase.jpeg'

import moran2 from '../assets/images/certifiicate.jpeg'

import { TwoPhoto } from "../App"



const SummeryTextHead = `ערכת המתנה שלי`
const SummeryText = `
כל אישה תקבל ממני ערכת מתנה עם מוצרים שווים במיוחד
`
const SummeryText15 = `המוצרים בערכה עלולים להשתנות מעת לעת בהתאם למלאי המוצרים. `
const SummeryText2 = `בסיום הקורס אעביר רשימה מסודרת עבור התיקים שצריך לארגן לחדר לידה ולאשפוז לך ולתינוק.`
const SummeryText3 = `
מעוניינת להרשם לקורס שלי?
או סתם לשמוע עוד פרטים? לכל שאלה השאירי פרטים - 0549491179
`
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
                <li className="text-[16px] text-center w-fit mx-auto">{SummeryText15}</li>
                <li className="text-[16px] text-center w-fit mx-auto">{SummeryText2}</li>
                <br />
                <b>
                    <p className="text-[18px]">{SummeryText3}</p>
                </b>
            </TextArea>
        </GenericSection>
        <TwoPhoto
            p1={moran4}
            p2={moran2}
            p3={moran7}
            gridColumns={'33% 33% 33%'}
            animateIn={false}
            overlay="rgba(0,0,0,0.55)"
            speed={0.5}
            className="bg-[#F3D8C7]" />
    </>
}