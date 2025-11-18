import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/stations - Get all active fuel stations
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const area = searchParams.get('area');
    const search = searchParams.get('search');

    // Build where clause
    const where: any = {
      isActive: true,
    };

    if (city) {
      where.city = { contains: city, mode: 'insensitive' };
    }

    if (area) {
      where.area = { contains: area, mode: 'insensitive' };
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { address: { contains: search, mode: 'insensitive' } },
        { city: { contains: search, mode: 'insensitive' } },
        { area: { contains: search, mode: 'insensitive' } },
      ];
    }

    const stations = await prisma.fuelStation.findMany({
      where,
      orderBy: {
        name: 'asc',
      },
    });

    // Transform to match frontend interface
    const formattedStations = stations.map((station) => ({
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
    }));

    return NextResponse.json(
      {
        success: true,
        stations: formattedStations,
        count: formattedStations.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching stations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stations. Please try again later.' },
      { status: 500 }
    );
  }
}

// POST /api/stations - Create a new fuel station (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, address, phone, hours, services, latitude, longitude, city, area } = body;

    // Validate required fields
    if (!name || !address || !phone || !hours || !services || latitude === undefined || longitude === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate coordinates
    if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
      return NextResponse.json(
        { error: 'Invalid coordinates' },
        { status: 400 }
      );
    }

    // Create station
    const station = await prisma.fuelStation.create({
      data: {
        name,
        address,
        phone,
        hours,
        services: Array.isArray(services) ? services : [services],
        latitude,
        longitude,
        city: city || null,
        area: area || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Fuel station created successfully',
        station: {
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
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating station:', error);
    return NextResponse.json(
      { error: 'Failed to create station. Please try again later.' },
      { status: 500 }
    );
  }
}

