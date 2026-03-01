export default function Input({ label, id, value, onChange, placeholder, type = "text", ...props }) {
    return (
        <label className="block">
            <span className="text-sm font-medium text-neutral-700">{label}</span>

            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="mt-2 w-full bg-white rounded-lg border border-neutral-200 shadow-sm px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-200"
                {...props}
            />
        </label>
    )
}