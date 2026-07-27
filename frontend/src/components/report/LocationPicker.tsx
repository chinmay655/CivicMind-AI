import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

import { ComplaintFormData } from "../../types/complaint";

interface LocationPickerProps {
  formData: ComplaintFormData;
  setFormData: React.Dispatch<
    React.SetStateAction<ComplaintFormData>
  >;
}

/* ---------------- Fly To Selected Location ---------------- */

function FlyToLocation({
  latitude,
  longitude,
}: {
  latitude: number | null;
  longitude: number | null;
}) {
  const map = useMap();

  if (latitude !== null && longitude !== null) {
    map.flyTo([latitude, longitude], 16, {
      duration: 1.5,
    });
  }

  return null;
}

/* ---------------- Marker ---------------- */

function LocationMarker({
  formData,
  setFormData,
}: LocationPickerProps) {
  useMapEvents({
    click(e) {
      setFormData((prev) => ({
        ...prev,
        latitude: e.latlng.lat,
        longitude: e.latlng.lng,
      }));
    },
  });

  if (
    formData.latitude === null ||
    formData.longitude === null
  ) {
    return null;
  }

  return (
    <Marker
      position={[
        formData.latitude,
        formData.longitude,
      ]}
    />
  );
}

/* ---------------- Component ---------------- */

const LocationPicker = ({
  formData,
  setFormData,
}: LocationPickerProps) => {
  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      },
      () => {
        alert("Unable to retrieve your current location.");
      }
    );
  };

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-2 text-2xl font-semibold text-white">
        Select Location
      </h2>

      <p className="mb-6 text-slate-400">
        Click anywhere on the map or use your current location.
      </p>

      <button
        onClick={handleCurrentLocation}
        className="mb-6 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        📍 Use My Current Location
      </button>

      <div className="overflow-hidden rounded-xl">
        <MapContainer
          center={[19.076, 72.8777]}
          zoom={13}
          style={{
            height: "450px",
            width: "100%",
          }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FlyToLocation
            latitude={formData.latitude}
            longitude={formData.longitude}
          />

          <LocationMarker
            formData={formData}
            setFormData={setFormData}
          />
        </MapContainer>
      </div>

      {formData.latitude !== null &&
        formData.longitude !== null && (
          <div className="mt-6 rounded-xl bg-slate-800 p-4 text-white">
            <h3 className="mb-3 text-lg font-semibold">
              Selected Coordinates
            </h3>

            <p>
              <strong>Latitude:</strong>{" "}
              {formData.latitude.toFixed(6)}
            </p>

            <p>
              <strong>Longitude:</strong>{" "}
              {formData.longitude.toFixed(6)}
            </p>
          </div>
        )}
    </section>
  );
};

export default LocationPicker;