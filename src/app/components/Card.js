export default function Card({ children }) {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            {children}
        </div>
    );
}