"use client";

export default function Button({ children, type = "button", ...props }) {
    return (
        <button
            type={type}
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
            {...props}
        >
            {children}
        </button>
    )
}