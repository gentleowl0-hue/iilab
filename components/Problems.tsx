import React from 'react';
import Section from './ui/Section';
import { PhoneOff, DollarSign, Frown, Clock } from 'lucide-react';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: <PhoneOff className="w-8 h-8 text-primary-600" />,
      title: "40–70% звонков без ответа",
      desc: "Менеджеры не успевают обрабатывать все входящие вызовы, теряя потенциальных клиентов."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary-600" />,
      title: "Колл-центры дорогие",
      desc: "Высокие затраты на ФОТ, налоги и офис. Непрозрачная работа и человеческий фактор."
    },
    {
      icon: <Frown className="w-8 h-8 text-primary-600" />,
      title: "Скриптовые роботы раздражают",
      desc: "Низкая конверсия из-за неестественного голоса и неспособности поддержать диалог."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: "Ручные обзвоны — долгие",
      desc: "Низкая скорость обработки базы. Менеджеры быстро выгорают на холодных звонках."
    }
  ];

  return (
    <Section>
      <div className="mb-16 max-w-3xl">
        <h4 className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">Проблема</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Почему компании теряют клиентов на звонках
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {problems.map((item, idx) => (
          <div key={idx} className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300">
            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
              <div className="text-primary-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Problems;