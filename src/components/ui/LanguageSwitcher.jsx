// ═══════════════════════════════════════
//  LanguageSwitcher — مبدّل اللغة
//  يظهر في الـ Navbar وفي قائمة الموبايل
//
//  Props:
//  ┌──────────┬──────────────────────────────────────┐
//  │ current  │ اللغة الحالية: "de" أو "en" أو "ar"  │
//  │ onChange │ function تشتغل لما المستخدم يغير اللغة│
//  └──────────┴──────────────────────────────────────┘
// ═══════════════════════════════════════

import clsx from "clsx";

// اللغات المتاحة — لاحقاً ستجي من إعدادات المدرسة في Supabase
const LANGUAGES = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export default function LanguageSwitcher({ current, onChange }) {
  return (
    <div className="flex gap-1 p-1 bg-black/5 rounded-lg">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onChange(lang.code)}
          className={clsx(
            // كلاسات مشتركة
            "px-3 py-1.5 rounded-md text-xs font-bold tracking-wider transition-all duration-200",
            // اللغة النشطة (active)
            lang.code === current
              ? "bg-primary text-white shadow-sm"
              : "text-mid hover:text-dark"
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
