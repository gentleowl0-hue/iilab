import React from 'react';
import Section from './ui/Section';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'МФО', Robot: 5.2, CallCenter: 2.3 },
  { name: 'Недвижимость', Robot: 6.8, CallCenter: 5.7 },
  { name: 'Франшизы', Robot: 6.6, CallCenter: 4.5 },
  { name: 'Стройка', Robot: 6.5, CallCenter: 3.8 },
  { name: 'Оборудование', Robot: 5.6, CallCenter: 4.3 },
  { name: 'IT', Robot: 4.7, CallCenter: 1.4 },
];

const EconomyChart: React.FC = () => {
  return (
    <Section light>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="h-80 w-full bg-white p-4 rounded-2xl shadow-sm">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{fontSize: 10}} interval={0} angle={-25} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip cursor={{fill: '#f8fafc'}} />
              <Legend />
              <Bar dataKey="Robot" name="Ср. Конверсия Робот (%)" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="CallCenter" name="Ср. Конверсия КЦ (%)" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            До 50% экономии по сравнению с колл-центром
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1 h-full min-h-[40px] bg-primary-500 rounded-full"></div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Оплата только за реальные действия</h4>
                <p className="text-slate-600">Вы платите за минуты разговора, а не за простой операторов.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 h-full min-h-[40px] bg-primary-500 rounded-full"></div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Нет ФОТ, отпусков и текучки</h4>
                <p className="text-slate-600">Робот не болеет, не увольняется и не требует обучения.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 h-full min-h-[40px] bg-primary-500 rounded-full"></div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Быстрый запуск</h4>
                <p className="text-slate-600">Старт проекта за 3–5 дней. Прозрачная аналитика и SLA 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EconomyChart;