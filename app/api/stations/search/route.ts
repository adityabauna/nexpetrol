import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// POST /api/stations/search - Search stations by location with distance calculation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { latitude, longitude, searchQuery, maxDistance } = body;

    // Validate coordinates
    if (latitude === undefined || longitude === undefined) {
      return NextResponse.json(
        { error: 'Latitude and longitude are required' },
        { status: 400 }
      );
    }

    if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
      return NextResponse.json(
        { error: 'Invalid coordinates' },
        { status: 400 }
      );
    }

    // Build where clause
    const where: any = {
      isActive: true,
    };

    // Add text search if provided
    if (searchQuery) {
      where.OR = [
        { name: { contains: searchQuery, mode: 'insensitive' } },
        { address: { contains: searchQuery, mode: 'insensitive' } },
        { city: { contains: searchQuery, mode: 'insensitive' } },
        { area: { contains: searchQuery, mode: 'insensitive' } },
      ];
    }

    // Fetch all matching stations
    const stations = await prisma.fuelStation.findMany({
      where,
    });

    // Calculate distances and add to results
    const stationsWithDistance = stations.map((station) => {
      const distance = calculateDistance(
        latitude,
        longitude,
        station.latitude,
        station.longitude
      );
      return {
        id: station.id,
        name: station.name,
        address: station.address,
        phone: station.phone,
        hours: station.hours,
        services: station.services,
        coordinates: {
          lat: station.latitude,
          lng: station.longitude,
        },
        city: station.city || undefined,
        area: station.area || undefined,
        distance,
      };
    });

    // Filter by max distance if provided
    let filteredStations = stationsWithDistance;
    if (maxDistance) {
      filteredStations = stationsWithDistance.filter(
        (station) => station.distance <= maxDistance
      );
    }

    // Sort by distance
    filteredStations.sort((a, b) => (a.distance || 0) - (b.distance || 0));

    return NextResponse.json(
      {
        success: true,
        stations: filteredStations,
        count: filteredStations.length,
        searchLocation: {
          lat: latitude,
          lng: longitude,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error searching stations:', error);
    return NextResponse.json(
      { error: 'Failed to search stations. Please try again later.' },
      { status: 500 }
    );
  }
}

