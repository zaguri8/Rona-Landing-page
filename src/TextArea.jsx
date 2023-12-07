export default function TextArea({ children, width = 350, className = "" }) {
    return <p className={`text-center lg:max-w-[1000px] lg:w-[80%]  md:max-w-[900px] md :w-[80%]  sm: w-[90%] ` + className} style={{ lineHeight: '1.7' }}>
        {children}
    </p>
}