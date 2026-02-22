export default function Container({ children, size = "content" }) {
    const widths = {
        content: "max-w-3xl",
        wide: "max-w-9xl",
    }
    return (
        <div className={`mx-auto w-full px-4 ${widths[size]}`}>
            {children}
        </div>
    )
}