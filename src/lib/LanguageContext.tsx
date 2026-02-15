'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations = {
  en: {
    nav_services: 'Services',
    nav_about: 'About',
    nav_contact: 'Contact',
    company_name: 'Strong Safety Systems',
    hero_title: 'Expert Fire Fighting Solutions',
    hero_desc: 'Fast, reliable, and customized fire fighting and pump solutions for your safety.',
    hero_cta_quote: 'Get a Quote',
    hero_cta_services: 'Our Services',
    services_title: 'Our Services',
    service_fire_title: 'Fire Suppression',
    service_fire_desc: 'Advanced sprinkler systems and chemical suppression for all building types.',
    service_pump_title: 'Pump Systems',
    service_pump_desc: 'Installation and maintenance of high-capacity water and industrial pumps.',
    service_support_title: 'Customer Support',
    service_support_desc: 'We are available to take your calls and provide expert assistance for all your safety needs.',
    footer_rights: '© 2026 Strong Safety Systems. All rights reserved.',
    footer_terms: 'Terms of Service',
    footer_privacy: 'Privacy',
    footer_address: 'Location',
    footer_address_val: 'Madinat Al Ummal Dist., Dammam 32253, KSA',
    footer_links: 'Quick Links',
    footer_contact: 'Contact Info',
    hero_cta_ask: 'Ask a Question',
    contact_title: 'Contact Us',
    contact_call: 'Call Us',
    contact_whatsapp: 'WhatsApp',
    contact_ai: 'AI Assistant',
    contact_email: 'Email Us',
    contact_send: 'Send Message',
    chat_title: 'Safety Assistant',
    chat_welcome: 'How can we help you today?',
    chat_placeholder: 'Type your message...',
    chat_typing: 'Assistant is typing...',
  },
  ar: {
    nav_services: 'خدماتنا',
    nav_about: 'من نحن',
    nav_contact: 'اتصل بنا',
    company_name: 'انظمة السلامة القوية',
    hero_title: 'حلول متخصصة في مكافحة الحرائق والمضخات',
    hero_desc: 'حلول سريعة وموثوقة ومخصصة لمكافحة الحرائق والمضخات من أجل سلامتك.',
    hero_cta_quote: 'احصل على عرض سعر',
    hero_cta_services: 'خدماتنا',
    services_title: 'خدماتنا',
    service_fire_title: 'مكافحة الحرائق',
    service_fire_desc: 'أنظمة رش متطورة وإخماد كيميائي لجميع أنواع المباني.',
    service_pump_title: 'أنظمة المضخات',
    service_pump_desc: 'تركيب وصيانة مضخات المياه والمضخات الصناعية عالية السعة.',
    service_support_title: 'دعم العملاء',
    service_support_desc: 'نحن متاحون لاستقبال مكالماتكم وتقديم المساعدة المتخصصة لجميع احتياجات السلامة الخاصة بكم.',
    footer_rights: '© 2026 سترونج لأنظمة السلامة. جميع الحقوق محفوظة.',
    footer_terms: 'شروط الخدمة',
    footer_privacy: 'الخصوصية',
    footer_address: 'الموقع',
    footer_address_val: 'حي مدينة العمال، الدمام 32253، المملكة العربية السعودية',
    footer_links: 'روابط سريعة',
    footer_contact: 'معلومات التواصل',
    hero_cta_ask: 'اسأل سؤالاً',
    contact_title: 'اتصل بنا',
    contact_call: 'اتصل بنا',
    contact_whatsapp: 'واتساب',
    contact_ai: 'المساعد الذكي',
    contact_email: 'البريد الإلكتروني',
    contact_send: 'إرسال الرسالة',
    chat_title: 'مساعد السلامة',
    chat_welcome: 'كيف يمكننا مساعدتك اليوم؟',
    chat_placeholder: 'اكتب رسالتك...',
    chat_typing: 'المساعد يكتب...',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  const isRtl = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
