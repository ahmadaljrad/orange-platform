// ═══════════════════════════════════════
//  TestimonialsSection — آراء الطلاب
// ═══════════════════════════════════════

"use client";

import { useLang }  from "@/context/LangContext";
import SectionLabel from "@/components/ui/SectionLabel";

export default function TestimonialsSection() {
  const { t } = useLang();

  return (
    <section id="testimonials" className="section bg-dark">
      <div className="container">

        {/* ── الرأس ── */}
        <div className="text-center mb-12">
          <SectionLabel>{t.testimonials.label}</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mt-2">
            {t.testimonials.h2}
          </h2>
        </div>

        {/* ── البطاقات ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6
                         flex flex-col gap-4"
            >
              {/* النجوم */}
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* الاقتباس */}
              <blockquote className="text-white/80 text-sm leading-relaxed flex-1">
                {item.text}
              </blockquote>

              {/* معلومات الطالب */}
              <div className="flex items-center gap-3">
                {/* Avatar — أول حرفين من الاسم */}
                <div className="w-9 h-9 rounded-full bg-primary flex items-center
                                justify-center text-white text-xs font-bold shrink-0">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{item.name}</div>
                  <div className="text-white/40 text-xs">{item.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
