// ═══════════════════════════════════════
//  LangContext — السياق (Context) للغة
//
//  ما هو الـ Context؟
//  بدل ما تمرر اللغة الحالية كـ prop
//  لكل component واحد واحد — الـ Context
//  يخزّنها في مكان مركزي وأي component
//  يقدر يقرأها مباشرة.
// ═══════════════════════════════════════

"use client"; // هذا الملف يشتغل في المتصفح (browser)

import { createContext, useContext, useState } from "react";

// استيراد (import) ملفات النصوص
import de from "@/content/de.json";
import en from "@/content/en.json";
import ar from "@/content/ar.json";

// جمع كل النصوص في object واحد
const CONTENT = { de, en, ar };

// ── إنشاء الـ Context ──
const LangContext = createContext(null);

// ── Provider — يلفّ الصفحة كلها ويوفر اللغة لكل component ──
export function LangProvider({ children, defaultLang = "de" }) {
  // currentLang — اللغة الحالية (state)
  const [currentLang, setCurrentLang] = useState(defaultLang);

  // t — النصوص الحالية حسب اللغة
  const t = CONTENT[currentLang];

  // isRTL — هل اللغة من اليمين لليسار؟
  const isRTL = currentLang === "ar";

  return (
    <LangContext.Provider value={{ currentLang, setCurrentLang, t, isRTL }}>
      {/* نضع lang و dir على الـ div الرئيسي */}
      <div lang={currentLang} dir={isRTL ? "rtl" : "ltr"}>
        {children}
      </div>
    </LangContext.Provider>
  );
}

// ── useLang — hook مخصص (custom hook) لقراءة اللغة ──
// أي component يكتب: const { t, currentLang } = useLang()
// ويحصل على النصوص واللغة الحالية فوراً
export function useLang() {
  const context = useContext(LangContext);

  // تحقق — لو استخدمت useLang خارج الـ Provider
  if (!context) {
    throw new Error("useLang يجب أن يُستخدم داخل LangProvider");
  }

  return context;
}
