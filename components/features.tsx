'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, Zap } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Modern Development',
    description: 'Built with Next.js 14 and TypeScript for robust applications.',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Responsive Design',
    description: 'Fully responsive layouts that work perfectly on all devices.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Performance First',
    description: 'Optimized for speed with modern best practices.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <p className="mt-4 text-gray-600">
            Everything you need to build modern web applications
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}