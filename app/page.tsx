'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Fuel, Zap, Leaf, Building2, CheckCircle2, TrendingUp, Shield, Users, Award, ArrowRight, ChevronRight, ChevronLeft, Lightbulb, Star, Navigation2, MapPin, Volume2, VolumeX, Battery, Gauge, Wrench, Settings, Factory, Globe, Sparkles, Rocket, Target, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

// Hero slider slides data
const heroSlides = [
    {
      id: 1,
      backgroundImage: '/petrolpump.jpg',
      badge: 'Trusted Facilitator for Leading Indian Oil & Gas PSUs',
      title: 'Fueling Growth ONE STATION at a Time',
      tagline: 'Your Journey CHARGED AND FUELED',
      description: 'End-to-end solutions for setting up safe, efficient, and high-demand fuel & energy stations across India',
      primaryButton: { text: 'Get Started Today', href: '/contact' },
      secondaryButton: { text: 'Learn More', href: '/about' }
    },
    {
      id: 2,
      backgroundImage: '/petrol pump 2.jpg',
      badge: 'Leading Energy Infrastructure Solutions',
      title: 'Powering India\'s Energy Future',
      tagline: 'Innovation Meets Sustainability',
      description: 'From traditional fuels to cutting-edge renewable energy solutions, we drive the future of energy infrastructure',
      primaryButton: { text: 'Explore Services', href: '#services' },
      secondaryButton: { text: 'View Projects', href: '/projects' }
    },
    {
      id: 3,
      backgroundImage: '/ev sttion.jpg',
      badge: 'Next-Generation Energy Solutions',
      title: 'Charging Ahead with EV Infrastructure',
      tagline: 'Electrifying Mobility Across India',
      description: 'Comprehensive EV charging station solutions to support India\'s transition to sustainable transportation',
      primaryButton: { text: 'Discover EV Solutions', href: '#services' },
      secondaryButton: { text: 'Contact Us', href: '/contact' }
    },
    {
      id: 4,
      backgroundImage: '/WhatsApp Image 2025-11-17 at 15.57.48_e9e98d8b.jpg',
      badge: 'Your Trusted Energy Partner',
      title: 'Building Tomorrow\'s Energy Network',
      tagline: 'Excellence in Every Station',
      description: 'Comprehensive support from site selection to operations, ensuring success at every step of your energy journey',
      primaryButton: { text: 'Start Your Project', href: '/contact' },
      secondaryButton: { text: 'Learn More', href: '/about' }
    }
  ];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? heroSlides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
    );
  };
  const services = [
    {
      id: 1,
      title: 'Diesel & Petrol Stations',
      description: 'Complete end-to-end assistance for establishing safe, compliant, and high-demand fuel stations',
      image: '/petrolpump.jpg',
      icon: Fuel,
      iconColor: 'text-green-600',
      bgGradient: 'from-green-100 to-green-200',
      borderColor: 'border-green-200',
      buttonGradient: 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
      buttonBorder: 'border-green-600 hover:border-green-700',
      features: [
        'Legal approvals & compliance',
        'Site selection & analysis',
        'Infrastructure setup',
        'Operations support'
      ]
    },
    {
      id: 2,
      title: 'CNG Stations',
      description: 'Specialized infrastructure for eco-friendly, cost-efficient CNG dispensing stations with advanced safety systems',
      image: '/petrol pump 2.jpg',
      icon: Leaf,
      iconColor: 'text-green-600',
      bgGradient: 'from-green-100 to-green-200',
      borderColor: 'border-green-200',
      buttonGradient: 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
      buttonBorder: 'border-green-600 hover:border-green-700',
      features: [
        'CNG compression systems',
        'Safety compliance',
        'Cost-effective solutions',
        'High-demand locations'
      ]
    },
    {
      id: 3,
      title: 'CBG Solutions',
      description: 'Support in building CBG plants and distribution points to promote clean, renewable, and profitable energy solutions',
      image: '/WhatsApp Image 2025-11-17 at 15.57.48_e9e98d8b.jpg',
      icon: Leaf,
      iconColor: 'text-emerald-600',
      bgGradient: 'from-emerald-100 to-emerald-200',
      borderColor: 'border-emerald-200',
      buttonGradient: 'from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800',
      buttonBorder: 'border-emerald-600 hover:border-emerald-700',
      features: [
        'CBG plant setup',
        'Distribution network',
        'Renewable energy focus',
        'Profitability optimization'
      ]
    },
    {
      id: 4,
      title: 'EV Charging Stations',
      description: 'Future-ready electric vehicle charging infrastructure for the growing EV market in India',
      image: '/ev sttion.jpg',
      icon: Zap,
      iconColor: 'text-yellow-600',
      bgGradient: 'from-yellow-100 to-yellow-200',
      borderColor: 'border-yellow-200',
      buttonGradient: 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700',
      buttonBorder: 'border-yellow-500 hover:border-yellow-600',
      features: [
        'Fast charging technology',
        'Smart grid integration',
        'Future-proof infrastructure',
        'Growing market demand'
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Background music setup
  useEffect(() => {
    // Audio file path - user should add their audio file to public folder with this name
    // Supported formats: mp3, wav, ogg, m4a
    const audioFile = '/bgm.mp3'; // Change this to your audio file name in public folder
    
    const audioElement = new Audio(audioFile);
    audioElement.loop = true;
    audioElement.volume = 0.3; // Set volume to 30%
    
    // Handle audio loading
    audioElement.addEventListener('canplay', () => {
      setAudio(audioElement);
    });
    
    audioElement.addEventListener('error', () => {
      console.log('Background music file not found. Please add an audio file to the public folder as:', audioFile);
    });
    
    // Preload the audio
    audioElement.load();

    return () => {
      audioElement.pause();
      audioElement.src = '';
    };
  }, []);

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((error) => {
          console.log('Audio play failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background Music Control */}
      {audio && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:border-green-500"
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        >
          {isPlaying ? (
            <Volume2 className="h-6 w-6 text-gray-700 hover:text-green-600" />
          ) : (
            <VolumeX className="h-6 w-6 text-gray-700 hover:text-green-600" />
          )}
        </button>
      )}
      <Header />

      {/* Dynamic Hero Slider Section */}
      <section id="home" className="relative min-h-screen overflow-hidden snap-start">
        {/* Slider Container */}
        <div className="relative w-full h-screen">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-700/90 via-green-800/90 to-green-900/90"></div>
              <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
              
              {/* Decorative Floating SVG Icons - Evenly Distributed */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Grid Layout - Evenly Distributed Icons */}
                {/* Row 1 - Top */}
                <div className="absolute top-[10%] left-[8%] opacity-25 animate-float">
                  <Fuel className="h-8 w-8 lg:h-12 lg:w-12 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[12%] left-[25%] opacity-20 animate-float-slow hidden md:block">
                  <Battery className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[10%] left-[42%] opacity-20 animate-float-reverse hidden lg:block">
                  <Gauge className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[12%] left-[58%] opacity-20 animate-float hidden lg:block">
                  <Award className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[10%] left-[75%] opacity-25 animate-float-slow hidden md:block">
                  <Zap className="h-8 w-8 lg:h-12 lg:w-12 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[12%] left-[92%] opacity-20 animate-float-reverse hidden xl:block">
                  <Sparkles className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>

                {/* Row 2 */}
                <div className="absolute top-[25%] left-[5%] opacity-20 animate-float-reverse hidden md:block">
                  <Leaf className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[28%] left-[20%] opacity-20 animate-float hidden lg:block">
                  <Wrench className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[25%] left-[38%] opacity-15 animate-float-slow hidden xl:block">
                  <Rocket className="h-5 w-5 lg:h-8 lg:w-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[28%] left-[55%] opacity-15 animate-float-reverse hidden xl:block">
                  <Target className="h-5 w-5 lg:h-8 lg:w-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[25%] left-[72%] opacity-20 animate-float hidden lg:block">
                  <Factory className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[28%] left-[88%] opacity-20 animate-float-slow hidden md:block">
                  <Building2 className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>

                {/* Row 3 - Middle */}
                <div className="absolute top-[45%] left-[10%] opacity-20 animate-float hidden lg:block">
                  <Settings className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[48%] left-[28%] opacity-15 animate-float-reverse hidden xl:block">
                  <Lightbulb className="h-5 w-5 lg:h-8 lg:w-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[45%] left-[45%] opacity-15 animate-float-slow hidden xl:block">
                  <Activity className="h-5 w-5 lg:h-8 lg:w-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[48%] left-[62%] opacity-15 animate-float hidden xl:block">
                  <CheckCircle2 className="h-5 w-5 lg:h-8 lg:w-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[45%] left-[78%] opacity-20 animate-float-reverse hidden lg:block">
                  <Globe className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[48%] left-[95%] opacity-20 animate-float-slow hidden xl:block">
                  <Star className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>

                {/* Row 4 */}
                <div className="absolute top-[65%] left-[8%] opacity-20 animate-float-slow hidden md:block">
                  <Shield className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[68%] left-[22%] opacity-20 animate-float hidden lg:block">
                  <Users className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[65%] left-[40%] opacity-15 animate-float-reverse hidden xl:block">
                  <Navigation2 className="h-5 w-5 lg:h-8 lg:w-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[68%] left-[57%] opacity-15 animate-float hidden xl:block">
                  <MapPin className="h-5 w-5 lg:h-8 lg:w-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[65%] left-[75%] opacity-20 animate-float-slow hidden lg:block">
                  <TrendingUp className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[68%] left-[90%] opacity-20 animate-float-reverse hidden md:block">
                  <Fuel className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>

                {/* Row 5 - Bottom */}
                <div className="absolute bottom-[15%] left-[12%] opacity-25 animate-float hidden lg:block">
                  <Battery className="h-8 w-8 lg:h-12 lg:w-12 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute bottom-[12%] left-[30%] opacity-20 animate-float-reverse hidden md:block">
                  <Zap className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute bottom-[15%] left-[48%] opacity-20 animate-float-slow hidden lg:block">
                  <Award className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute bottom-[12%] left-[65%] opacity-20 animate-float hidden md:block">
                  <Leaf className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute bottom-[15%] left-[82%] opacity-25 animate-float-reverse hidden lg:block">
                  <Factory className="h-8 w-8 lg:h-12 lg:w-12 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute bottom-[12%] left-[95%] opacity-20 animate-float-slow hidden xl:block">
                  <Building2 className="h-6 w-6 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 h-full flex items-center py-24">
                <div className="text-center w-full">
                  <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                    {slide.badge}
                  </Badge>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-4 text-green-300 max-w-4xl mx-auto leading-relaxed font-semibold">
                    {slide.tagline}
                  </p>
                  <p className="text-lg mb-10 text-white/90 max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto rounded-lg font-semibold">
                      <a href={slide.primaryButton.href}>
                        {slide.primaryButton.text}
                        <ArrowRight className="ml-2 h-5 w-5 inline" />
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      asChild 
                      className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 h-auto rounded-lg font-semibold"
                    >
                      <a href={slide.secondaryButton.href} className="flex items-center justify-center">
                        {slide.secondaryButton.text}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="text-3xl font-bold mb-1 text-white">₹1-4 Cr</div>
                      <div className="text-sm text-white/90">Investment Range</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="text-3xl font-bold mb-1 text-white">45×45</div>
                      <div className="text-sm text-white/90">Land Required (sq.m)</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="text-3xl font-bold mb-1 text-white">5+</div>
                      <div className="text-sm text-white/90">Fuel Types</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="text-3xl font-bold mb-1 text-white">100%</div>
                      <div className="text-sm text-white/90">Compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30 text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30 text-white"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-white w-12 h-3'
                  : 'bg-white/40 w-3 h-3 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex flex-col justify-center py-20 bg-white snap-start w-full overflow-visible">
        <div className="w-full px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional fuels to cutting-edge renewable energy, we provide end-to-end solutions for every energy infrastructure need
            </p>
          </div>
          
          {/* Full Screen Carousel with Centered Card */}
          <div className="relative w-full overflow-visible">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:border-green-500"
              aria-label="Previous service"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700 hover:text-green-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:border-green-500"
              aria-label="Next service"
            >
              <ChevronRight className="h-6 w-6 text-gray-700 hover:text-green-600" />
            </button>

            {/* Carousel Container */}
            <div className="flex items-center justify-center gap-4 px-16 py-8 min-h-[650px] overflow-visible">
              {/* Render exactly 5 cards: left2, left, center, right, right2 */}
              {Array.from({ length: 5 }, (_, positionIndex) => {
                const offset = positionIndex - 2; // -2, -1, 0, 1, 2
                const serviceIndex = (currentIndex + offset + services.length) % services.length;
                const service = services[serviceIndex];
                const IconComponent = service.icon;
                const isCenter = positionIndex === 2;
                const isLeft = positionIndex === 1;
                const isRight = positionIndex === 3;
                const isLeft2 = positionIndex === 0;
                const isRight2 = positionIndex === 4;

                return (
                  <Card
                    key={`card-${positionIndex}-${service.id}`}
                    className={`group hover:shadow-xl transition-all duration-700 ease-in-out border-2 overflow-visible flex-shrink-0 ${
                      isCenter
                        ? 'w-[420px] scale-110 z-10 shadow-2xl border-green-500 my-4'
                        : isLeft || isRight
                        ? 'w-[260px] scale-95 opacity-85 z-5'
                        : isLeft2 || isRight2
                        ? 'w-[220px] scale-85 opacity-65 z-0'
                        : 'w-[220px] scale-75 opacity-0 pointer-events-none'
                    }`}
                    style={{
                      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div className={`relative w-full overflow-hidden transition-all duration-700 ${isCenter ? 'h-64' : isLeft || isRight ? 'h-44' : 'h-36'}`}>
                      <Image 
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <CardHeader>
                      <div className={`bg-gradient-to-br ${service.bgGradient} ${isCenter ? 'w-20 h-20' : isLeft || isRight ? 'w-18 h-18' : 'w-14 h-14'} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 ease-in-out`}>
                        <IconComponent className={`${isCenter ? 'h-10 w-10' : isLeft || isRight ? 'h-9 w-9' : 'h-7 w-7'} ${service.iconColor} transition-all duration-500`} />
                      </div>
                      <CardTitle className={`${isCenter ? 'text-3xl' : isLeft || isRight ? 'text-xl' : 'text-lg'} mb-2 transition-all duration-500`}>{service.title}</CardTitle>
                      <CardDescription className={`${isCenter ? 'text-lg' : isLeft || isRight ? 'text-sm' : 'text-xs'} transition-all duration-500`}>
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className={`space-y-2 mb-4 ${isCenter ? 'text-base' : isLeft || isRight ? 'text-sm' : 'text-xs'} text-gray-600 transition-all duration-500`}>
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className={`${isCenter ? 'h-5 w-5' : isLeft || isRight ? 'h-4 w-4' : 'h-3 w-3'} text-green-600 mr-2 mt-0.5 flex-shrink-0 transition-all duration-500`} />
                            <span className="transition-all duration-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        asChild 
                        className={`w-full bg-gradient-to-r ${service.buttonGradient} text-white font-semibold ${isCenter ? 'py-7 text-lg' : isLeft || isRight ? 'py-5 text-base' : 'py-4 text-sm'} border-2 ${service.buttonBorder} shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 group/btn`}
                      >
                        <a href="/contact" className="flex items-center justify-center">
                          Learn More 
                          <ChevronRight className={`${isCenter ? 'h-6 w-6' : isLeft || isRight ? 'h-5 w-5' : 'h-4 w-4'} ml-2 group-hover/btn:translate-x-1 transition-transform duration-500 ease-in-out`} />
                        </a>
                </Button>
              </CardContent>
            </Card>
                );
              })}
            </div>
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

      {/* Career & Locator Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 bg-white snap-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Panel - Career Opportunities */}
            <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-2xl overflow-hidden min-h-[500px] flex items-center">
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
              <div className="relative z-10 w-full px-8 py-12 text-white">
                <div className="mb-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mb-6">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Explore Opportunities At NGE Energy
                </h2>
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold transition-all duration-300"
                >
                  <a href="/careers">
                    APPLY NOW
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Panel - Fuel Station Locator */}
            <div 
              className="relative bg-gradient-to-br from-green-500 via-green-600 to-teal-600 rounded-2xl overflow-hidden min-h-[500px] flex items-center"
              style={{
                backgroundImage: 'url(/petrolpump.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 via-green-600/90 to-teal-600/90"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              <div className="relative z-10 w-full px-8 py-12 text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  NGE Fuel Station Locator
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                  Find the nearest petrol pump and plan your route
                </p>
                <Button 
                  size="lg" 
                  asChild
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 bg-transparent text-lg px-8 py-6 h-auto font-semibold transition-all duration-300"
                >
                  <a href="/locator">
                    KNOW MORE
                  </a>
                </Button>
              </div>
              
              {/* Navigation Icon */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 opacity-80">
                <div className="relative w-64 h-64">
                  <svg 
                    className="w-full h-full text-white" 
                    viewBox="0 0 400 300" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Curved S-shaped arrow */}
                    <path
                      d="M 50 250 Q 100 200, 150 150 Q 200 100, 250 150 Q 300 200, 350 150"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    {/* Arrow head pointing right */}
                    <path
                      d="M 330 150 L 350 140 L 350 160 Z"
                      fill="currentColor"
                    />
                    {/* Location pin at the end */}
                    <circle cx="350" cy="150" r="20" fill="currentColor" />
                    <circle cx="350" cy="150" r="8" fill="#10b981" />
                  </svg>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
