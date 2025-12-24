import { isInsideOffice } from "./geofence.util";

const OFFICE_LAT = -2.9761;
const OFFICE_LNG = 104.7754;

export async function checkIn(lat: number, lng: number) {
  if (!isInsideOffice(lat, lng, OFFICE_LAT, OFFICE_LNG)) {
    return { status: "FAILED", message: "Di luar area kantor" };
  }

  return { status: "SUCCESS", message: "Absen masuk berhasil" };
}
