export default function Badge({ children }) {
    return (
        <span className="inline-flex mr-1 mb-1 items-center rounded-md border px-2 py-1 text-xs text-white bg-black">
            {children}
        </span>
    )
}