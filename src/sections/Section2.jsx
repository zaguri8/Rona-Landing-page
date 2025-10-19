import { Children, useState } from "react";
import TextArea from "../TextArea";
import GenericSection from "./GenericSection";
import lightb from "../assets/images/lightb.png";
import hearty from "../assets/images/hearty.png";

import bullet from "../assets/images/bullet.png";

const TextFirst = `בקורס הכנה ללידה תלמדו על תהליך הלידה -מתחילתו ועד סופו.
המטרה שלי היא פשוטה, להנגיש לך ולמלווה שלך את כל הידע הנדרש שאותו תצטרכו לרגע האמת כדי שתוכלו לחוות חווית לידה חיובית בריאה ומשמעותית ובשביל זה אני כאן לרשותכם בכל שאלה או בקשה גם בסיום הקורס
`;
const RegaLifnei = [
  "מושגים שחשוב להכיר בחדר לידה.",
  "מחיקה ופתיחה מה זה אומר/מתי עושים בדיקת פתיחה.",
  "איך תדעו שהלידה התחילה-מה מומלץ לעשות ומה פחות כדי לעזור לה להתקדם.",
  "באילו נסיבות צריך לפנות לבדיקה במיון ומתי ניתן להשאר בבית.",
  "מה הוא ציר ומה הזמן הנכון להגיע לבית החולים.",
  "ירידת מים-מה באמת חשוב לדעת ברגע שירדו המים.",
];
const DuringBirth = [
  "שלבי הלידה: השלב הלטנטי לעומת השלב פעיל ומה המשמעות של זה בלידה.",
  "אילו אמצעים עומדים לרשותך לשיכוך הכאב בזמן הצירים.",
  "כיצד תתמודדי עם הצירים בבית ובחדר לידה.",
  "תרגול תנועה ונשימה לשלב זה.",
  "טיפים חשובים למלווה שלך בלידה-מה תפקידו וכיצד הוא יכול לסייע לך.",
  "מוניטור עוברי -מה הוא בודק.",
  'אלחוש כאב ע"י אמצעים רפואיים ואיך נעבוד איתם נכון: אפידורל, גז צחוק, פטידין.',
  "התערבויות בלידה: סוגי זרוזים, סיבות לביצוע זירוז.",
  "לידת וואקום, ניתוח קיסרי.",
  "חתכים, קרעים והכנת הפרינאום ללידה.",
  "רגע הלידה: השהיית חבל הטבור, מתן הסבר מדויק מה קורה לאורך כל השלב זה, כולל מצבים חריגים שצריך להכיר.",
];

const DayAfter = [
  "מה קורה לאחר לידת התינוק.",
  "ביות חלקי, אפס הפרדה - מה ההבדלים ביניהם.",
  "טיפולי השגרה ליילוד: חיסונים, טיפולים, בדיקות,רחצה ראשונית.",
  "הנקה - כל מה שחשוב לדעת על הנקה ראשונית בחדר לידה.",
  "משכב לידה - איך מתמודדים עם הסטטוס החדש ומה חשוב להכיר בתקופה הזאת.",
  "צהבת יילודים - מה זה אומר.",
];
const Etc = `אני זמינה בשבילך באופן פרטי בכל שאלה, ליווי או הכוונה עד הלידה ולאחריה.`

const toArray = (items) => Children.toArray(items);
const toListItem = (string) => <li className="text-start py-[2px] bullet">{string}</li>;
const Title1 = `במה נתמקד ?`;
const Title2 = `מה תלמדו בקורס ?`;
export default function Section2() {
  const [open, setOpen] = useState(false);
  return (
    <GenericSection
      className=" bg-[var(--second-brown)] flex items-center justify-center"
      id={"section-2"}
    >
      <TextArea className="text-[17px]">
        <h2 className="text-[2rem] pl-[.5rem] pb-6 " id="section-3">
          {" "}
          {Title2}{" "}
        </h2>
        <TextArea className=" text-[18px] relative md:text-[20px] md:font-bold lg:w-full md:w-full sm:w-full w-full bg-[#F2C7CC] py-4 px-2 rounded-md shadow-image md:min-h-[150px]">
          {TextFirst}
          <img
            src={hearty}
            width={30}
            height={30}
            className="opacity-[0.5] translate-x-[-10px] inline"
          />
        </TextArea>
        <br />

        {/* --- Dropdown trigger --- */}
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 px-4 py-2 bg-[#F2C7CC] rounded-md font-bold"
        >
          לפרטים נוספים {open ? "▲" : "▼"}
        </button>

        <div
          className={`transition-all duration-500 overflow-hidden ${
            open ? "max-h-[2000px] mt-4" : "max-h-0"
          }`}
        >
          <div className="flex w-fit items-center justify-end translate-x-2">
            <img src={lightb} width={50} height={50} style={{ filter: "contrast(90%)" }} />
            <b className="text-[1.25rem] pl-[.5rem] w-fit ml-auto block">רגע לפני הלידה</b>
          </div>
          {toArray(RegaLifnei.map(toListItem))}
          <br />
          <br />
          <div className="flex w-fit items-center justify-end translate-x-2">
            <img src={lightb} width={50} height={50} style={{ filter: "contrast(90%)" }} />
            <b className="text-[1.25rem] pl-[.5rem] w-fit ml-auto block">בזמן הלידה</b>
          </div>
          {toArray(DuringBirth.map(toListItem))}
          <br />
          <br />
          <div className="flex w-fit items-center justify-end translate-x-2">
            <img src={lightb} width={50} height={50} style={{ filter: "contrast(90%)" }} />
            <b className="text-[1.25rem] pl-[.5rem] w-fit ml-auto block">היום שאחרי</b>
          </div>
          {toArray(DayAfter.map(toListItem))}
        </div>
        <br />
        <br />
        <b className="text-[1.25rem]">{`חשוב לדעת`}</b>
        <br />
        {Etc}
        <img
          src={hearty}
          width={25}
          height={25}
          className="opacity-[0.5] translate-x-[-10px] inline"
        />
      </TextArea>
    </GenericSection>
  );
}
