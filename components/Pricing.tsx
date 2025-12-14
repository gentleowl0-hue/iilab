import React from 'react';
import Section from './ui/Section';

const Pricing: React.FC = () => {
  const rows = [
    { vol: "до 5 000 мин", price: "60 ₽", note: "тест или разовые кампании", highlight: false },
    { vol: "5–10 тыс. мин", price: "30 ₽", note: "стандарт", highlight: true },
    { vol: "10–20 тыс. мин", price: "26 ₽", note: "оптимум", highlight: false },
    { vol: ">20 тыс. мин", price: "20 ₽", note: "корпоративный тариф", highlight: false },
  ];

  return (
    <Section id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Прозрачные тарифы
        </h2>
        <p className="text-slate-600">Без скрытых платежей. Посекундная тарификация.</p>
      </div>

      <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-2xl shadow-lg border border-slate-200">
        <div className="grid grid-cols-3 bg-slate-50 p-6 border-b border-slate-200 font-semibold text-slate-700">
          <div>Объём</div>
          <div>Цена за минуту</div>
          <div className="text-right">Примечание</div>
        </div>
        
        <div className="divide-y divide-slate-100">
          {rows.map((row, idx) => (
            <div key={idx} className={`grid grid-cols-3 p-6 items-center ${row.highlight ? 'bg-primary-50/50' : 'hover:bg-slate-50'} transition-colors`}>
              <div className="font-medium text-slate-900">{row.vol}</div>
              <div className="text-primary-600 font-bold text-xl">{row.price}</div>
              <div className="text-right text-slate-500 text-sm md:text-base">{row.note}</div>
            </div>
          ))}
          
          <div className="grid grid-cols-3 p-6 items-center bg-slate-50">
             <div className="font-medium text-slate-900">Контакт</div>
             <div className="text-primary-600 font-bold text-lg">от 20 ₽ до 35 ₽</div>
             <div className="text-right text-slate-500">3 попытки дозвона</div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-8 bg-orange-50 border border-orange-100 rounded-lg p-4 text-center text-orange-800 text-sm font-medium">
        + Скидки на объём и долгосрочные контракты. Пилот 1–2К контактов за 3–5 дней.
      </div>
    </Section>
  );
};

export default Pricing;