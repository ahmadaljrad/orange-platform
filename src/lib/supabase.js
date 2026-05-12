// ═══════════════════════════════════════
//  supabase.js — إعداد الاتصال بقاعدة البيانات
//
//  هذا الملف ينشئ "عميل" (client) واحد
//  نستخدمه في كل مكان للتحدث مع Supabase
// ═══════════════════════════════════════

import { createClient } from "@supabase/supabase-js";

// هذي القيم محفوظة في ملف .env.local
// لا تكتبها مباشرة هنا — لأمان المشروع
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// تحقق — لو القيم ناقصة، أعطنا خطأ واضح
if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error(
    "❌ ملف .env.local ناقص — تأكد من وجود NEXT_PUBLIC_SUPABASE_URL و NEXT_PUBLIC_SUPABASE_ANON_KEY"
  );
}

// إنشاء العميل (client) — نستخدمه في كل الملفات
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
