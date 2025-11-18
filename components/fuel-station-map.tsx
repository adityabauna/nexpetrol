'use client';

import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface FuelStation {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  coordinates: { lat: number; lng: number };
  distance?: number;
}

interface FuelStationMapProps {
  stations: FuelStation[];
  selectedStationId?: string | null;
  userLocation?: { lat: number; lng: number } | null;
  searchLocation?: { lat: number; lng: number; name: string } | null;
  onStationClick?: (stationId: number) => void;
}

// Component to handle map view updates
function MapViewUpdater({ 
  center, 
  zoom 
}: { 
  center: [number, number]; 
  zoom: number;
}) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  
  return null;
}

// Custom marker icon for fuel stations
const createFuelStationIcon = (isSelected: boolean) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${isSelected ? '#16a34a' : '#10b981'};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        position: relative;
      ">
        <div style="
          transform: rotate(45deg);
          color: white;
          font-weight: bold;
          font-size: 18px;
          line-height: 26px;
          text-align: center;
        ">⛽</div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

// Custom marker icon for user location
const createUserLocationIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: #3b82f6;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      "></div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

// Custom marker icon for search location
const createSearchLocationIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: #8b5cf6;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      "></div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

export function FuelStationMap({
  stations,
  selectedStationId,
  userLocation,
  searchLocation,
  onStationClick,
}: FuelStationMapProps) {
  const mapRef = useRef<L.Map | null>(null);

  // Calculate map center and zoom
  const getMapCenter = (): [number, number] => {
    if (searchLocation) {
      return [searchLocation.lat, searchLocation.lng];
    }
    if (userLocation) {
      return [userLocation.lat, userLocation.lng];
    }
    if (stations.length > 0) {
      // Center on first station or average of all stations
      const avgLat = stations.reduce((sum, s) => sum + s.coordinates.lat, 0) / stations.length;
      const avgLng = stations.reduce((sum, s) => sum + s.coordinates.lng, 0) / stations.length;
      return [avgLat, avgLng];
    }
    // Default to India center
    return [20.5937, 78.9629];
  };

  const getMapZoom = (): number => {
    if (searchLocation || userLocation) {
      return 12;
    }
    if (stations.length === 1) {
      return 14;
    }
    return 6;
  };

  const center = getMapCenter();
  const zoom = getMapZoom();

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
        scrollWheelZoom={true}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapViewUpdater center={center} zoom={zoom} />

        {/* User Location Marker */}
        {userLocation && (
          <Marker
            position={[userLocation.lat, userLocation.lng]}
            icon={createUserLocationIcon()}
          >
            <Popup>
              <div className="text-sm font-semibold">Your Location</div>
            </Popup>
          </Marker>
        )}

        {/* Search Location Marker */}
        {searchLocation && (
          <Marker
            position={[searchLocation.lat, searchLocation.lng]}
            icon={createSearchLocationIcon()}
          >
            <Popup>
              <div className="text-sm font-semibold">Searching near: {searchLocation.name}</div>
            </Popup>
          </Marker>
        )}

        {/* Fuel Station Markers */}
        {stations.map((station) => {
          const isSelected = selectedStationId === station.id.toString();
          return (
            <Marker
              key={station.id}
              position={[station.coordinates.lat, station.coordinates.lng]}
              icon={createFuelStationIcon(isSelected)}
              eventHandlers={{
                click: () => {
                  onStationClick?.(station.id);
                },
              }}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <h3 className="font-bold text-sm mb-1">{station.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{station.address}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">📞</span>
                    <span className="text-xs">{station.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">🕐</span>
                    <span className="text-xs">{station.hours}</span>
                  </div>
                  {station.distance !== undefined && (
                    <div className="mt-2">
                      <span className="text-xs font-semibold text-green-600">
                        {station.distance < 1
                          ? `${Math.round(station.distance * 1000)} m away`
                          : `${station.distance.toFixed(1)} km away`}
                      </span>
                    </div>
                  )}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {station.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

