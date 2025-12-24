import { getDistance } from "geolib";

export function isInsideOffice(
  userLat: number,
  userLng: number,
  officeLat: number,
  officeLng: number,
  radius = 50
): boolean {
  const distance = getDistance(
    { latitude: userLat, longitude: userLng },
    { latitude: officeLat, longitude: officeLng }
  );

  return distance <= radius;
}
