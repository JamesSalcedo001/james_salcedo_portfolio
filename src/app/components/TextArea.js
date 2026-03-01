export default function TextArea({ label, id, value, onChange, placeholder, rows = 4, ...props }) {
    return (
        <label className="block">
            <span className="text-sm font-medium text-neutral-700">{label}</span>
            <textarea 
                className="mt-2 w-full rounded-lg border border-neutral-200 shadow px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-200 resize-y"
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                {...props}
            />
        </label>
    )
}