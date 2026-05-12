// ═══════════════════════════════════════
//  ContactSection — قسم التواصل
// ═══════════════════════════════════════

"use client";

import { useState }  from "react";
import { useLang }   from "@/context/LangContext";
import { useTenant } from "@/context/TenantContext";
import SectionLabel  from "@/components/ui/SectionLabel";
import Button        from "@/components/ui/Button";

export default function ContactSection() {
  const { t }      = useLang();
  const { tenant } = useTenant();

  // بيانات النموذج (form state)
  const [form, setForm] = useState({
    name: "", phone: "", email: "", course: "", message: "",
  });
  const [sent, setSent] = useState(false);

  // تحديث حقل واحد في النموذج
  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  // إرسال النموذج — لاحقاً يتصل بـ Supabase
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  // معلومات التواصل
  const infoItems = [
    { icon: "📍", ...t.contact.info.address },
    { icon: "📞", ...t.contact.info.phone   },
    { icon: "✉️", ...t.contact.info.email   },
  ];

  return (
    <section id="contact" className="section bg-light">
      <div className="container">

        {/* ── الرأس ── */}
        <div className="mb-12">
          <SectionLabel>{t.contact.label}</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark tracking-tight mt-2 mb-2">
            {t.contact.h2}
          </h2>
          <p className="text-mid">{t.contact.intro}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── النموذج (Form) ── */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* الاسم والهاتف — جنب بعض */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-dark">
                  {t.contact.fields.name}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="px-4 py-3 border border-border rounded-md text-sm
                             bg-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-dark">
                  {t.contact.fields.phone}
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="px-4 py-3 border border-border rounded-md text-sm
                             bg-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* البريد الإلكتروني */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-dark">
                {t.contact.fields.email}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="px-4 py-3 border border-border rounded-md text-sm
                           bg-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* الكورس المطلوب */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-dark">
                {t.contact.fields.course}
              </label>
              <select
                value={form.course}
                onChange={(e) => update("course", e.target.value)}
                className="px-4 py-3 border border-border rounded-md text-sm
                           bg-white focus:outline-none focus:border-primary transition-colors"
              >
                {t.courses.items.map((c) => (
                  <option key={c.title} value={c.title}>{c.title}</option>
                ))}
              </select>
            </div>

            {/* الرسالة */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-dark">
                {t.contact.fields.message}
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="px-4 py-3 border border-border rounded-md text-sm
                           bg-white focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <Button type="submit" size="lg">
              {sent ? "✓ " + t.contact.btn : t.contact.btn + " →"}
            </Button>
          </form>

          {/* ── معلومات التواصل ── */}
          <div className="flex flex-col gap-8">
            {infoItems.map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-primary-soft text-primary rounded-lg
                                flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">{item.label}</h4>
                  <p className="text-mid text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            {/* خريطة Google Maps */}
            <div className="rounded-xl overflow-hidden border border-border h-52">
              <iframe
                className="w-full h-full"
                src={tenant?.map_embed_url ?? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155413.44697931698!2d13.258823831249994!3d52.506938299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1699000000000"}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
