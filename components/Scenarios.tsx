import React from 'react';
import Section from './ui/Section';
import { Database, Zap, PhoneIncoming } from 'lucide-react';

const Scenarios: React.FC = () => {
  return (
    <Section id="scenarios" light>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Один робот — три сценария
        </h2>
        <p className="text-slate-600 text-lg">
          Гибкая настройка под задачи вашего бизнеса
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Database className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Спящая база</h3>
            <p className="text-slate-600">Реактивация старых клиентов, проведение опросов, возврат интереса к продукту или услуге.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
            <Zap className="w-8 h-8 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Холодная база</h3>
            <p className="text-slate-600">Лидогенерация, квалификация потенциальных клиентов, автоматическая запись в CRM.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center shrink-0">
            <PhoneIncoming className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Входящие звонки</h3>
            <p className="text-slate-600">Умный оператор 24/7, маршрутизация вызовов, стратегия "0 пропусков".</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Scenarios;