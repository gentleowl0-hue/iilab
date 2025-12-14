import React from 'react';
import { SectionProps } from '../../types';

const Section: React.FC<SectionProps> = ({ children, className = '', id, light = false }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${light ? 'bg-secondary-50' : 'bg-white'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;