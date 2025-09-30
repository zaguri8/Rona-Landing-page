import GenericSection from "./GenericSection";


const AboutMe = `נעים מאוד, אני רונה -נשואה לעידן ואמא בעצמי❤️
מיילדת מוסמכת ומדריכת הכנה ללידה בגישה מתקדמת עם ידע אמיתי ופרקטי שנצבר במהלך שנים של עבודה בחדר לידה.
את הקורס פיתחתי מתוך התנסות מקצועית ועמוקה כמיילדת – וגם מתוך חוויה אישית כאישה שעברה לידה .
במפגש אחד נצייד אותך בכל מה שחשוב באמת לדעת לקראת הרגע הכי מרגש ומשמעותי בחיים שלך.
`
export default function Section1() {
    return <GenericSection className="bg-[var(--main-color)] py-8 min-h-[400px] flex justify-center items-center flex-col" id={'section-1'}>
        <p className="p-2 text-[32px] font-bold font-[Michal]">קצת עליי</p>
        <p className="max-w-[800px] text-center w-[80%] min-w-[350px] font-[Michal] text-[28px]" style={{ lineHeight: '1.7' }}>
            {AboutMe}
        </p>
    </GenericSection>
}