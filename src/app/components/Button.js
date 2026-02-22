"use client";

export default function Button({ children, type = "button", className = "", ...props }) {
    const baseStyles = "rounded-md bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-neutral-900";
    
    return (
        <button
            type={type}
            className={baseStyles + className}
            {...props}
        >
            {children}
        </button>
    )
}