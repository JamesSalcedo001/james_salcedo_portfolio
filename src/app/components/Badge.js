export default function Badge({ children }) {
    return (
        <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs text-neutral-700">
            {children}
        </span>
    )
}