import GenericSection from "./GenericSection";


const AboutMe = `קוראים לי רונה עזריה, מיילדת מוסמכת ומדריכת קורסי הכנה ללידה.
בעלת ותק של כ6 שנים בעולם הרפואה, לפני שהפכתי למיילדת עבדתי בתור אחות במחלקה לרפואה דחופה ,שם צברתי נסיון בעבודה במצבי חירום דבר שתרם לפיתוח המיומנות שלי כמיילדת בחדר לידה ,
תכני הקורס נבנו על סמך הפרקטיקה בשטח  בזכות נשים רבות שטיפלתי בהן וזוגות שהכנתי לקראת הלידה.
`
export default function Section1() {
    return <GenericSection className="bg-[var(--main-color)] py-8 min-h-[400px] flex justify-center items-center flex-col" id={'section-1'}>
        <p className="p-2 text-[32px] font-bold font-[Michal]">קצת עליי</p>
        <p className="max-w-[800px] text-center w-[80%] min-w-[350px] font-[Michal] text-[28px]" style={{ lineHeight: '1.7' }}>
            {AboutMe}
        </p>
    </GenericSection>
}