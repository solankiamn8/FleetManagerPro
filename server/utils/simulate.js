export const estimateTravelTimeMins = (distanceKm) => {
  const avgSpeed = 45; // km/h simulated city average
  return Math.round((distanceKm / avgSpeed) * 60);
};

export const calculateFuelUse = (distanceKm, efficiencyKmPerL = 12) => {
  return +(distanceKm / efficiencyKmPerL).toFixed(2);
};

export const withinGeofence = (point, geofence) => {
  const R = 6371; // km
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(geofence.center.lat - point.lat);
  const dLng = toRad(geofence.center.lng - point.lng);
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(point.lat)) * Math.cos(toRad(geofence.center.lat)) * Math.sin(dLng/2)**2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  return d <= geofence.radiusKm;
};
