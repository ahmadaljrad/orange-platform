// ═══════════════════════════════════════
//  [tenant]/page.jsx — الصفحة الكاملة للمدرسة
//
//  هنا نجمع كل الـ sections مع بعض
//  هذا كل شيء — بسيط ونظيف
// ═══════════════════════════════════════

import Navbar               from "@/components/layout/Navbar";
import Footer               from "@/components/layout/Footer";
import HeroSection          from "@/components/sections/HeroSection";
import AboutSection         from "@/components/sections/AboutSection";
import StatsSection         from "@/components/sections/StatsSection";
import FeaturesSection      from "@/components/sections/FeaturesSection";
import CoursesSection       from "@/components/sections/CoursesSection";
import TestimonialsSection  from "@/components/sections/TestimonialsSection";
import ContactSection       from "@/components/sections/ContactSection";

export default function TenantPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
