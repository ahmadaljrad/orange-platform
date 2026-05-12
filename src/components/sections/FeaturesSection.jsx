// ═══════════════════════════════════════
//  FeaturesSection — قسم الخدمات
// ═══════════════════════════════════════

"use client";

import { useLang }  from "@/context/LangContext";
import SectionLabel from "@/components/ui/SectionLabel";

// أيقونات بسيطة SVG لكل خدمة
const ICONS = [
  // ساعة — جدول مرن
  <svg key="clock" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>,
  // صاعقة — دورة مكثفة
  <svg key="bolt" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>,
  // لغات — متعدد اللغات
  <svg key="lang" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7"/>
  </svg>,
  // شخص — مدرّسون
  <svg key="person" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
  </svg>,
  // سيارة — مركبات حديثة
  <svg key="car" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1.5 1h10l1.5-1h-4z"/>
  </svg>,
  // ورقة — تحضير للامتحان
  <svg key="doc" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
  </svg>,
];

export default function FeaturesSection() {
  const { t } = useLang();

  return (
    <section id="features" className="section bg-light">
      <div className="container">

        {/* ── الرأس ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>{t.features.label}</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark tracking-tight mt-2 mb-4">
            {t.features.h2}
          </h2>
          <p className="text-mid">{t.features.p}</p>
        </div>

        {/* ── الشبكة (Grid) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-border
                         hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* الأيقونة */}
              <div className="w-11 h-11 bg-primary-soft text-primary rounded-lg
                              flex items-center justify-center mb-4">
                {ICONS[index]}
              </div>
              <h3 className="font-bold text-dark mb-2">{item.title}</h3>
              <p className="text-mid text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
