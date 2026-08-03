import Globe from "react-globe.gl";

const PLACES = [
  { name: "Canada", lat: 56.1304, lng: -106.3468 },
  { name: "United States", lat: 39.8283, lng: -98.5795 },
  { name: "China", lat: 35.8617, lng: 104.1954 },
  { name: "Finland", lat: 61.9241, lng: 25.7482 },
  { name: "Denmark", lat: 56.2639, lng: 9.5018 },
  { name: "Netherlands", lat: 52.1326, lng: 5.2913 },
  { name: "Sweden", lat: 60.1282, lng: 18.6435 },
];

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
          pointsData={PLACES}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => "#38bdf8"}
          pointAltitude={0.04}
          pointRadius={0.5}
          labelsData={PLACES}
          labelLat="lat"
          labelLng="lng"
          labelText="name"
          labelSize={2.0}
          labelDotRadius={0.4}
          labelColor={() => "#ffffff"}
        />
      </div>
    </div>
  );
}
