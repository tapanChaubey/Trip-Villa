// src/components/MapBox.jsx
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = "pk.eyJ1IjoidGFwYW5jaGF1YmV5ODUyMSIsImEiOiJjbTA2Ym5jaGswd2M0MmpzaGxodndxYXQ1In0.DFY66eOEm_l1tHzeHeWQyQ";

const MapBox = ({ coordinates = [78.4867, 17.3850], title = "Hotel Location" }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinates,
      zoom: 12,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    new mapboxgl.Marker({ color: '#4F46E5' })
      .setLngLat(coordinates)
      .setPopup(new mapboxgl.Popup().setText(title))
      .addTo(map.current);
  }, [coordinates, title]);

  return (
    <section className="mt-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1340px] mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          <h3 className="text-center text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
           Welcome To {title}
          </h3>
          <div
            ref={mapContainer}
            className="w-full h-[320px] sm:h-[420px] md:h-[520px] rounded-xl border border-gray-300 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MapBox;
