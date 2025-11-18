import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST /api/dealership - Submit a dealership application
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      address,
      city,
      state,
      pincode,
      landLocation,
      landArea,
      landOwnership,
      investmentCapacity,
      experience,
      message,
    } = body;

    // Validate required fields
    if (
      !fullName ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !pincode ||
      !landLocation ||
      !landArea ||
      !landOwnership ||
      !investmentCapacity ||
      !experience
    ) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(phone) || phone.length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Create dealership application
    const application = await prisma.dealershipApplication.create({
      data: {
        fullName,
        email,
        phone,
        address,
        city,
        state,
        pincode,
        landLocation,
        landArea,
        landOwnership,
        investmentCapacity,
        experience,
        message: message || null,
        status: 'pending',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Dealership application submitted successfully',
        id: application.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting dealership application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    );
  }
}

// GET /api/dealership - Get all applications (admin only - would need auth in production)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const email = searchParams.get('email');

    const where: any = {};
    if (status) {
      where.status = status;
    }
    if (email) {
      where.email = email;
    }

    const applications = await prisma.dealershipApplication.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(
      {
        success: true,
        applications,
        count: applications.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications. Please try again later.' },
      { status: 500 }
    );
  }
}

