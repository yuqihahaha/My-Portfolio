import { NAV_ITEMS } from "../data/portfolioData";

export default function Navigation({ active }) {
  return (
    <nav className="fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 rounded-full border border-white/70 bg-white/80 px-3 py-2 shadow-lg backdrop-blur md:block">
      <div className="flex gap-1">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              active === item.id
                ? "bg-sky-600 text-white"
                : "text-slate-600 hover:bg-sky-100"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
