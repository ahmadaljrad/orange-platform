// ═══════════════════════════════════════
//  Badge — الوسوم الصغيرة
//  مثال: "الأكثر طلباً" فوق بطاقة الكورس
//
//  Props:
//  ┌──────────┬─────────────────────────────┐
//  │ children │ النص داخل الـ Badge         │
//  │ variant  │ "primary" أو "soft"         │
//  └──────────┴─────────────────────────────┘
// ═══════════════════════════════════════

import clsx from "clsx";

export default function Badge({ children, variant = "primary", className }) {

  const variants = {
    primary: "bg-primary text-white",
    soft:    "bg-primary-soft text-primary border border-primary/20",
  };

  return (
    <span
      className={clsx(
        "inline-block text-xs font-bold px-3 py-1 rounded-full",
        "tracking-wide uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
