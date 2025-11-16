'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Fuel, Zap, Leaf, Building2, CheckCircle2, TrendingUp, Shield, Users, Award, ArrowRight, Youtube, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-green-600 to-green-800 p-2 rounded-full relative">
                  <div className="absolute inset-0 bg-red-500 rounded-full transform rotate-45 -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 w-6 h-6"></div>
                  <Fuel className="h-8 w-8 text-white relative z-10" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                    NGE
                  </span>
                  <p className="text-xs text-gray-600 font-medium">FUTURE ENERGY</p>
                </div>
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Services</a>
              <a href="#process" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Our Process</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">About Us</a>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t">
              <a href="#home" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Home</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Services</a>
              <a href="#process" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Our Process</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-green-600 font-medium">About Us</a>
              <a href="#contact" className="block py-2 text-green-600 font-medium">Contact Us</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white min-h-screen flex items-center py-24 overflow-hidden snap-start">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
        
        {/* Floating SVG Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Icon 1 - Top Left */}
          <div className="absolute top-20 left-10 lg:left-20 animate-float-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Fuel className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
            </div>
          </div>
          
          {/* Icon 2 - Top Right */}
          <div className="absolute top-32 right-10 lg:right-20 animate-float-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Zap className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
            </div>
          </div>
          
          {/* Icon 3 - Left Center */}
          <div className="absolute top-1/2 left-5 lg:left-10 -translate-y-1/2 animate-float-3 hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Leaf className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
            </div>
          </div>
          
          {/* Icon 4 - Right Center */}
          <div className="absolute top-1/2 right-5 lg:right-10 -translate-y-1/2 animate-float-4 hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Building2 className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
            </div>
          </div>
          
          {/* Icon 5 - Bottom Left */}
          <div className="absolute bottom-20 left-16 lg:left-32 animate-float-5 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Shield className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
            </div>
          </div>
          
          {/* Icon 6 - Bottom Right */}
          <div className="absolute bottom-32 right-16 lg:right-32 animate-float-6 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <TrendingUp className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
            </div>
          </div>
          
          {/* Icon 7 - Top Center Right */}
          <div className="absolute top-48 right-1/4 animate-float-7 hidden xl:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Award className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
            </div>
          </div>
          
          {/* Icon 8 - Bottom Center Left */}
          <div className="absolute bottom-40 left-1/4 animate-float-8 hidden xl:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Users className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
            </div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Trusted Facilitator for Leading Indian Oil & Gas PSUs
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Fueling Growth
              <span className="block text-white">
                ONE STATION
              </span>
              <span className="text-green-200">at a Time</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-100 max-w-4xl mx-auto leading-relaxed">
              Your Journey <span className="font-bold">CHARGED AND FUELED</span>
            </p>
            <p className="text-lg mb-10 text-green-200 max-w-3xl mx-auto">
              End-to-end solutions for setting up safe, efficient, and high-demand fuel & energy stations across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                <a href="#contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                asChild 
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6 h-auto bg-gradient-to-r from-green-500/20 to-green-600/20 hover:from-white hover:to-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn"
              >
                <a href="#contact" className="flex items-center justify-center">
                  Learn More 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">₹1-4 Cr</div>
                <div className="text-sm text-green-200">Investment Range</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">45×45</div>
                <div className="text-sm text-green-200">Land Required (sq.m)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">5+</div>
                <div className="text-sm text-green-200">Fuel Types</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-green-200">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex flex-col justify-center py-20 bg-white snap-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional fuels to cutting-edge renewable energy, we provide end-to-end solutions for every energy infrastructure need
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <CardHeader>
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Fuel className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Diesel & Petrol Stations</CardTitle>
                <CardDescription className="text-base">
                  Complete end-to-end assistance for establishing safe, compliant, and high-demand fuel stations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Legal approvals & compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Site selection & analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Infrastructure setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Operations support</span>
                  </li>
                </ul>
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-6 border-2 border-green-600 hover:border-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn"
                >
                  <a href="#contact" className="flex items-center justify-center">
                    Learn More 
                    <ChevronRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <CardHeader>
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl mb-2">CNG Stations</CardTitle>
                <CardDescription className="text-base">
                  Specialized infrastructure for eco-friendly, cost-efficient CNG dispensing stations with advanced safety systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>CNG compression systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Safety compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cost-effective solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>High-demand locations</span>
                  </li>
                </ul>
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-6 border-2 border-green-600 hover:border-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn"
                >
                  <a href="#contact" className="flex items-center justify-center">
                    Learn More 
                    <ChevronRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200">
              <CardHeader>
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl mb-2">CBG Solutions</CardTitle>
                <CardDescription className="text-base">
                  Support in building CBG plants and distribution points to promote clean, renewable, and profitable energy solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>CBG plant setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Distribution network</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Renewable energy focus</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Profitability optimization</span>
                  </li>
                </ul>
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-6 border-2 border-emerald-600 hover:border-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn"
                >
                  <a href="#contact" className="flex items-center justify-center">
                    Learn More 
                    <ChevronRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Service Card 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-200">
              <CardHeader>
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl mb-2">EV Charging Stations</CardTitle>
                <CardDescription className="text-base">
                  Future-ready electric vehicle charging infrastructure for the growing EV market in India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fast charging technology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Smart grid integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Future-proof infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Growing market demand</span>
                  </li>
                </ul>
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-6 border-2 border-yellow-500 hover:border-yellow-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn"
                >
                  <a href="#contact" className="flex items-center justify-center">
                    Learn More 
                    <ChevronRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 bg-gradient-to-b from-gray-50 to-white snap-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience, Reliability, and Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are the most trusted facilitator of multi-fuel energy infrastructure in India
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-green-600 mb-2">360°</CardTitle>
                <CardTitle className="text-xl">Complete Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From planning and legal approvals to installation and operations — we handle it all with comprehensive support
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Fuel className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-green-600 mb-2">Multi-Fuel</CardTitle>
                <CardTitle className="text-xl">Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Diesel, Petrol, CNG, CBG & EV – we cater to every energy need with excellence and industry-leading expertise
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-purple-600 mb-2">100%</CardTitle>
                <CardTitle className="text-xl">Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We ensure your setup meets all safety and government standards for smooth operations and long-term success
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-orange-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-orange-600 mb-2">Trusted</CardTitle>
                <CardTitle className="text-xl">Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strong partnerships with leading Indian Oil & Gas PSUs, trusted fuel suppliers and technology providers
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-10 w-10 text-teal-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-teal-600 mb-2">ROI</CardTitle>
                <CardTitle className="text-xl">Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Stations built to attract customers and optimize throughput for maximum returns on your investment
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-indigo-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-indigo-600 mb-2">Future</CardTitle>
                <CardTitle className="text-xl">Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sustainable solutions aligned with India's growing demand for cleaner energy and future market trends
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="min-h-screen flex flex-col justify-center py-20 bg-white snap-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              From Concept to Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured, step-by-step process to ensure your station is ready quickly and profitably
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200"></div>
            
            <Card className="relative hover:shadow-xl transition-all">
              <CardHeader>
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4 shadow-lg">
                  1
                </div>
                <CardTitle className="text-xl mb-2">Select Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Choose the energy solution that best fits your needs from our comprehensive range: Diesel, Petrol, CNG, CBG, or EV Charging
                </p>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all">
              <CardHeader>
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4 shadow-lg">
                  2
                </div>
                <CardTitle className="text-xl mb-2">Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Arrange a detailed meeting with our expert team to discuss your project requirements, investment capacity, and business goals
                </p>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all">
              <CardHeader>
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4 shadow-lg">
                  3
                </div>
                <CardTitle className="text-xl mb-2">Site Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive location analysis, demand forecasting, ROI estimation, and feasibility study for your project
                </p>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all">
              <CardHeader>
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4 shadow-lg">
                  4
                </div>
                <CardTitle className="text-xl mb-2">Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete setup from approvals to operations, ensuring compliance, safety, and profitability for long-term success
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white relative overflow-hidden snap-start">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Journey <span className="block mt-2">CHARGED AND FUELED</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle2 className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-sm text-white/90">Easy-to-use interface</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Shield className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-sm text-white/90">Round-the-clock support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Zap className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-sm text-white/90">High-power fast charging</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
              <a href="#contact">
                ENQUIRE NOW
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              asChild 
              className="relative overflow-hidden bg-gradient-to-r from-white/20 via-white/30 to-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-10 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group/btn border-white/50 hover:border-white"
            >
              <a href="#contact" className="flex items-center justify-center relative z-10">
                <Phone className="mr-2 h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center py-20 bg-white snap-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">About Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About NGE Petroleum</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                NGE Petroleum is a leading facilitator for fuel and energy station setup across India. As a trusted partner to leading Indian Oil & Gas PSUs, we provide comprehensive end-to-end solutions for entrepreneurs, businesses, and organizations looking to tap into India's fast-growing fuel & energy sector.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to quality, compliance, and profitability ensures that every project we undertake is built for long-term success. From traditional fuel stations to cutting-edge EV charging infrastructure, we're powering India's energy future with sustainable, multi-fuel solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Building2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Industry Expertise</h4>
                    <p className="text-gray-600">Years of experience in energy infrastructure with proven track record of successful projects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Sustainable Focus</h4>
                    <p className="text-gray-600">Committed to clean and renewable energy solutions aligned with India's sustainability goals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Trusted Partnerships</h4>
                    <p className="text-gray-600">Strong relationships with leading Indian Oil & Gas PSUs and technology providers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-200 h-96 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20"></div>
                <div className="text-center p-8 relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="bg-green-600 rounded-full p-6">
                      <Building2 className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-800 text-xl font-bold mb-1">NGE</p>
                  <p className="text-gray-600 font-medium">FUTURE ENERGY</p>
                  <p className="text-gray-500 mt-2">Facilitating Energy Solutions</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 snap-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <Badge className="mb-4">Contact Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's turn your energy business idea into reality. Our team is ready to assist you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  id="contact-form"
                  name="contact-form"
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setSubmitStatus({ type: null, message: '' });

                    const formData = new FormData(e.currentTarget);
                    const data = {
                      fullName: formData.get('fullName'),
                      email: formData.get('email'),
                      phone: formData.get('phone'),
                      serviceInterest: formData.get('serviceInterest'),
                      message: formData.get('message'),
                    };

                    try {
                      const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                      });

                      const result = await response.json();

                      if (response.ok) {
                        setSubmitStatus({ 
                          type: 'success', 
                          message: 'Thank you for your inquiry! We will get back to you within 24 hours.' 
                        });
                        // Reset form
                        (e.target as HTMLFormElement).reset();
                        
                        // Track form submission with Google Ads
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          (window as any).gtag('event', 'form_submit', {
                            'event_category': 'contact',
                            'event_label': 'contact_form_submission',
                            'value': 1
                          });
                          // Track conversion
                          (window as any).gtag('event', 'conversion', {
                            'send_to': 'AW-17731117963',
                            'event_category': 'lead',
                            'event_label': 'contact_form'
                          });
                        }
                      } else {
                        setSubmitStatus({ 
                          type: 'error', 
                          message: result.error || 'Something went wrong. Please try again.' 
                        });
                      }
                    } catch (error) {
                      setSubmitStatus({ 
                        type: 'error', 
                        message: 'Failed to submit form. Please try again later.' 
                      });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                >
                  <div>
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      id="full-name"
                      name="fullName"
                      type="text" 
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      required
                      autoComplete="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label htmlFor="service-interest" className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                    <select 
                      id="service-interest"
                      name="serviceInterest"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="Diesel & Petrol Station">Diesel & Petrol Station</option>
                      <option value="CNG Station">CNG Station</option>
                      <option value="CBG Plant">CBG Plant</option>
                      <option value="EV Charging Station">EV Charging Station</option>
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Schedule">Schedule</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project requirements, location, and investment capacity..."
                    />
                  </div>
                  {submitStatus.type && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div>
              <Card className="mb-6 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-4 mr-4">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <p className="text-gray-600 text-lg">+91 8800599662</p>
                      <p className="text-sm text-gray-500 mt-1">Monday - Saturday, 9AM - 6PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-4 mr-4">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <p className="text-gray-600 text-lg">info@ngepetroleum.com</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-4 mr-4">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Location</h4>
                      <p className="text-gray-600">F-433 Sector-63</p>
                      <p className="text-gray-600">Noida, Uttar Pradesh 201301</p>
                      <p className="text-gray-600">India</p>
                      <p className="text-sm text-gray-500 mt-1">Serving customers nationwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600 font-medium">Monday - Friday</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600 font-medium">Saturday</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Sunday</span>
                      <span className="font-semibold text-gray-500">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Fuel className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xl font-bold block">NGE</span>
                  <span className="text-sm text-gray-400">FUTURE ENERGY</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Powering India with sustainable energy solutions. Facilitating multi-fuel energy infrastructure across the nation.
              </p>
              <p className="text-gray-400 text-sm">
                <strong>Website:</strong> www.ngepetroleum.com
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Diesel & Petrol Stations</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">CNG Stations</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">CBG Solutions</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">EV Charging Stations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                &copy; 2025 NGE Petroleum. All rights reserved.
              </p>
              <div className="flex space-x-4 items-center">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
