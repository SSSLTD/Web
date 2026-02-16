'use client';

import Link from 'next/link';
import { ShieldCheck, Droplets, Phone, Globe, MessageCircle, Mail, Bot, MapPin } from 'lucide-react';
import Chatbot, { ChatbotHandle } from '@/components/Chatbot';
import BackgroundSlideshow from '@/components/BackgroundSlideshow';
import { useLanguage } from '@/lib/LanguageContext';
import { useRef } from 'react';

export default function LandingPage() {
  const { t, language, setLanguage, isRtl } = useLanguage();
  const chatbotRef = useRef<ChatbotHandle>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-8 h-24 flex items-center border-b border-gray-200 bg-white sticky top-0 z-40">
        <Link className="flex items-center justify-center" href="#">
          {/* LOGO PLACEHOLDER: Replace the img below with your actual logo file */}
          <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
          <span className={`ml-4 font-bold text-3xl hidden sm:inline-block text-gray-900 ${isRtl ? 'mr-4 ml-0' : ''}`}>
            {t('company_name')}
          </span>
        </Link>
        <nav className={`${isRtl ? 'mr-auto' : 'ml-auto'} flex items-center gap-4 sm:gap-8`}>
          <Link className="text-base font-semibold text-gray-900 hover:text-red-600 transition-colors" href="#services">
            {t('nav_services')}
          </Link>
          <Link className="text-base font-semibold text-gray-900 hover:text-red-600 transition-colors" href="#about">
            {t('nav_about')}
          </Link>
          <Link className="text-base font-semibold text-gray-900 hover:text-red-600 transition-colors" href="#contact">
            {t('nav_contact')}
          </Link>
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 transition-colors text-sm font-medium shadow-sm"
          >
            <Globe className="h-4 w-4 text-gray-600" />
            {language === 'en' ? 'العربية' : 'English'}
          </button>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full min-h-[calc(100vh-6rem)] flex items-center justify-center relative overflow-hidden">
          <BackgroundSlideshow />
          <div className="container px-4 md:px-6 relative z-10 py-12 md:py-24 lg:py-32">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white drop-shadow-lg">
                  {t('hero_title')}
                </h1>
                <p className="mx-auto max-w-[800px] text-gray-100 md:text-2xl font-medium drop-shadow-md">
                  {t('hero_desc')}
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-md bg-red-600 px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50"
                  href="#contact"
                >
                  {t('hero_cta_quote')}
                </Link>
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#services"
                >
                  {t('hero_cta_services')}
                </Link>
                <button
                  onClick={() => chatbotRef.current?.open()}
                  className="inline-flex h-11 items-center justify-center rounded-md border border-red-200 bg-red-50 px-8 py-2 text-sm font-medium text-red-700 shadow-sm transition-colors hover:bg-red-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50"
                >
                  {t('hero_cta_ask')}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">{t('services_title')}</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border border-gray-100 p-6 rounded-lg bg-slate-50 shadow-sm">
                <ShieldCheck className="h-12 w-12 text-red-600 mb-2" />
                <h3 className="text-xl font-bold text-gray-900">{t('service_fire_title')}</h3>
                <p className="text-sm text-gray-600 text-center">
                  {t('service_fire_desc')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-100 p-6 rounded-lg bg-slate-50 shadow-sm">
                <Droplets className="h-12 w-12 text-blue-600 mb-2" />
                <h3 className="text-xl font-bold text-gray-900">{t('service_pump_title')}</h3>
                <p className="text-sm text-gray-600 text-center">
                  {t('service_pump_desc')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-100 p-6 rounded-lg bg-slate-50 shadow-sm">
                <Phone className="h-12 w-12 text-green-600 mb-2" />
                <h3 className="text-xl font-bold text-gray-900">{t('service_support_title')}</h3>
                <p className="text-sm text-gray-600 text-center">
                  {t('service_support_desc')}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-12">{t('contact_title')}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
                <a 
                  href="tel:+996570070254"
                  className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="p-3 rounded-full bg-green-50 text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-900">{t('contact_call')}</h3>
                  <p className="text-sm text-gray-600 mt-1" dir="ltr">+996 57 007 0254</p>
                </a>

                <a 
                  href="https://wa.me/996570070254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="p-3 rounded-full bg-emerald-50 text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-900">{t('contact_whatsapp')}</h3>
                  <p className="text-sm text-gray-600 mt-1">WhatsApp</p>
                </a>

                <button 
                  onClick={() => chatbotRef.current?.open()}
                  className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="p-3 rounded-full bg-red-50 text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Bot className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-900">{t('contact_ai')}</h3>
                  <p className="text-sm text-gray-600 mt-1">{t('hero_cta_ask')}</p>
                </button>

                <a 
                  href="mailto:sales@strongsafetysystems.com"
                  className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="p-3 rounded-full bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-900">{t('contact_email')}</h3>
                  <p className="text-sm text-gray-600 mt-1">sales@strongsafetysystems.com</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 bg-white border-t border-gray-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col space-y-4">
              <Link className="flex items-center" href="#">
                <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
                <span className={`ml-3 font-bold text-xl text-gray-900 ${isRtl ? 'mr-3 ml-0' : ''}`}>
                  {t('company_name')}
                </span>
              </Link>
              <p className="text-sm text-gray-600">
                {t('hero_desc')}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">{t('footer_links')}</h4>
              <ul className="space-y-2">
                <li><Link href="#services" className="text-sm text-gray-600 hover:text-red-600">{t('nav_services')}</Link></li>
                <li><Link href="#about" className="text-sm text-gray-600 hover:text-red-600">{t('nav_about')}</Link></li>
                <li><Link href="#contact" className="text-sm text-gray-600 hover:text-red-600">{t('nav_contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">{t('footer_contact')}</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-red-600" />
                  <span dir="ltr" className="inline-block">+996 57 007 0254</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4 text-red-600" />
                  <span>sales@strongsafetysystems.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">{t('footer_address')}</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                  <span>{t('footer_address_val')}</span>
                </div>
                <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.581644747441!2d50.1016!3d26.4312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb66810dfb2d%3A0x372058aa49793777!2sMadinat%20Al%20Ummal%2C%20Dammam!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">{t('footer_rights')}</p>
            <div className="flex gap-6">
              <Link className="text-xs text-gray-500 hover:underline" href="#">{t('footer_terms')}</Link>
              <Link className="text-xs text-gray-500 hover:underline" href="#">{t('footer_privacy')}</Link>
            </div>
          </div>
        </div>
      </footer>
      <Chatbot ref={chatbotRef} />
    </div>
  );
}
