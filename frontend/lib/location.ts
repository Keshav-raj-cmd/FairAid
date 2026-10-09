import { getApiBaseUrl } from "@/lib/api";

export type GeocodeResult = {
  lat: number;
  lng: number;
  display_name?: string;
};

export async function geocodeAddress(address: string): Promise<GeocodeResult | null> {
  const query = address.trim();
  if (!query) {
    return null;
  }

  const baseUrl = getApiBaseUrl();
  const response = await fetch(
    `${baseUrl}/platform/geocode?address=${encodeURIComponent(query)}`,
  );
  if (!response.ok) {
    return null;
  }

  const match = (await response.json()) as {
    lat: number;
    lng: number;
    display_name?: string;
  };
  return {
    lat: Number(match.lat),
    lng: Number(match.lng),
    display_name: match.display_name,
  };
}

export async function reverseGeocode(lat: number, lng: number): Promise<string | null> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(
    `${baseUrl}/platform/reverse-geocode?lat=${lat}&lng=${lng}`,
  );
  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as { display_name?: string };
  return payload.display_name ?? null;
}

export function buildMapEmbedUrl(lat: number, lng: number): string {
  const offset = 0.01;
  const left = lng - offset;
  const right = lng + offset;
  const top = lat + offset;
  const bottom = lat - offset;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${lat}%2C${lng}`;
}
