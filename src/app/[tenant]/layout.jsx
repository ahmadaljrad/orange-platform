// ═══════════════════════════════════════
//  [tenant]/layout.jsx — هيكل صفحة المدرسة
//
//  ما هو [tenant]؟
//  هذا "dynamic route" — يعني
//  /orange   → tenant = "orange"
//  /mercedes → tenant = "mercedes"
//  /berlin   → tenant = "berlin"
//
//  هذا الملف يشتغل على السيرفر (server)
//  يجيب بيانات المدرسة من Supabase
//  ويمررها للصفحة
// ═══════════════════════════════════════

import { notFound }       from "next/navigation";
import { getTenant }      from "@/lib/getTenant";
import { TenantProvider } from "@/context/TenantContext";
import { LangProvider }   from "@/context/LangContext";

export default async function TenantLayout({ children, params }) {
  // params.tenant = اسم النطاق الفرعي من الـ URL
  const tenant = await getTenant(params.tenant);

  // لو المدرسة ما موجودة — أظهر صفحة 404
  if (!tenant) notFound();

  return (
    // TenantProvider يوفر بيانات المدرسة لكل component داخله
    <TenantProvider tenant={tenant}>
      {/* LangProvider يوفر النصوص واللغة الحالية */}
      <LangProvider defaultLang="de">
        {children}
      </LangProvider>
    </TenantProvider>
  );
}
