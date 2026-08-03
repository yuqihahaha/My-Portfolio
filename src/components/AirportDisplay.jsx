import { Ticket } from "lucide-react";

const ROWS = [
  ["School", "UBC"],
  ["Major", "CS + Stats"],
  ["Year", "4th"],
];

export default function AirportDisplay() {
  return (
    <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-5 py-3">
        <div className="flex items-center gap-2 text-sky-300">
          <Ticket size={18} />
          <span className="font-mono text-sm uppercase tracking-widest">Information</span>
        </div>
        <span className="rounded-full bg-emerald-400/15 px-3 py-1 font-mono text-xs text-emerald-300">
          ON TIME
        </span>
      </div>
      <div className="grid gap-px bg-slate-700 font-mono">
        {ROWS.map(([key, value]) => (
          <div key={key} className="grid grid-cols-3 bg-slate-950">
            <div className="px-4 py-4 text-xs uppercase tracking-widest text-slate-500 md:text-sm">
              {key}
            </div>
            <div className="col-span-2 px-4 py-4 text-lg font-bold text-amber-300 md:text-2xl">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
