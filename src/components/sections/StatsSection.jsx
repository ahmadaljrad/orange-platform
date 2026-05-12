// ═══════════════════════════════════════
//  StatsSection — قسم الأرقام والإحصاءات
// ═══════════════════════════════════════

"use client";

import { useLang } from "@/context/LangContext";

export default function StatsSection() {
  const { t } = useLang();

  return (
    <section id="stats" className="bg-dark py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {t.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center px-8 py-10 border-b md:border-b-0
                         md:border-r border-white/10 last:border-0"
            >
              <div className="text-5xl font-bold text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
