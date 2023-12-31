import TextArea from "../TextArea"
import GenericSection from "./GenericSection"

import bottle from '../assets/images/bottle.png'
import heart from '../assets/images/heart.svg'


export default function ImpotantToKnow() {
    return <GenericSection className="bg-[var(--main-pink)]">
        <TextArea className="lg:w-[90%] ">
            <div className="flex flex-col items-center justify-center" id="section-4">
                <p className="text-[2rem]">מה חשוב לדעת ?</p>
            </div>
            <br />
            <div className="important-to-know text-center">

                <div className="flex flex-col items-center justify-center">
                    <img src={bottle} width={60} />
                    <b>מתווה הקורס</b>
                    <span className="text-[17px]">הקורס הוא פרטי, מועבר באופן ישיר ע"י רונה
                        מיילדת מוסמכת בחדר לידה.</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={bottle} width={60} />
                    <b>מבנה הקורס</b>
                    <span className="text-[17px]">
                        הקורס מורכב ממפגש אחד באורך של כ 4 - 3 שעות,
                        מומלץ לשריין מקום בקורס מבעוד מועד החל משבוע 20.
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img src={bottle} width={60} />
                    <b className="text-[18px]">מתי מומלץ לעבור את הקורס?</b>
                    <span className="text-[17px]">
                        סביב שבוע 30 להריון
                        ועד רגע הלידה.
                    </span>
                </div>

              
                <div className="flex flex-col items-center justify-center">
                    <img src={bottle} width={60} />
                    <b className="text-[18px]"> עם מי נרשמים?</b>
                    <span className="text-[17px]">ההרשמה לקורס היא זוגית, כל יולדת תבחר את המלווה שלה, 
                        מומלץ לעבור את הקורס יחד עם המלווה שישהה לצידך בלידה.
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img src={bottle} width={60} />
                    <b className="text-[18px]">איפה זה קורה?</b>
                    <span className="text-[17px]">
                        נפגשים אצלכם בבית.
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center lg:py-4 special-col">
                    <img src={bottle} width={60} />
                    <b className="text-[18px]">מה העלות ?</b>
                    <span className="text-[17px]">
                    ₪1400
                        עם אפשרות לתשלום במזומן/העברה בנקאית וגם בביט.
                        בסיום הקורס תופק על ידי חשבונית מס - אותה ניתן להגיש לקופת החולים/ביטוחים פרטיים ולקבל החזר של עד 75% בהתאם לתנאי הביטוח.
                    </span>
                </div>
            </div>
            <br />
            <div className="w-full flex flex-col justify-start  gap-2 lg:w-[50%]">
                <li className="text-[14px] grow-[1] text-start pl-0">באחריות הנרשמת בלבד לוודא מול המבטח את התנאים אשר קיימים אצלה בסל ההיריון.</li>
                <li className="text-[14px] grow-[1] text-start pl-0">במידת הצורך תשלח אלייך תעודת ההסמכה שלי יחד עם מספר רישיון מיילדותי.</li>
                <li className="text-[14px] grow-[1] text-start pl-0">התכנים אשר יועברו בקורס אינם מחליפים יעוץ רפואי .</li>
            </div>
        </TextArea>
    </GenericSection>
}