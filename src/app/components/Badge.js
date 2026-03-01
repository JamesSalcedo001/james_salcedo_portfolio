const DOTS = {
  // Frontend
  JavaScript: "bg-yellow-400",
  React: "bg-sky-400",
  "Next.js": "bg-sky-700",
  Tailwind: "bg-sky-500",
  TailwindCSS: "bg-sky-500",
  HTML: "bg-orange-500",
  CSS: "bg-blue-500",

  // Backend
  Ruby: "bg-rose-600",
  "Ruby on Rails": "bg-red-700",
  "REST APIs": "bg-violet-300",

  // Database
  PostgreSQL: "bg-blue-400",

  // Tools
  "Git/Github": "bg-slate-700",
  GitHub: "bg-slate-700",
  Stripe: "bg-indigo-500",
  Postman: "bg-orange-500",
  Vercel: "bg-black",
  Render: "bg-emerald-600",
  Vite: "bg-purple-400",

  // Extras from project tags
  Firebase: "bg-amber-500",
  "Express.js": "bg-gray-600",
  Redux: "bg-purple-600",
  "useContext": "bg-sky-200",
  "Active Record": "bg-red-500",
  PWA: "bg-pink-500",
  Figma: "bg-green-300",
  "Google Analytics": "bg-yellow-300",
};

export default function Badge({ children }) {
  const label = String(children);
  const dot = DOTS[label] ?? "bg-gray-400";

  return (
    <span className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200 shadow-sm">
      <span className={`h-2 w-2 rounded-full ${dot}`} />
      {label}
    </span>
  );
}