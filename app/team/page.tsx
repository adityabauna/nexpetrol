'use client';

import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Shabeer Ahmad Shah',
    role: 'Business Leader',
    image: '/Shabeer Ahmed Shah .jpg',
    description: 'Known for his strategic foresight, analytical acumen, and people-first leadership style, Shabeer fosters a culture of performance, accountability, and continuous improvement within his teams. His ability to translate business vision into actionable plans has been a key driver in scaling operations, building high-performing networks, and ensuring long-term organizational success. As a forward-thinking business leader, Shabeer Ahmad Shah continues to play a pivotal role in shaping NGE Petroleum\'s growth trajectory — steering the brand toward becoming a trusted name in India\'s evolving energy landscape.',
    experience: 'Strategic Business Leader'
  },
  {
    name: 'Amit Kumar',
    role: 'Head of Business Development & Franchise Expansion',
    image: '/amit kumar.jpg',
    description: 'Amit Kumar is an accomplished Business Development Leader with over 12 years of experience in driving organizational growth through strategic partnerships and franchise expansion. He has successfully led initiatives that strengthened brand presence, optimized market reach, and built sustainable business networks. Amit\'s deep understanding of market dynamics, combined with his leadership and negotiation skills, has played a pivotal role in accelerating business success and long-term profitability.',
    experience: '12+ Years'
  },
  {
    name: 'Priyanka Singh',
    role: 'Franchise Development Specialist',
    image: '/priyanak singh.jpg',
    description: 'With six years of hands-on experience in franchise sales and business development, Priyanka Singh has played a key role in expanding brand footprints across diverse markets. She excels in prospect evaluation, franchise onboarding, and negotiation management. Her ability to align franchise partners with organizational goals makes her an integral part of the company\'s growth strategy.',
    experience: '6 Years'
  },
  {
    name: 'Shubhra Singh',
    role: 'Business Development Specialist',
    image: '/shubra singh.jpg',
    description: 'With a proven track record in business development and client engagement, Shubhra Singh brings 3 years of expertise in identifying new market opportunities and driving sustainable growth. She is skilled in market research, sales strategy, and relationship management, helping businesses strengthen their brand and achieve measurable results.',
    experience: '3 Years'
  },
  {
    name: 'Vishal Tyagi',
    role: 'Business Development & Sales Specialist',
    image: '/vishal tyagi.jpg',
    description: 'With three years of proven success in sales and business development, Vishal Tyagi brings a strategic mindset and a customer-first approach to every project. His expertise spans lead generation, client acquisition, and account management. Vishal\'s dedication to delivering measurable business results contributes significantly to the company\'s continued growth.',
    experience: '3 Years'
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb 
        items={[
          { label: 'HOME', href: '/' },
          { label: 'TEAM', href: '/team' }
        ]}
      />
      
      {/* Team Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to powering India's energy future
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-visible cursor-pointer h-full relative">
                <CardContent className="p-0 relative h-full flex">
                  {/* Image Section - Slides right on hover */}
                  <div className="relative w-full h-full min-h-[400px] overflow-hidden transition-all duration-500 group-hover:translate-x-full group-hover:opacity-0 bg-gray-100 flex-shrink-0">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    {/* Default Name and Role overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-green-300 font-semibold text-sm mb-2">{member.role}</p>
                      {member.experience && (
                        <Badge className="bg-green-600 text-white border-0 text-xs">
                          {member.experience}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Information Section - Revealed when image slides out */}
                  <div className="absolute inset-0 w-full h-full p-6 flex flex-col justify-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 z-10">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-green-600 font-semibold text-base mb-3">{member.role}</p>
                      {member.experience && (
                        <Badge variant="outline" className="text-sm mb-4">
                          {member.experience}
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-left">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

