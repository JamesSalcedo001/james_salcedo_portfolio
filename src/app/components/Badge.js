export default function Badge({ children }) {
    return (
        <span className="inline-flex mr-1 mb-1 items-center rounded-md px-2 py-1 text-xs text-gray-500 bg-gray-200 shadow">
            {children}
        </span>
    )
}