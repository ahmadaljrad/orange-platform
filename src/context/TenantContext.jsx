// ═══════════════════════════════════════
//  TenantContext — السياق (Context) للمدرسة
//
//  يخزّن بيانات المدرسة الحالية:
//  الاسم، الألوان، الشعار، اللغات المتاحة
//  ويحقن الألوان كـ CSS Variables تلقائياً
// ═══════════════════════════════════════

"use client";

import { createContext, useContext, useEffect } from "react";

const TenantContext = createContext(null);

// ── Provider ──
export function TenantProvider({ tenant, children }) {

  // لما تتغير بيانات المدرسة — حدّث الألوان في الصفحة
  useEffect(() => {
    if (!tenant?.theme) return;

    const root = document.documentElement;
    const { theme } = tenant;

    // حقن (inject) الألوان كـ CSS Variables
    root.style.setProperty("--color-primary",      theme.primary       ?? "#E8641A");
    root.style.setProperty("--color-primary-dark", theme.primary_dark  ?? "#C4510E");
    root.style.setProperty("--color-primary-soft", theme.primary_soft  ?? "#FFF5EF");
    root.style.setProperty("--color-dark",         theme.dark          ?? "#1A1410");
    root.style.setProperty("--font-body",          theme.font          ?? "'IBM Plex Sans', sans-serif");

  }, [tenant]); // يشتغل كل مرة تتغير بيانات المدرسة

  return (
    <TenantContext.Provider value={{ tenant }}>
      {children}
    </TenantContext.Provider>
  );
}

// ── useTenant — hook لقراءة بيانات المدرسة ──
export function useTenant() {
  const context = useContext(TenantContext);

  if (!context) {
    throw new Error("useTenant يجب أن يُستخدم داخل TenantProvider");
  }

  return context;
}
