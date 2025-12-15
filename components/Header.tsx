import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useModal } from '../App';

const Header: React.FC = () => {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo simulating the Purple iiLab logo from PDF */}
          <span className="text-3xl font-bold text-primary-600 tracking-tight">iiLab</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#scenarios" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Сценарии</a>
          <a href="#analytics" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Аналитика</a>
          <a href="#results" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Кейсы</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Тарифы</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={openModal} className="text-sm font-medium text-slate-900 hover:text-primary-600 transition-colors">
            Войти
          </button>
          <button onClick={openModal} className="bg-primary-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20">
            Попробовать бесплатно
          </button>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 flex flex-col gap-4 shadow-xl">
          <a href="#scenarios" className="text-base font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Сценарии</a>
          <a href="#analytics" className="text-base font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Аналитика</a>
          <a href="#results" className="text-base font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Кейсы</a>
          <a href="#pricing" className="text-base font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Тарифы</a>
          <div className="h-px bg-slate-100 my-2"></div>
          <button onClick={() => { openModal(); setIsMobileMenuOpen(false); }} className="bg-primary-600 text-white px-5 py-3 rounded-lg text-base font-medium w-full">
            Попробовать бесплатно
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;