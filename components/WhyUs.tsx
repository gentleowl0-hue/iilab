import React from 'react';
import Section from './ui/Section';
import { ShieldCheck, Clock, TrendingUp, HeartHandshake } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <Section light>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Почему выбирают iiLab
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
          <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-blue-600">
            <ShieldCheck />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Комплаенс-first</h3>
            <p className="text-slate-600 text-sm">Хранение данных в РФ, полное соответствие 152-ФЗ и 230-ФЗ.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
           <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-primary-600">
            <TrendingUp />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Гибкая интеграция</h3>
            <p className="text-slate-600 text-sm">Посекундная тарификация. Легко встраиваемся в ваши процессы.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
           <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-indigo-600">
            <HeartHandshake />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">SLA 24/7</h3>
            <p className="text-slate-600 text-sm">Человечный голос, быстрый запуск, поддержка в любое время.</p>
          </div>
        </div>

         <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
           <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-orange-600">
            <TrendingUp />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Реальные кейсы</h3>
            <p className="text-slate-600 text-sm">Подтверждённые конверсии и масштабирование без потери качества.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyUs;