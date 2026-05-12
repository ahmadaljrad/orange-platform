// ═══════════════════════════════════════
//  Footer — الفوتر
// ═══════════════════════════════════════

"use client";

import { useLang }   from "@/context/LangContext";
import { useTenant } from "@/context/TenantContext";

export default function Footer() {
  const { t }      = useLang();
  const { tenant } = useTenant();

  // روابط التنقل مع الـ anchor
  const navLinks = [
    { label: t.nav.links[0], href: "#about"        },
    { label: t.nav.links[1], href: "#features"     },
    { label: t.nav.links[2], href: "#courses"      },
    { label: t.nav.links[3], href: "#testimonials" },
    { label: t.nav.links[4], href: "#contact"      },
  ];

  return (
    <footer className="bg-dark text-white">

      {/* ── الجزء العلوي ── */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* العمود ١ — الشعار والوصف */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-lg tracking-tight">
              <span className="text-primary relative inline-block">
                {tenant?.name?.split(" ")[0] ?? "Orange"}
                {/* ورقة خضراء */}
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
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* العمود ٢ — روابط التنقل */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white/40 mb-5">
              {t.footer.cols.nav.title}
            </h4>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary text-sm
                               no-underline transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود ٣ — قانوني */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white/40 mb-5">
              {t.footer.cols.legal.title}
            </h4>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {t.footer.cols.legal.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-primary text-sm
                               no-underline transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── الشريط السفلي ── */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-white/30 text-xs">{t.footer.copyright}</p>
          <p className="text-white/20 text-xs">
            Built with Orange Platform
          </p>
        </div>
      </div>

    </footer>
  );
}
