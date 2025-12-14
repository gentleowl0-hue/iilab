import React from 'react';
import Section from './ui/Section';
import { UploadCloud, PhoneCall, BrainCircuit, CheckCircle, Users } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <UploadCloud size={24} />,
      title: "Загрузка базы",
      desc: "Или подключение входящей линии"
    },
    {
      icon: <PhoneCall size={24} />,
      title: "Звонок",
      desc: "Робот звонит или принимает вызов"
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "ИИ Анализ",
      desc: "Речь распознаётся и анализируется"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Фиксация",
      desc: "Результаты и записи в CRM"
    },
    {
      icon: <Users size={24} />,
      title: "Передача",
      desc: "Лиды передаются в отдел продаж"
    }
  ];

  return (
    <Section className="bg-slate-900 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Как iiLab превращает звонки в результат
        </h2>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-slate-700 -z-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-primary-400 mb-6 shadow-xl">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;