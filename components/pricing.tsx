'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    features: [
      'Up to 5 pages',
      'Basic SEO optimization',
      'Mobile responsive',
      'Contact form',
      '1 month support'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$99',
    features: [
      'Up to 10 pages',
      'Advanced SEO optimization',
      'Mobile responsive',
      'Custom forms',
      'Analytics integration',
      '3 months support'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: '$199',
    features: [
      'Unlimited pages',
      'Premium SEO optimization',
      'Mobile responsive',
      'Custom functionality',
      'Advanced analytics',
      'Priority support',
      'Custom integrations'
    ],
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-blue-600 text-white shadow-xl scale-105'
                  : 'bg-white border shadow-lg'
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-500'}>
                  /month
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-2 ${
                      plan.highlighted ? 'text-blue-100' : 'text-blue-600'
                    }`} />
                    <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}