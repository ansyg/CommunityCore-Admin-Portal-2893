import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Landmark, Users, BarChart, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'Education Services',
    description: 'Access quality education resources and learning management tools.',
  },
  {
    icon: <Landmark className="h-8 w-8" />,
    title: 'Land Services',
    description: 'Efficient property registration and land management solutions.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Community Programs',
    description: 'Engage in community activities and social development initiatives.',
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: 'Business Support',
    description: 'Resources and tools to help local businesses grow and succeed.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Safety & Security',
    description: 'Enhanced community safety through digital surveillance and reporting.',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Health Services',
    description: 'Access to healthcare information and wellness programs.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of community services designed to enhance your daily life and foster community growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Button variant="ghost" className="gap-2">
                Learn More
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;