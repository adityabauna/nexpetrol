'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Leaf, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb 
        items={[
          { label: 'HOME', href: '/' },
          { label: 'ABOUT US', href: '/about' }
        ]}
      />
      
      {/* About Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About NGE Petroleum</h1>
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

      <Footer />
    </div>
  );
}

