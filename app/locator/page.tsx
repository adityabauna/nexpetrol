'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation2, Search, Phone, Clock, Fuel, Loader2, AlertCircle, X } from 'lucide-react';
import { FuelStationMap } from '@/components/fuel-station-map';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import the map component to avoid SSR issues
const DynamicMap = dynamic(() => Promise.resolve(FuelStationMap), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
    </div>
  ),
});

interface FuelStation {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  coordinates: { lat: number; lng: number };
  distance?: number; // Distance in km (calculated)
  city?: string; // City name for better search
  area?: string; // Area/locality for better search
}

export default function LocatorPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [displayedStations, setDisplayedStations] = useState<FuelStation[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchLocation, setSearchLocation] = useState<{ lat: number; lng: number; name: string } | null>(null);
  const [isSearchingLocation, setIsSearchingLocation] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Fetch stations from backend
  const fetchStations = async () => {
    try {
      const response = await fetch('/api/stations');
      const data = await response.json();
      if (data.success) {
        return data.stations.map((station: any) => ({
          ...station,
          id: parseInt(station.id) || station.id, // Convert string ID to number if needed
        }));
      }
      return [];
    } catch (error) {
      console.error('Error fetching stations:', error);
      return [];
    }
  };

  // Fetch location suggestions from backend
  const fetchSuggestions = async (query: string): Promise<string[]> => {
    if (!query || query.length < 2) return [];
    try {
      const response = await fetch(`/api/stations/suggestions?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      if (data.success) {
        return data.suggestions;
      }
      return [];
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      return [];
    }
  };

  // Geocode location using backend API
  const geocodeLocation = async (locationName: string): Promise<{ lat: number; lng: number } | null> => {
    try {
      const response = await fetch('/api/stations/geocode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location: locationName }),
      });
      const data = await response.json();
      if (data.success) {
        return data.coordinates;
      }
      return null;
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  };

  // Search stations by location using backend API
  const searchStationsByLocation = async (latitude: number, longitude: number, searchQuery?: string) => {
    try {
      const response = await fetch('/api/stations/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude,
          longitude,
          searchQuery,
        }),
      });
      const data = await response.json();
      if (data.success) {
        return {
          stations: data.stations.map((station: any) => ({
            ...station,
            id: parseInt(station.id) || station.id,
          })),
          searchLocation: data.searchLocation,
        };
      }
      return { stations: [], searchLocation: null };
    } catch (error) {
      console.error('Error searching stations:', error);
      return { stations: [], searchLocation: null };
    }
  };

  // Get user's current location
  const handleUseCurrentLocation = async () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      return;
    }

    setIsLoadingLocation(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        
        // Search stations using backend API
        const result = await searchStationsByLocation(latitude, longitude);
        setDisplayedStations(result.stations);
        setIsLoadingLocation(false);
      },
      (error) => {
        setIsLoadingLocation(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError('Location access denied. Please enable location permissions in your browser settings.');
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError('Location information is unavailable.');
            break;
          case error.TIMEOUT:
            setLocationError('Location request timed out. Please try again.');
            break;
          default:
            setLocationError('An unknown error occurred while getting your location.');
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  // Initialize with all stations from backend
  useEffect(() => {
    const loadStations = async () => {
      const stations = await fetchStations();
      setDisplayedStations(stations);
    };
    loadStations();
  }, []);

  // Handle search input changes for autocomplete
  useEffect(() => {
    const loadSuggestions = async () => {
      if (searchQuery.trim().length > 0) {
        const fetchedSuggestions = await fetchSuggestions(searchQuery);
        setSuggestions(fetchedSuggestions.slice(0, 5)); // Show max 5 suggestions
        setShowSuggestions(fetchedSuggestions.length > 0);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };
    loadSuggestions();
  }, [searchQuery]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    
    if (searchQuery.trim()) {
      setIsSearchingLocation(true);
      
      // Try to geocode the search query first
      const geocoded = await geocodeLocation(searchQuery);
      
      if (geocoded) {
        setSearchLocation({ ...geocoded, name: searchQuery });
        // Search stations using backend API with geocoded location
        const result = await searchStationsByLocation(geocoded.lat, geocoded.lng, searchQuery);
        setDisplayedStations(result.stations);
      } else {
        // If geocoding fails, try searching by text
        try {
          const response = await fetch(`/api/stations?search=${encodeURIComponent(searchQuery)}`);
          const data = await response.json();
          if (data.success) {
            setDisplayedStations(data.stations.map((station: any) => ({
              ...station,
              id: parseInt(station.id) || station.id,
            })));
          } else {
            setDisplayedStations([]);
          }
        } catch (error) {
          console.error('Error searching stations:', error);
          setDisplayedStations([]);
        }
      }
      
      setIsSearchingLocation(false);
    } else {
      // Reset to all stations
      setSearchLocation(null);
      if (userLocation) {
        const result = await searchStationsByLocation(userLocation.lat, userLocation.lng);
        setDisplayedStations(result.stations);
      } else {
        const stations = await fetchStations();
        setDisplayedStations(stations);
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    // Trigger search automatically
    setTimeout(() => {
      const form = searchInputRef.current?.closest('form');
      if (form) {
        form.requestSubmit();
      }
    }, 100);
  };

  const handleGetDirections = (station: FuelStation) => {
    const origin = userLocation 
      ? `${userLocation.lat},${userLocation.lng}` 
      : '';
    const destination = `${station.coordinates.lat},${station.coordinates.lng}`;
    const url = origin
      ? `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`
      : `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, '_blank');
  };

  const formatDistance = (distance?: number): string => {
    if (distance === undefined) return 'Distance unknown';
    if (distance < 1) {
      return `${Math.round(distance * 1000)} m`;
    }
    return `${distance.toFixed(1)} km`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb 
        items={[
          { label: 'HOME', href: '/' },
          { label: 'FUEL STATION LOCATOR', href: '/locator' }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 via-green-600 to-teal-600 text-white py-20 overflow-hidden" style={{
        backgroundImage: 'url(/petrolpump.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 via-green-600/90 to-teal-600/90"></div>
        
        {/* Decorative Background Images */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Decorative Image */}
          <div className="absolute top-10 left-10 opacity-20">
            <Image 
              src="/fuel-icon.svg" 
              alt="" 
              width={160}
              height={160}
              className="w-32 h-32 lg:w-40 lg:h-40"
            />
          </div>
          
          {/* Top Right Decorative Image */}
          <div className="absolute top-10 right-10 opacity-20">
            <MapPin className="w-32 h-32 lg:w-40 lg:h-40 text-white" />
          </div>
          
          {/* Bottom Left Decorative Image */}
          <div className="absolute bottom-10 left-10 opacity-20">
            <Navigation2 className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
          </div>
          
          {/* Bottom Right Decorative Image */}
          <div className="absolute bottom-10 right-10 opacity-20">
            <Image 
              src="/fuel-icon.svg" 
              alt="" 
              width={128}
              height={128}
              className="w-24 h-24 lg:w-32 lg:h-32 rotate-12"
            />
          </div>
          
          {/* Center Decorative Elements */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 opacity-10">
            <Fuel className="w-20 h-20 lg:w-28 lg:h-28 text-white" />
          </div>
          
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 opacity-10">
            <MapPin className="w-20 h-20 lg:w-28 lg:h-28 text-white" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="text-center mb-12">
            {/* Logo/Icon Badge */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border-2 border-white/30">
                <Image 
                  src="/fuel-icon.svg" 
                  alt="Fuel Station" 
                  width={80}
                  height={80}
                  className="w-16 h-16 lg:w-20 lg:h-20"
                />
              </div>
            </div>
            
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Find Us</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">NGE Fuel Station Locator</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Find the nearest petrol pump and plan your route. We're expanding our network across India to serve you better.
            </p>
            
            {/* Additional Visual Elements */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-3 border border-white/20">
                <MapPin className="w-5 h-5" />
                <span className="text-sm lg:text-base">Multiple Locations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-3 border border-white/20">
                <Navigation2 className="w-5 h-5" />
                <span className="text-sm lg:text-base">Easy Navigation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-3 border border-white/20">
                <Fuel className="w-5 h-5" />
                <span className="text-sm lg:text-base">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => {
                        if (suggestions.length > 0) {
                          setShowSuggestions(true);
                        }
                      }}
                      placeholder="Search by location, city, or area..."
                      className="w-full pl-12 pr-10 py-3 border-2 border-green-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={async () => {
                          setSearchQuery('');
                          setSearchLocation(null);
                          setShowSuggestions(false);
                          if (userLocation) {
                            const result = await searchStationsByLocation(userLocation.lat, userLocation.lng);
                            setDisplayedStations(result.stations);
                          } else {
                            const stations = await fetchStations();
                            setDisplayedStations(stations);
                          }
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                    {/* Autocomplete Suggestions */}
                    {showSuggestions && suggestions.length > 0 && (
                      <div
                        ref={suggestionsRef}
                        className="absolute z-50 w-full mt-1 bg-white border-2 border-green-500 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                      >
                        {suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full text-left px-4 py-3 hover:bg-green-50 transition-colors flex items-center gap-2"
                          >
                            <MapPin className="h-4 w-4 text-green-600" />
                            <span>{suggestion}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSearchingLocation}
                    className="bg-green-600 hover:bg-green-700 px-8 whitespace-nowrap disabled:opacity-50"
                  >
                    {isSearchingLocation ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Searching...
                      </>
                    ) : (
                      'Search Stations'
                    )}
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    onClick={handleUseCurrentLocation}
                    disabled={isLoadingLocation}
                    variant="outline"
                    className="border-2 border-green-500 text-green-600 hover:bg-green-50 flex items-center gap-2"
                  >
                    {isLoadingLocation ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Getting Location...
                      </>
                    ) : (
                      <>
                        <Navigation2 className="h-4 w-4" />
                        Use Current Location
                      </>
                    )}
                  </Button>
                  <div className="flex items-center gap-2 flex-wrap">
                    {userLocation && (
                      <Badge className="bg-green-100 text-green-700">
                        Current Location
                      </Badge>
                    )}
                    {searchLocation && (
                      <Badge className="bg-blue-100 text-blue-700">
                        Searching near: {searchLocation.name}
                      </Badge>
                    )}
                  </div>
                </div>
                {locationError && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                    <AlertCircle className="h-5 w-5" />
                    <span className="text-sm">{locationError}</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stations List Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {searchLocation 
                ? `Fuel Stations near ${searchLocation.name}` 
                : userLocation 
                ? 'Nearby Fuel Stations' 
                : 'All Fuel Stations'}
            </h2>
            <p className="text-xl text-gray-600">
              {searchLocation || userLocation
                ? 'Stations sorted by distance from your search location' 
                : 'Find the closest NGE fuel station to your location'}
            </p>
          </div>
          {displayedStations.length === 0 ? (
            <Card className="shadow-lg">
              <CardContent className="py-12 text-center">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No stations found matching your search.</p>
                <Button 
                  onClick={async () => {
                    setSearchQuery('');
                    setSearchLocation(null);
                    setShowSuggestions(false);
                    if (userLocation) {
                      const result = await searchStationsByLocation(userLocation.lat, userLocation.lng);
                      setDisplayedStations(result.stations);
                    } else {
                      const stations = await fetchStations();
                      setDisplayedStations(stations);
                    }
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {displayedStations.map((station) => (
                <Card 
                  id={`station-${station.id}`}
                  key={station.id} 
                  className={`shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                    selectedLocation === station.id.toString() ? 'ring-2 ring-green-500' : ''
                  }`}
                  onClick={() => {
                    setSelectedLocation(station.id.toString());
                    // Scroll map into view when a station is selected
                    const mapSection = document.querySelector('[data-map-section]');
                    if (mapSection) {
                      mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{station.name}</CardTitle>
                        <CardDescription className="flex items-center mt-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {station.address}
                        </CardDescription>
                      </div>
                      {station.distance !== undefined && (
                        <Badge className="bg-green-100 text-green-700 whitespace-nowrap">
                          {formatDistance(station.distance)}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-5 w-5 mr-3 text-green-600" />
                        <span>{station.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-3 text-green-600" />
                        <span>{station.hours}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Fuel className="h-5 w-5 mr-3 text-green-600" />
                        <div className="flex flex-wrap gap-2">
                          {station.services.map((service, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 mt-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGetDirections(station);
                        }}
                      >
                        <Navigation2 className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white" data-map-section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interactive Map</h2>
            <p className="text-xl text-gray-600">View all our fuel stations on the map. Click on markers to see details.</p>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow"></div>
                <span>Fuel Station</span>
              </div>
              {userLocation && (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow"></div>
                  <span>Your Location</span>
                </div>
              )}
              {searchLocation && (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-purple-500 border-2 border-white shadow"></div>
                  <span>Search Location</span>
                </div>
              )}
            </div>
          </div>
          <Card className="shadow-lg">
            <CardContent className="p-0">
              <div className="h-[600px] w-full rounded-lg overflow-hidden">
                <DynamicMap
                  stations={displayedStations}
                  selectedStationId={selectedLocation}
                  userLocation={userLocation}
                  searchLocation={searchLocation}
                  onStationClick={(stationId) => {
                    setSelectedLocation(stationId.toString());
                    // Scroll to the station card
                    const element = document.getElementById(`station-${stationId}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Can't Find a Station Near You?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're constantly expanding our network. Contact us to learn about upcoming stations in your area or to partner with us.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

