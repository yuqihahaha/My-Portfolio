import Globe from "react-globe.gl";

const PLACES = [
  { name: "Canada", flag: "🇨🇦", lat: 56.1304, lng: -106.3468 },
  { name: "United States", flag: "🇺🇸", lat: 39.8283, lng: -98.5795 },
  { name: "China", flag: "🇨🇳", lat: 35.8617, lng: 104.1954 },
  { name: "Finland", flag: "🇫🇮", lat: 61.9241, lng: 25.7482 },
  { name: "Denmark", flag: "🇩🇰", lat: 56.2639, lng: 9.5018 },
  { name: "Netherlands", flag: "🇳🇱", lat: 52.1326, lng: 5.2913 },
  { name: "Sweden", flag: "🇸🇪", lat: 60.1282, lng: 18.6435 },
];

function createFlagMarker(place) {
  const marker = document.createElement("div");
  marker.className = "globe-flag-marker";
  marker.setAttribute("role", "img");
  marker.setAttribute("aria-label", place.name);

  const flag = document.createElement("span");
  flag.className = "globe-flag";
  flag.textContent = place.flag;

  const label = document.createElement("span");
  label.className = "globe-flag-label";
  label.textContent = place.name;

  marker.append(flag, label);
  return marker;
}

export default function TravelGlobeCard() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
      <h3 className="mb-6 text-3xl font-black text-slate-900">🌍 Places I’ve Been</h3>

      <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-[2rem] bg-slate-950">
        <Globe
          width={500}
          height={500}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          htmlElementsData={PLACES}
          htmlLat="lat"
          htmlLng="lng"
          htmlAltitude={0.025}
          htmlElement={createFlagMarker}
        />
      </div>
    </div>
  );
}
