// ═══════════════════════════════════════
//  CoursesSection — قسم الكورسات
// ═══════════════════════════════════════

"use client";

import { useLang }  from "@/context/LangContext";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge        from "@/components/ui/Badge";
import Button       from "@/components/ui/Button";

export default function CoursesSection() {
  const { t } = useLang();

  return (
    <section id="courses" className="section bg-white">
      <div className="container">

        {/* ── الرأس ── */}
        <div className="mb-12">
          <SectionLabel>{t.courses.label}</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark tracking-tight mt-2">
            {t.courses.h2}
          </h2>
        </div>

        {/* ── بطاقات الكورسات ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.courses.items.map((course, index) => (
            <div
              key={index}
              className="border border-border rounded-xl p-7 flex flex-col gap-4
                         hover:border-primary hover:shadow-md transition-all duration-300"
            >
              {/* الوسم (badge) */}
              <Badge variant="soft">{course.badge}</Badge>

              {/* العنوان والوصف */}
              <div>
                <h3 className="text-xl font-bold text-dark tracking-tight mb-2">
                  {course.title}
                </h3>
                <p className="text-mid text-sm leading-relaxed">{course.body}</p>
              </div>

              {/* المعلومات السريعة (meta) */}
              <div className="flex gap-4 flex-wrap">
                {course.meta.map((item, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-xs text-mid">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {item}
                  </span>
                ))}
              </div>

              {/* زر الحجز */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => document.querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })}
              >
                {course.cta}
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
