import GenericSection from "./GenericSection";
import logo from '../assets/images/logo.png'
import TextArea from "../TextArea";
import FloatingImage from "../components/FloatingImage";
import rona from '../assets/images/rona.png'

const Welcome1 =`היי לך, מזל טוב ( :`
const Welcome2 = `איזה כיף שאת כאן ומתעניינת בקורס הכנה ללידה שלי.`
const Welcome3 = `הקורס הינו פרטי ומורכב ממפגש אחד ישר ולעניין`
const Welcome4 = `שמסכם את הכל ובעיקר ייתן לך ולמלווה שלך את כל הכלים הנדרשים לחווית לידה הכי טובה שאפשר`
const Welcome5 = `אז המון בהצלחה, מחכה לך.`
export default function Section1p5() {
    return <GenericSection
        className=" bg-[var(--second-brown)] py-8 min-h-[200px] flex justify-start items-center flex-col">
        <img src={logo} width={200} className="lg: max-w-[50%]" />
        <TextArea className="font-[Michal] text-[28px]">
            {Welcome1}
            <br/>
            {Welcome2}
            <br/>
            {Welcome3}
            <br/>
            {Welcome4}
            <br/>
            {Welcome5}
        </TextArea>
     
    </GenericSection>
}