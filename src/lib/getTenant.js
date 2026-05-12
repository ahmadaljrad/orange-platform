// ═══════════════════════════════════════
//  getTenant.js — جيب بيانات المدرسة
//
//  هذه الدالة (function) تأخذ اسم النطاق الفرعي
//  (subdomain) مثل "mercedes" وترجع كل بيانات
//  المدرسة من قاعدة البيانات
// ═══════════════════════════════════════

import { supabase } from "@/lib/supabase";

export async function getTenant(subdomain) {

  // ── اجلب بيانات المدرسة من جدول tenants ──
  const { data: tenant, error } = await supabase
    .from("tenants")
    .select(`
      id,
      name,
      subdomain,
      hero_image,
      about_image,
      map_embed_url,
      tenant_themes (
        primary,
        primary_dark,
        primary_soft,
        dark,
        font
      )
    `)
    .eq("subdomain", subdomain)   // ابحث بالـ subdomain
    .single();                     // نريد سجل واحد فقط

  // لو فيه خطأ أو ما لقينا المدرسة
  if (error || !tenant) {
    return null;
  }

  // أعد البيانات بشكل منظّم
  return {
    id:            tenant.id,
    name:          tenant.name,
    subdomain:     tenant.subdomain,
    hero_image:    tenant.hero_image,
    about_image:   tenant.about_image,
    map_embed_url: tenant.map_embed_url,
    // الثيم — نأخذ أول سجل من tenant_themes
    theme:         tenant.tenant_themes?.[0] ?? null,
  };
}
