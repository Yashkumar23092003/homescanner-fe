import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultIcon = L.icon({
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
});

const ChangeView = ({ center, zoom }) => {
    const map = useMap();

    useEffect(() => {
        if (map && center && Array.isArray(center) && center.length === 2) {
            console.log("Changing view to:", center, "Zoom:", zoom);
            map.flyTo(center, zoom, { animate: true, duration: 1.5 });
        }
    }, [center, zoom, map]);

    return null;
};

const MapComponent = ({ properties = [], selectedLocation }) => {
    const defaultCenter = [20.5937, 78.9629]; 
    const zoomLevel = selectedLocation ? 10 : 5; 

    return (
        <MapContainer center={defaultCenter} zoom={zoomLevel} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {selectedLocation && Array.isArray(selectedLocation) && selectedLocation.length === 2 && (
                <ChangeView center={selectedLocation} zoom={10} />
            )}
            {properties.map((property) => {
                const customIcon = L.icon({
                    iconUrl: property.image || defaultIcon.options.iconUrl,
                    iconSize: [40, 40],
                    iconAnchor: [20, 40],
                    popupAnchor: [0, -40],
                });

                return (
                    <Marker
                        key={property.id}
                        position={[property.latitude, property.longitude]}
                        icon={customIcon}
                        eventHandlers={{
                            click: () => {
                                console.log("Marker clicked:", [property.latitude, property.longitude]);
                            },
                        }}
                    >
                        <Popup>
                            <strong>{property.name}</strong> <br />
                            {property.location} <br />
                            Price: {property.price} <br />
                            <img src={property.image || defaultIcon.options.iconUrl} alt={property.name} width="100" height="100" />
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};

export default MapComponent;
