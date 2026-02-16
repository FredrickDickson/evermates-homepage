import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureParrot from './components/FeatureParrot';
import Pillars from './components/Pillars';
import FeatureCommunity from './components/FeatureCommunity';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeatureParrot />
        <Pillars />
        <FeatureCommunity />
      </main>
      <Footer />
    </div>
  );
};

export default App;