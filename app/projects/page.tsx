'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Fuel, Zap, Leaf, MapPin, Calendar, CheckCircle2, ArrowRight, Building2, Battery, Factory } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Premium Fuel Station - Delhi NCR',
    type: 'Diesel & Petrol',
    location: 'Delhi NCR, India',
    status: 'Completed',
    year: '2024',
    image: '/petrolpump.jpg',
    description: 'State-of-the-art fuel station with 8 dispensers, convenience store, and automated car wash facility. Fully compliant with all safety and environmental regulations.',
    features: [
      '8 Fuel Dispensers',
      'Convenience Store',
      'Car Wash Facility',
      '24/7 Operations',
      'Digital Payment Systems'
    ],
    icon: Fuel
  },
  {
    id: 2,
    title: 'Multi-Fuel Station - Mumbai',
    type: 'Diesel, Petrol & CNG',
    location: 'Mumbai, Maharashtra',
    status: 'Completed',
    year: '2024',
    image: '/petrol pump 2.jpg',
    description: 'Comprehensive multi-fuel station serving both commercial and passenger vehicles. Features CNG dispensing, high-speed diesel pumps, and premium petrol options.',
    features: [
      'CNG Dispensing',
      'High-Speed Diesel',
      'Premium Petrol',
      'Truck Parking',
      'Driver Amenities'
    ],
    icon: Fuel
  },
  {
    id: 3,
    title: 'EV Charging Hub - Bangalore',
    type: 'Electric Vehicle',
    location: 'Bangalore, Karnataka',
    status: 'In Progress',
    year: '2025',
    image: '/ev sttion.jpg',
    description: 'Modern EV charging hub with 20 fast-charging stations, solar power integration, and smart grid connectivity. Designed to support the growing EV ecosystem.',
    features: [
      '20 Fast Charging Points',
      'Solar Power Integration',
      'Smart Grid Connectivity',
      'Battery Swapping',
      'Mobile App Integration'
    ],
    icon: Battery
  },
  {
    id: 4,
    title: 'Energy Complex - Hyderabad',
    type: 'Multi-Fuel & EV',
    location: 'Hyderabad, Telangana',
    status: 'Completed',
    year: '2023',
    image: '/WhatsApp Image 2025-11-17 at 15.57.48_e9e98d8b.jpg',
    description: 'Integrated energy complex combining traditional fuels, CNG, and EV charging. Features retail space, food court, and vehicle service center.',
    features: [
      'Multi-Fuel Options',
      'EV Charging Stations',
      'Retail Complex',
      'Food Court',
      'Service Center'
    ],
    icon: Factory
  },
  {
    id: 5,
    title: 'Highway Fuel Station - Jaipur',
    type: 'Diesel & Petrol',
    location: 'Jaipur, Rajasthan',
    status: 'Completed',
    year: '2023',
    image: '/petrolpump.jpg',
    description: 'Strategic highway location serving long-distance travelers. Features large parking area, restaurant, and rest facilities for drivers.',
    features: [
      'Highway Location',
      'Large Parking Area',
      'Restaurant',
      'Driver Rest Facilities',
      'Vehicle Maintenance'
    ],
    icon: Fuel
  },
  {
    id: 6,
    title: 'Urban EV Network - Pune',
    type: 'Electric Vehicle',
    location: 'Pune, Maharashtra',
    status: 'Planning',
    year: '2025',
    image: '/ev sttion.jpg',
    description: 'Network of EV charging stations across Pune city. Focus on residential and commercial areas with smart charging solutions.',
    features: [
      'City-Wide Network',
      'Smart Charging',
      'Residential Integration',
      'Commercial Hubs',
      'Renewable Energy'
    ],
    icon: Battery
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb 
        items={[
          { label: 'HOME', href: '/' },
          { label: 'PROJECTS', href: '/projects' }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Showcasing our successful fuel and energy infrastructure projects across India
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        className={
                          project.status === 'Completed' 
                            ? 'bg-green-600 text-white' 
                            : project.status === 'In Progress'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-blue-500 text-white'
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 text-white">
                        <Icon className="h-5 w-5" />
                        <span className="font-semibold">{project.type}</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.year}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {project.features.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{project.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Statistics</h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-lg text-gray-700">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-lg text-gray-700">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-lg text-gray-700">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-lg text-gray-700">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our growing list of successful projects. Let's build your energy infrastructure together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 h-auto">
              <a href="/careers">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              asChild 
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-lg px-8 py-6 h-auto"
            >
              <a href="/services">
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

