// ═══════════════════════════════════════
//  applyTheme.js — حقن ألوان المدرسة
//
//  تأخذ object فيه ألوان المدرسة
//  وتحقنها كـ CSS Variables في الصفحة
//  النتيجة: كل الموقع يتغير لون لحاله
// ═══════════════════════════════════════

export function applyTheme(theme) {
  if (!theme) return;

  const root = document.documentElement;

  // حقن كل لون كـ CSS Variable
  if (theme.primary)      root.style.setProperty("--color-primary",      theme.primary);
  if (theme.primary_dark) root.style.setProperty("--color-primary-dark", theme.primary_dark);
  if (theme.primary_soft) root.style.setProperty("--color-primary-soft", theme.primary_soft);
  if (theme.dark)         root.style.setProperty("--color-dark",         theme.dark);
  if (theme.font)         root.style.setProperty("--font-body",          theme.font);
}
