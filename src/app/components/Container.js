export default function Container({ children, size = "content" }) {
    const widths = {
        content: "max-w-7xl",
        wide: "max-w-7xl",
    }
    return (
        <div className={`mx-auto w-full px-4 sm:px-6 ${widths[size]}`}>
            {children}
        </div>
    )
}