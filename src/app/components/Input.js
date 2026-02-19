export default function Input({ label, id, value, onChange, placeholder, type = "text" }) {
    return (
        <label className="block">
            <span className="text-sm text-neutral-700">{label}</span>

            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-200"
            />
        </label>
    )
}