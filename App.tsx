import React from 'react';
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

const App: React.FC = () => {
  return (
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
    </div>
  );
};

export default App;