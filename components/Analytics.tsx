import React from 'react';
import Section from './ui/Section';
import { Check } from 'lucide-react';

const Analytics: React.FC = () => {
  const features = [
    "Онлайн-доступ к звонкам, транскриптам, статусам",
    "Умная аналитика: дозвон, лид, конверсия, стоимость",
    "Интеграция с AmoCRM, Bitrix24, 1C, Telegram",
    "Можно корректировать сценарии без кода"
  ];

  return (
    <Section id="analytics" light>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Всё под контролем в одном окне
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Отслеживайте эффективность звонков в реальном времени. Полная прозрачность и детальные отчеты.
          </p>

          <ul className="space-y-4">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-primary-600" />
                </div>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Abstract representation of Dashboard */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-2">
           <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 space-y-6">
              {/* Header mockup */}
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                 <div className="flex gap-4">
                    <div className="h-4 w-24 bg-slate-200 rounded"></div>
                    <div className="h-4 w-24 bg-slate-200 rounded"></div>
                 </div>
                 <div className="h-8 w-8 bg-slate-200 rounded-full"></div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-4">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                       <div className="h-3 w-16 bg-slate-100 rounded mb-2"></div>
                       <div className="h-6 w-12 bg-primary-100 rounded"></div>
                    </div>
                 ))}
              </div>

              {/* Chart Mockup */}
              <div className="bg-white p-4 rounded-lg shadow-sm h-64 flex items-end justify-between px-4 pb-4 gap-2">
                  {[40, 60, 45, 70, 50, 80, 65, 55, 75, 60, 90, 85].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="w-full bg-primary-200 rounded-t-sm hover:bg-primary-500 transition-colors"></div>
                  ))}
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default Analytics;