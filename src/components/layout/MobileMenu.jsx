// ═══════════════════════════════════════
//  MobileMenu — قائمة الموبايل
// ═══════════════════════════════════════

"use client";

import { useLang }      from "@/context/LangContext";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import Button           from "@/components/ui/Button";

export default function MobileMenu({ open, onClose, navLinks }) {
  const { t, currentLang, setCurrentLang } = useLang();

  return (
    // الغطاء الكامل (overlay) — يظهر أو يختفي حسب open
    <div className={`
      fixed inset-0 z-50 bg-light
      flex flex-col items-center justify-center gap-8
      transition-all duration-300
      ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
    `}>

      {/* زر الإغلاق */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-2xl bg-transparent border-none cursor-pointer text-dark"
      >
        ✕
      </button>

      {/* مبدّل اللغة */}
      <LanguageSwitcher current={currentLang} onChange={setCurrentLang} />

      {/* الروابط */}
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="text-2xl font-semibold text-dark hover:text-primary
                     no-underline transition-colors duration-200 tracking-tight"
        >
          {link.label}
        </a>
      ))}

      {/* زر التسجيل */}
      <Button
        size="lg"
        onClick={() => {
          onClose();
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {t.nav.cta}
      </Button>
    </div>
  );
}
