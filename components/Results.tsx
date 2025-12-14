import React from 'react';
import Section from './ui/Section';

const Results: React.FC = () => {
  const cases = [
    {
      industry: "МФО / Финансы",
      result: "9.7% конверсия в лид",
      sub: "(против 2.3% у КЦ)",
      color: "text-purple-600"
    },
    {
      industry: "Девелоперы / Недвижимость",
      result: "до 9.3% квалифицированных лидов",
      color: "text-blue-600"
    },
    {
      industry: "Такси / Транспорт",
      result: "ROI ×3 по сбору долгов",
      sub: "дозвон 37%",
      color: "text-green-600"
    },
    {
      industry: "Медицина",
      result: "Рост загрузки +10–15%",
      sub: '"0 пропусков"',
      color: "text-rose-600"
    },
    {
      industry: "B2B / Промышленность",
      result: "5–6% лидов",
      sub: "с реактивации спящей базы",
      color: "text-amber-600"
    }
  ];

  return (
    <Section id="results">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          iiLab в цифрах: реальные кейсы
        </h2>
        <p className="text-slate-600">
          Результаты наших клиентов по отраслям
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c, idx) => (
          <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
              {c.industry}
            </div>
            <div className={`text-2xl font-bold ${c.color} mb-2`}>
              {c.result}
            </div>
            {c.sub && (
              <div className="text-slate-500 font-medium">
                {c.sub}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Results;