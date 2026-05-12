// ═══════════════════════════════════════
//  Navbar — شريط التنقل العلوي
// ═══════════════════════════════════════

"use client";

import { useState, useEffect } from "react";
import { useLang }             from "@/context/LangContext";
import { useTenant }           from "@/context/TenantContext";
import LanguageSwitcher        from "@/components/ui/LanguageSwitcher";
import Button                  from "@/components/ui/Button";
import MobileMenu              from "@/components/layout/MobileMenu";

export default function Navbar() {
  const { t, currentLang, setCurrentLang } = useLang();
  const { tenant }                          = useTenant();

  // scrolled — هل المستخدم نزل للأسفل؟ (لتغيير شكل الـ navbar)
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  // راقب التمرير (scroll)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // روابط التنقل مع الـ anchor الخاص بكل قسم
  const navLinks = [
    { label: t.nav.links[0], href: "#about"        },
    { label: t.nav.links[1], href: "#features"     },
    { label: t.nav.links[2], href: "#courses"      },
    { label: t.nav.links[3], href: "#testimonials" },
    { label: t.nav.links[4], href: "#contact"      },
  ];

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-6 lg:px-12 h-16
        transition-all duration-300
        ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"}
      `}>

        {/* ── الشعار (Logo) ── */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <span className="font-bold text-lg tracking-tight">
            <span className="text-primary relative">
              {tenant?.name?.split(" ")[0] ?? "Orange"}
              {/* ورقة خضراء صغيرة */}
              <svg
                className="absolute -top-2 left-0.5 w-3 h-3 pointer-events-none"
                viewBox="0 0 24 24" fill="none"
              >
                <path
                  d="M12 3C7 3 3 8 3 13c0 3.5 2.5 6.5 6 7.5C10 18 10.5 15 12 13c1.5 2 2 5 3 7.5 3.5-1 6-4 6-7.5 0-5-4-10-9-10z"
                  fill="#3a9e3a"
                />
              </svg>
            </span>
            {" "}{tenant?.name?.split(" ").slice(1).join(" ") ?? "Fahrschule"}
          </span>
        </a>

        {/* ── روابط التنقل — تظهر فقط على الشاشات الكبيرة ── */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-mid hover:text-primary font-medium
                           no-underline transition-colors duration-200
                           border-b-2 border-transparent hover:border-primary pb-0.5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── يمين الـ Navbar ── */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher current={currentLang} onChange={setCurrentLang} />
          <Button
            size="sm"
            onClick={() => document.querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.nav.cta}
          </Button>
        </div>

        {/* ── زر الهامبرغر — يظهر فقط على الموبايل ── */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-dark rounded block" />
          <span className="w-6 h-0.5 bg-dark rounded block" />
          <span className="w-5 h-0.5 bg-dark rounded block" />
        </button>
      </nav>

      {/* ── قائمة الموبايل ── */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
