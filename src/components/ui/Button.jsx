// ═══════════════════════════════════════
//  Button — زر قابل لإعادة الاستخدام
//
//  الـ Props (المعلومات اللي نمررها):
//  ┌─────────────┬──────────────────────────────────────┐
//  │ variant     │ "primary" أو "secondary" أو "outline" │
//  │ size        │ "sm" أو "md" أو "lg"                  │
//  │ onClick     │ function تشتغل عند الضغط             │
//  │ children    │ النص أو المحتوى داخل الزر            │
//  │ className   │ كلاسات إضافية إن احتجت               │
//  └─────────────┴──────────────────────────────────────┘
// ═══════════════════════════════════════

// clsx — أداة تجمع كلاسات CSS بشكل نظيف
import clsx from "clsx";

export default function Button({
  variant   = "primary",   // الشكل الافتراضي (default)
  size      = "md",
  onClick,
  children,
  className,
  type      = "button",
  disabled  = false,
}) {

  // ── أشكال الزر (Variants) ──
  const variants = {
    primary:   "bg-primary hover:bg-primary-dark text-white shadow-md",
    secondary: "bg-transparent border border-white/40 text-white hover:bg-white/10",
    outline:   "bg-transparent border border-primary text-primary hover:bg-primary-soft",
  };

  // ── أحجام الزر (Sizes) ──
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        // كلاسات مشتركة بين كل الأزرار
        "font-semibold rounded-md transition-all duration-200 cursor-pointer",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        // كلاسات حسب الـ variant والـ size
        variants[variant],
        sizes[size],
        // كلاسات إضافية من الخارج
        className
      )}
    >
      {children}
    </button>
  );
}
