'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Pushed more to the left */}
          <div className="flex items-center -ml-4 lg:-ml-8">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png"
                alt="NGE Future Energy logo"
                width={180}
                height={72}
                className="h-14 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Two Row Layout - Pushed more to the right */}
          <div className="hidden lg:flex flex-col items-end -mr-4 lg:-mr-8">
            {/* Top Row - Smaller Links */}
            <div className="flex items-center space-x-7 mb-2.5">
              <Link href="/locator" className="text-sm text-gray-500 hover:text-green-600 font-normal transition-colors">
                Fuel Station Locator
              </Link>
              <Link href="/careers" className="text-sm text-gray-500 hover:text-green-600 font-normal transition-colors">
                Apply Now
              </Link>
              <button className="text-gray-500 hover:text-green-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
            {/* Bottom Row - Main Navigation */}
            <div className="flex items-center space-x-10">
              <Link href="/" className="text-lg text-gray-800 hover:text-green-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-lg text-gray-800 hover:text-green-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="/projects" className="text-lg text-gray-800 hover:text-green-600 font-medium transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-lg text-gray-800 hover:text-green-600 font-medium transition-colors">
                About Us
              </Link>
              <Link href="/team" className="text-lg text-gray-800 hover:text-green-600 font-medium transition-colors">
                Team
              </Link>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-base px-5 py-2.5 h-auto">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t">
            <Link href="/" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Home</Link>
            <Link href="/#services" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Services</Link>
            <Link href="/projects" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Projects</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-green-600 font-medium">About Us</Link>
            <Link href="/team" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Team</Link>
            <Link href="/locator" className="block py-2 text-gray-500 hover:text-green-600 text-sm">Fuel Station Locator</Link>
            <Link href="/careers" className="block py-2 text-gray-500 hover:text-green-600 text-sm">Apply Now</Link>
            <Link href="/contact" className="block py-2 text-green-600 font-medium">Contact Us</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

