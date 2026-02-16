import React from 'react';
import { Timer, Target, Zap } from 'lucide-react';

const Pillars: React.FC = () => {
  const features = [
    {
      icon: <Timer className="h-8 w-8 text-gray-700" />,
      title: "Train Your Mind Daily",
      description: "Have fun through micro learning to meet your learning goals.",
    },
    {
      icon: <Target className="h-8 w-8 text-gray-700" />,
      title: "Learn Fast",
      description: "Get there faster through smaller steps of incremental learning.",
    },
    {
      icon: <Zap className="h-8 w-8 text-gray-700" />,
      title: "Complete a Mission",
      description: "Undertake a quest to practice problem-solving in challenging environments.",
    },
  ];

  return (
    <section className="bg-blue-50/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-4 rounded-lg transition-colors hover:bg-white hover:shadow-sm">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;