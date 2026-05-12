// ═══════════════════════════════════════
//  HeroSection — القسم الرئيسي (الأول)
// ═══════════════════════════════════════

"use client";

import { useLang }   from "@/context/LangContext";
import { useTenant } from "@/context/TenantContext";
import Button        from "@/components/ui/Button";

export default function HeroSection() {
  const { t }      = useLang();
  const { tenant } = useTenant();

  // صورة الخلفية — من إعدادات المدرسة أو صورة افتراضية
  const heroBg = tenant?.hero_image
    ?? "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── خلفية الصورة ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroBg}')` }}
      />

      {/* ── طبقة التعتيم (overlay) فوق الصورة ── */}
      <div className="absolute inset-0 bg-dark/60" />

      {/* ── المحتوى ── */}
      <div className="container relative z-10 text-center px-4">

        {/* التاج الصغير فوق العنوان */}
        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20
                        text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
          {t.hero.tag}
        </div>

        {/* العنوان الرئيسي h1 */}
        <h1 className="text-4xl md:text-6xl font-bold text-white
                       tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          {t.hero.h1}
        </h1>

        {/* النص التوضيحي */}
        <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10">
          {t.hero.p}
        </p>

        {/* الأزرار */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => document.querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.hero.btn_primary}
          </Button>

          <Button
            size="lg"
            variant="secondary"
            onClick={() => document.querySelector("#courses")
              ?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.hero.btn_secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
