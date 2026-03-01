export default function Card({ children }) {
    return (
        <div className="rounded-xl p-6 bg-white p-5 shadow-md hover:bg-slate-50 hover:scale-102 transition delay-50 duration-500">
            {children}
        </div>
    );
}