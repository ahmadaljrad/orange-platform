// ═══════════════════════════════════════
//  layout.jsx — الهيكل الجذري (Root Layout)
//
//  هذا الملف يلفّ كل صفحة في المشروع
//  مكان الـ metadata (عنوان الصفحة، SEO)
//  ومكان استيراد globals.css
// ═══════════════════════════════════════

import "@/styles/globals.css";

export const metadata = {
  title:       "Orange Platform — Fahrschule Management",
  description: "Moderne Fahrschul-Plattform für professionelle Fahrschulen",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
