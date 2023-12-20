

export default ({ children, className = "",id }) => {
    return <div  id={id} className={"w-full py-8 min-h-[200px] flex justify-start items-center flex-col " + (className)}>
        {children}
    </div>
}