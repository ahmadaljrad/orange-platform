/** @type {import('tailwindcss').Config} */
module.exports = {

  // ── أين يبحث Tailwind عن الكلاسات (classes) المستخدمة ──
  // مهم جداً — بدونه Tailwind يحذف كلاسات تحتاجها
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],

  theme: {
    extend: {

      // ── الألوان (Colors) ──
      // نربطها بمتغيراتنا بدل ما نكتب اللون مباشرة
      // هيك لما المدرسة تغير اللون — كل كلاسات Tailwind تتغير معه
      colors: {
        primary:      'var(--color-primary)',       // bg-primary / text-primary
        'primary-dark': 'var(--color-primary-dark)', // bg-primary-dark
        'primary-soft': 'var(--color-primary-soft)', // bg-primary-soft
        dark:         'var(--color-dark)',           // text-dark
        mid:          'var(--color-mid)',            // text-mid
        light:        'var(--color-light)',          // bg-light
        border:       'var(--color-border)',         // border-border
      },

      // ── الخطوط (Font Family) ──
      fontFamily: {
        body:    'var(--font-body)',     // font-body
        display: 'var(--font-display)', // font-display
        arabic:  'var(--font-arabic)',  // font-arabic
      },

      // ── الحواف المدورة (Border Radius) ──
      borderRadius: {
        sm: 'var(--radius-sm)',  // rounded-sm
        md: 'var(--radius-md)',  // rounded-md
        lg: 'var(--radius-lg)',  // rounded-lg
        xl: 'var(--radius-xl)',  // rounded-xl
      },

      // ── الظلال (Box Shadow) ──
      boxShadow: {
        sm: 'var(--shadow-sm)',  // shadow-sm
        md: 'var(--shadow-md)',  // shadow-md
        lg: 'var(--shadow-lg)',  // shadow-lg
      },

    },
  },

  plugins: [],
};
