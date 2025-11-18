'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, FileText, CheckCircle2, ArrowRight, Download, Phone, Mail, AlertTriangle, Building2, LandPlot, DollarSign, Users, Award, TrendingUp, Shield } from 'lucide-react';

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb 
        items={[
          { label: 'HOME', href: '/' },
          { label: 'APPLY FOR DEALERSHIP', href: '/careers' }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Petrol Pump Dealership</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Apply for NGE Energy Dealership</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Join our growing network and become a part of India's energy revolution. Partner with us to set up your fuel station.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
              onClick={() => {
                document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Requirements to become an NGE Energy dealership partner
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <LandPlot className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-2">Land Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>City/Town:</strong> Minimum 2000 sq. meters with 30m frontage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>Highway:</strong> Minimum 3000 sq. meters with 40m frontage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Land can be owned or leased</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Clear land title required</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Road-touching, leveled, and developed land</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-2">Investment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Minimum investment: ₹50 Lakhs - ₹2 Crores</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Infrastructure development support available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Flexible financing options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Performance-based returns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-2">Additional Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Valid business registration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">PAN and GST registration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Bank account and financial statements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">No criminal record</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Simple steps to become our dealership partner</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <CardTitle className="text-xl">Post Application Process</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">From application submission to receiving the Letter of Appointment (LOA)</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Application review and verification</li>
                  <li>• Site inspection and evaluation</li>
                  <li>• Document verification</li>
                  <li>• LOA issuance</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <CardTitle className="text-xl">LOA to NOC</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Acquiring the No Objection Certificate (NOC) from the District Magistrate's office</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• NOC application submission</li>
                  <li>• Government approvals</li>
                  <li>• Environmental clearances</li>
                  <li>• Fire safety approvals</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    3
                  </div>
                  <CardTitle className="text-xl">NOC to Commissioning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Final steps leading to the commissioning of the fuel station</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Infrastructure development</li>
                  <li>• Equipment installation</li>
                  <li>• Staff training</li>
                  <li>• Station commissioning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Partnership</h2>
            <p className="text-xl text-gray-600">Why partner with NGE Energy?</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Financial Returns</h3>
                <p className="text-gray-600 text-sm">Competitive sales commissions and performance-based returns on infrastructure investment</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Technical Support</h3>
                <p className="text-gray-600 text-sm">Complete technical and engineering guidance throughout the setup process</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Training & Support</h3>
                <p className="text-gray-600 text-sm">Comprehensive training for staff and ongoing operational support</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Brand Recognition</h3>
                <p className="text-gray-600 text-sm">Design, branding support, and promotional activities to drive customer traffic</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Application Form */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <FileText className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Download Application Form</h2>
          <p className="text-xl text-gray-600 mb-8">
            Download the dealership application form, fill it out, and submit it along with required documents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Download Form (English)
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Download Form (Hindi)
            </Button>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Online Application Form</h2>
            <p className="text-xl text-gray-600">Fill out the form below to apply for NGE Energy dealership</p>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Dealership Application</CardTitle>
              <CardDescription>Please provide accurate information. All fields are required.</CardDescription>
            </CardHeader>
            <CardContent>
              <form 
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
                    address: formData.get('address'),
                    city: formData.get('city'),
                    state: formData.get('state'),
                    pincode: formData.get('pincode'),
                    landLocation: formData.get('landLocation'),
                    landArea: formData.get('landArea'),
                    landOwnership: formData.get('landOwnership'),
                    investmentCapacity: formData.get('investmentCapacity'),
                    experience: formData.get('experience'),
                    message: formData.get('message'),
                  };

                  try {
                    const response = await fetch('/api/dealership', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(data),
                    });

                    const result = await response.json();

                    if (response.ok && result.success) {
                      setSubmitStatus({ 
                        type: 'success', 
                        message: 'Thank you for your application! Our team will review it and contact you within 48 hours.' 
                      });
                      (e.target as HTMLFormElement).reset();
                    } else {
                      setSubmitStatus({ 
                        type: 'error', 
                        message: result.error || 'Something went wrong. Please try again.' 
                      });
                    }
                  } catch (error) {
                    setSubmitStatus({ 
                      type: 'error', 
                      message: 'Failed to submit application. Please try again later.' 
                    });
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input 
                    id="full-name"
                    name="fullName"
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                  <input 
                    id="address"
                    name="address"
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Street address"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input 
                      id="city"
                      name="city"
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <input 
                      id="state"
                      name="state"
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                    <input 
                      id="pincode"
                      name="pincode"
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="123456"
                    />
                  </div>
                </div>
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Land Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="landLocation" className="block text-sm font-medium text-gray-700 mb-2">Land Location *</label>
                      <input 
                        id="landLocation"
                        name="landLocation"
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Location of the land"
                      />
                    </div>
                    <div>
                      <label htmlFor="landArea" className="block text-sm font-medium text-gray-700 mb-2">Land Area (sq. meters) *</label>
                      <input 
                        id="landArea"
                        name="landArea"
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="e.g., 2000"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="landOwnership" className="block text-sm font-medium text-gray-700 mb-2">Land Ownership *</label>
                    <select 
                      id="landOwnership"
                      name="landOwnership"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select ownership type</option>
                      <option value="Owned">Owned</option>
                      <option value="Leased">Leased</option>
                      <option value="On Lease (with agreement)">On Lease (with agreement)</option>
                    </select>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment & Experience</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="investmentCapacity" className="block text-sm font-medium text-gray-700 mb-2">Investment Capacity (₹) *</label>
                      <select 
                        id="investmentCapacity"
                        name="investmentCapacity"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select investment range</option>
                        <option value="50 Lakhs - 1 Crore">₹50 Lakhs - ₹1 Crore</option>
                        <option value="1 Crore - 1.5 Crores">₹1 Crore - ₹1.5 Crores</option>
                        <option value="1.5 Crores - 2 Crores">₹1.5 Crores - ₹2 Crores</option>
                        <option value="Above 2 Crores">Above ₹2 Crores</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Previous Experience *</label>
                      <select 
                        id="experience"
                        name="experience"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select experience</option>
                        <option value="No experience">No experience</option>
                        <option value="1-3 years">1-3 years in fuel/retail</option>
                        <option value="3-5 years">3-5 years in fuel/retail</option>
                        <option value="5+ years">5+ years in fuel/retail</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Any additional information you'd like to share..."
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
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Have questions? Get in touch with our dealership team</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Toll-Free Number</h3>
                <p className="text-gray-600 mb-2">+91 8800599662</p>
                <p className="text-sm text-gray-500">Monday - Saturday, 9AM - 6PM</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Address</h3>
                <p className="text-gray-600 mb-2">info@ngepetroleum.com</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Office Address</h3>
                <p className="text-gray-600 text-sm mb-2">F-433 Sector-63</p>
                <p className="text-gray-600 text-sm mb-2">Noida, Uttar Pradesh 201301</p>
                <p className="text-sm text-gray-500">India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cautionary Note */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border border-yellow-300">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Important Notice - Beware of Frauds</h3>
              <p className="text-yellow-800 text-sm leading-relaxed">
                NGE Energy has <strong>not authorized any third party, agent, or individual</strong> to act on its behalf for setting up dealerships or collecting any fees. 
                All dealership applications must be submitted directly through our official website or office. 
                Please be cautious of unauthorized agents claiming to represent NGE Energy. 
                For any queries, contact us only through our official channels mentioned above.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
