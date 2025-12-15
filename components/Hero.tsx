import React from 'react';
import Section from './ui/Section';
import { Phone, ArrowRight, Play } from 'lucide-react';
import { useModal } from '../App';

const Hero: React.FC = () => {
  const { openModal } = useModal();
  return (
    <Section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-6 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
            AI Voice Robot
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
            Интеллектуальный <span className="text-primary-600">голосовой ИИ-робот</span> для входящих и исходящих звонков
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Автоматизируйте общение с клиентами: холодные, спящие и входящие базы — без человеческого фактора, 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={openModal} className="bg-slate-900 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10">
              Создать робота за 5 минут
              <ArrowRight size={18} />
            </button>
            <button onClick={openModal} className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-base font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <Play size={18} className="fill-slate-700" />
              Послушать демо
            </button>
          </div>
          
          <div className="mt-8 text-sm text-slate-400">
            Первые 100 звонков — бесплатно
          </div>
        </div>

        {/* Right Content - Abstract Gradient + Chat UI */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary-400 to-blue-300 rounded-[2rem] opacity-30 blur-3xl -z-10"></div>
          
          <div className="bg-gradient-to-br from-primary-500 to-indigo-600 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

            <div className="relative z-10 bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                  ii
                </div>
                <div>
                  <div className="font-semibold text-slate-900">iiLab Assistant</div>
                  <div className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Онлайн
                  </div>
                </div>
                <div className="ml-auto text-xs text-slate-400">09:41</div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-100 rounded-2xl rounded-tl-none p-4 text-sm text-slate-700">
                  Здравствуйте! Звоню по поводу вашего запроса на консультацию. Удобно ли сейчас поговорить?
                </div>
                <div className="bg-primary-50 rounded-2xl rounded-tr-none p-4 text-sm text-slate-700 ml-auto max-w-[90%]">
                  Да, расскажите подробнее о ваших тарифах.
                </div>
                <div className="bg-slate-100 rounded-2xl rounded-tl-none p-4 text-sm text-slate-700">
                  Отлично! У нас прозрачная тарификация. Например, пакет "Стандарт" начинается от 30₽ за минуту. Отправить презентацию в WhatsApp?
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 animate-bounce">
                  <Phone className="text-white" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;