'use client';
import React from "react";
import { motion } from 'framer-motion';
import { Users, Code2, Award, Star } from 'lucide-react';

const stats = [
  { icon: <Users />, value: '10K+', label: 'Happy Clients' },
  { icon: <Code2 />, value: '150+', label: 'Projects Completed' },
  { icon: <Award />, value: '25+', label: 'Awards Won' },
  { icon: <Star />, value: '99%', label: 'Client Satisfaction' },
];

export function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-4">
                {React.cloneElement(stat.icon, { className: 'w-8 h-8' })}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}