import { NextRequest, NextResponse } from 'next/server';

// POST /api/stations/geocode - Geocode a location name to coordinates
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { location } = body;

    if (!location || typeof location !== 'string') {
      return NextResponse.json(
        { error: 'Location name is required' },
        { status: 400 }
      );
    }

    // Use Nominatim (OpenStreetMap) for geocoding
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location + ', India')}&limit=1`,
      {
        headers: {
          'User-Agent': 'NGE Energy Locator',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Geocoding service unavailable');
    }

    const data = await response.json();

    if (data && data.length > 0) {
      return NextResponse.json(
        {
          success: true,
          coordinates: {
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon),
          },
          location: data[0].display_name,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: 'Location not found' },
      { status: 404 }
    );
  } catch (error) {
    console.error('Error geocoding location:', error);
    return NextResponse.json(
      { error: 'Failed to geocode location. Please try again later.' },
      { status: 500 }
    );
  }
}

