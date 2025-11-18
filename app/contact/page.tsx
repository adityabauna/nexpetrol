'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb 
        items={[
          { label: 'HOME', href: '/' },
          { label: 'CONTACT US', href: '/contact' }
        ]}
      />
      
      {/* Contact Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <Badge className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
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
                        (e.target as HTMLFormElement).reset();
                        
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          (window as any).gtag('event', 'form_submit', {
                            'event_category': 'contact',
                            'event_label': 'contact_form_submission',
                            'value': 1
                          });
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

      <Footer />
    </div>
  );
}

