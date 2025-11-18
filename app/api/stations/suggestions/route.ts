import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/stations/suggestions - Get location suggestions for autocomplete
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';

    if (!query || query.length < 2) {
      return NextResponse.json(
        {
          success: true,
          suggestions: [],
        },
        { status: 200 }
      );
    }

    // Get unique cities and areas from stations
    const stations = await prisma.fuelStation.findMany({
      where: {
        isActive: true,
        OR: [
          { city: { contains: query, mode: 'insensitive' } },
          { area: { contains: query, mode: 'insensitive' } },
          { name: { contains: query, mode: 'insensitive' } },
          { address: { contains: query, mode: 'insensitive' } },
        ],
      },
      select: {
        city: true,
        area: true,
        name: true,
        address: true,
      },
      take: 50, // Limit to avoid too many results
    });

    // Extract unique suggestions
    const suggestionsSet = new Set<string>();
    
    stations.forEach((station) => {
      if (station.city) suggestionsSet.add(station.city);
      if (station.area) suggestionsSet.add(station.area);
      // Extract parts from address
      if (station.address) {
        const addressParts = station.address.split(',');
        addressParts.forEach((part) => {
          const trimmed = part.trim();
          if (trimmed && trimmed.length > 2) {
            suggestionsSet.add(trimmed);
          }
        });
      }
    });

    // Filter and sort suggestions
    const suggestions = Array.from(suggestionsSet)
      .filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      )
      .sort()
      .slice(0, 10); // Return top 10 suggestions

    return NextResponse.json(
      {
        success: true,
        suggestions,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch suggestions. Please try again later.' },
      { status: 500 }
    );
  }
}

