// ═══════════════════════════════════════
//  SectionLabel — العنوان الصغير
//  الخط الصغير اللي يظهر فوق كل h2
//  مثال:  ── ÜBER UNS
//
//  Props:
//  ┌──────────┬──────────────────┐
//  │ children │ النص             │
//  └──────────┴──────────────────┘
// ═══════════════════════════════════════

export default function SectionLabel({ children }) {
  return (
    <div className="section-label">
      {children}
    </div>
  );
}
