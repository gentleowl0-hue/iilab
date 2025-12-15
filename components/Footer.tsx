import React from 'react';
import { useModal } from '../App';

const Footer: React.FC = () => {
  const { openModal } = useModal();
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section based on screenshot */}
        <div className="bg-black rounded-3xl p-8 md:p-16 text-center mb-16 shadow-2xl border border-slate-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Начните конвертировать лиды в деньги уже сегодня
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-2">
              Создайте свой колл-центр с ИИ за 5 минут и увеличьте продажи в 3 раза.
            </p>
            <p className="text-lg md:text-xl text-slate-300 mb-10">
              Первые 100 звонков — бесплатно.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={openModal} className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-lg text-base font-bold hover:bg-slate-200 transition-colors shadow-lg">
                Создать колл-центр за 5 минут
              </button>
              <button onClick={openModal} className="w-full sm:w-auto bg-transparent border border-slate-600 text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-white/10 hover:border-white transition-all">
                Позвонить нейросети
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 pt-8 border-t border-slate-800">
          <div>© 2025 iiLab. Все права защищены.</div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
            <a href="https://disk.yandex.ru/i/whHrNFizQJ_hJA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Политика ОПД
            </a>
            <a href="https://disk.yandex.ru/i/fuWUkAp2IDKoOQ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Публичная оферта
            </a>
            <a href="https://disk.yandex.ru/i/uvGjTbFNHlEVtA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Согласие на обработку ПД
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;