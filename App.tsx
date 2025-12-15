import React, { useState, createContext, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Scenarios from './components/Scenarios';
import Process from './components/Process';
import Analytics from './components/Analytics';
import Results from './components/Results';
import EconomyChart from './components/EconomyChart';
import Pricing from './components/Pricing';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

// Контекст для открытия модалки из любого компонента
export const ModalContext = createContext<{ openModal: () => void }>({ openModal: () => {} });

export const useModal = () => useContext(ModalContext);

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ openModal }}>
      <div className="min-h-screen bg-white text-slate-900">
        <Header />
        <main>
          <Hero />
          <Problems />
          <Scenarios />
          <Process />
          <Analytics />
          <Results />
          <EconomyChart />
          <Pricing />
          <WhyUs />
        </main>
        <Footer />
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </ModalContext.Provider>
  );
};

export default App;