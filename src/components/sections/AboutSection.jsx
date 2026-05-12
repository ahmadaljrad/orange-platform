// ═══════════════════════════════════════
//  AboutSection — قسم "عن المدرسة"
// ═══════════════════════════════════════

"use client";

import { useLang }    from "@/context/LangContext";
import { useTenant }  from "@/context/TenantContext";
import SectionLabel   from "@/components/ui/SectionLabel";

export default function AboutSection() {
  const { t }      = useLang();
  const { tenant } = useTenant();

  const aboutImg = tenant?.about_image
    ?? "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80";

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── الصورة ── */}
          <div className="relative">
            <div
              className="w-full h-80 lg:h-[480px] rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url('${aboutImg}')` }}
            />
            {/* شارة الخبرة */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-white
                            rounded-xl px-6 py-4 shadow-lg text-center">
              <strong className="block text-3xl font-bold tracking-tight">15+</strong>
              <span className="text-sm opacity-90">{t.about.badge}</span>
            </div>
          </div>

          {/* ── النص ── */}
          <div className="flex flex-col gap-6">
            <div>
              <SectionLabel>{t.about.label}</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark
                             tracking-tight leading-tight mt-2">
                {t.about.h2}
              </h2>
            </div>
            <p className="text-mid leading-relaxed">{t.about.p1}</p>
            <p className="text-mid leading-relaxed">{t.about.p2}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
