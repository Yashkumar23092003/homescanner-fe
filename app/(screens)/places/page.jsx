"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useMap } from "react-leaflet";
let L;
if (typeof window !== "undefined") {
  L = require("leaflet");
  require("leaflet/dist/leaflet.css");
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
  });
}
const DynamicMapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const DynamicTileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const DynamicMarker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const DynamicPopup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);
const DynamicPolyline = dynamic(
  () => import("react-leaflet").then((mod) => mod.Polyline),
  { ssr: false }
);
const RecenterAutomatically = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};
const dummyData = [
  {
    "lstId": 3,
    "city": "Delhi",
    "locality": "Saket",
    "name": "3 BHK Flat In Press Enclave Co Operative Hosing Society  For Sale  In Saket",
    "address": "Press Enclave road near Malviya Nagar Metro Station",
    "link": "https://www.nobroker.in/property/buy/3-bhk-apartment-for-sale-in-saket-delhi/8a9ff7828713b7be018713eb834d19ec/detail",
    "price": "₹2.65 Crores",
    "perSqftPrice": "₹15,588 per sq.ft.",
    "emi": "₹1.52 Lacs/Month",
    "builtUp": "1,700 sqft",
    "facing": "East",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": [
      "https://images.nobroker.in/images/8a9ff7828713b7be018713eb834d19ec_18845_60132_medium.jpg"
    ],
    "latitude": "28.52744905844778",
    "longitude": "77.21264100291195",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 4,
    "city": "Delhi",
    "locality": "Saket",
    "name": "2 BHK Apartment In Saket J Block For Sale  In Saket",
    "address": "saket J block  Vijay Sales near jblock market",
    "link": "https://www.nobroker.in/property/buy/2-bhk-apartment-for-sale-in-saket-delhi/8a9f97827a148b90017a14d45c59226b/detail",
    "price": "₹1.15 Crores",
    "perSqftPrice": "₹16,429 per sq.ft.",
    "emi": "₹65,911/Month",
    "builtUp": "700 sqft",
    "facing": "North",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": [
      "https://images.nobroker.in/images/8a9f97827a148b90017a14d45c59226b_1848_490080_medium.jpg"
    ],
    "latitude": "28.520471993941158",
    "longitude": "77.21300676978618",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 5,
    "city": "Delhi",
    "locality": "Saket",
    "name": "3 BHK Flat In Golf View Apartments For Sale  In Saket",
    "address": "Golf View Apartments",
    "link": "https://www.nobroker.in/property/buy/3-bhk-apartment-for-sale-in-saket-delhi/8a9f8e0392bce8ec0192bd667447292d/detail",
    "price": "₹90 Lacs",
    "perSqftPrice": "₹6,923 per sq.ft.",
    "emi": "₹51,583/Month",
    "builtUp": "1,300 sqft",
    "facing": "East",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": [
      "https://images.nobroker.in/images/8a9f8e0392bce8ec0192bd667447292d_74706_156963_medium.jpg"
    ],
    "latitude": "28.52713644552218",
    "longitude": "77.20338545138166",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 6,
    "city": "Delhi",
    "locality": "Saket",
    "name": "3 BHK Apartment In Rwa Saket Block J For Sale  In Saket",
    "address": "Rwa Saket Block J  Human Care Charitable Trust, D-94 Saket, New Delhi, Delhi 110017",
    "link": "https://www.nobroker.in/property/buy/3-bhk-apartment-for-sale-in-saket-delhi/8a9fbc8389edf5e70189ee4583a04b75/detail",
    "price": "₹4 Crores",
    "perSqftPrice": "₹25,000 per sq.ft.",
    "emi": "₹2.29 Lacs/Month",
    "builtUp": "1,600 sqft",
    "facing": "North-East",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": [
      "https://images.nobroker.in/images/8a9fbc8389edf5e70189ee4583a04b75_91002_82331_medium.jpg"
    ],
    "latitude": "28.523081652317718",
    "longitude": "77.20506237284194",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 7,
    "city": "Delhi",
    "locality": "Saket",
    "name": "2 BHK Flat For Sale  In Saket",
    "address": "Standalone Building, Block N, NEAR  Amity International School",
    "link": "https://www.nobroker.in/property/buy/2-bhk-apartment-for-sale-in-saket-delhi/8a9f834390e08cbd0190e0ba387f0a47/detail",
    "price": "₹81 Lacs",
    "perSqftPrice": "₹10,125 per sq.ft.",
    "emi": "₹46,424/Month",
    "builtUp": "800 sqft",
    "facing": "North",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": [
      "https://images.nobroker.in/images/8a9f834390e08cbd0190e0ba387f0a47_555506_927256_medium.jpg"
    ],
    "latitude": "28.523422129913474",
    "longitude": "77.2142466668573",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 8,
    "city": "Delhi",
    "locality": "Saket",
    "name": "4 BHK House For Sale  In Saket",
    "address": "Independent House, block j near Apeejay School - Saket",
    "link": "https://www.nobroker.in/property/buy/4-bhk-apartment-for-sale-in-saket-delhi/8a9fbc82815be03701815c32f25d35bf/detail",
    "price": "₹4.1 Crores",
    "perSqftPrice": "₹16,400 per sq.ft.",
    "emi": "₹2.35 Lacs/Month",
    "builtUp": "2,500 sqft",
    "facing": "Don't Know",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": [
      "https://images.nobroker.in/images/8a9fbc82815be03701815c32f25d35bf_26437_631980_medium.jpg"
    ],
    "latitude": "28.520545617872923",
    "longitude": "77.2128473528469",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 9,
    "city": "Delhi",
    "locality": "Saket",
    "name": "1 BHK Flat For Sale  In Saket",
    "address": "standalone building, Ashok Vihar, near Bikanervala",
    "link": "https://www.nobroker.in/property/buy/1-bhk-apartment-for-sale-in-saket-delhi/8a9f83039014b43401901511c0181af6/detail",
    "price": "₹35 Lacs",
    "perSqftPrice": "₹8,750 per sq.ft.",
    "emi": "₹20,060/Month",
    "builtUp": "400 sqft",
    "facing": "Don't Know",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": [
      "https://images.nobroker.in/images/8a9f83039014b43401901511c0181af6_5670_283767_medium.jpg"
    ],
    "latitude": "28.523247076183416",
    "longitude": "77.20746381324001",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 10,
    "city": "Delhi",
    "locality": "Saket",
    "name": "2 BHK Apartment In Saket - Property 10",
    "address": "Address 10, Saket, Delhi",
    "link": "https://example.com/property/10",
    "price": "₹1.20 Crores",
    "perSqftPrice": "₹15,000 per sq.ft.",
    "emi": "₹70,000/Month",
    "builtUp": "900 sqft",
    "facing": "South",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.524000",
    "longitude": "77.213000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 11,
    "city": "Delhi",
    "locality": "Saket",
    "name": "3 BHK Apartment In Saket - Property 11",
    "address": "Address 11, Saket, Delhi",
    "link": "https://example.com/property/11",
    "price": "₹1.80 Crores",
    "perSqftPrice": "₹17,000 per sq.ft.",
    "emi": "₹1 Lakh/Month",
    "builtUp": "1,200 sqft",
    "facing": "East",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.525000",
    "longitude": "77.214000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 12,
    "city": "Delhi",
    "locality": "Saket",
    "name": "1 BHK Apartment In Saket - Property 12",
    "address": "Address 12, Saket, Delhi",
    "link": "https://example.com/property/12",
    "price": "₹45 Lacs",
    "perSqftPrice": "₹9,500 per sq.ft.",
    "emi": "₹22,000/Month",
    "builtUp": "450 sqft",
    "facing": "West",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.526000",
    "longitude": "77.215000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 13,
    "city": "Delhi",
    "locality": "Saket",
    "name": "2 BHK Flat In Saket - Property 13",
    "address": "Address 13, Saket, Delhi",
    "link": "https://example.com/property/13",
    "price": "₹1.00 Crore",
    "perSqftPrice": "₹14,500 per sq.ft.",
    "emi": "₹75,000/Month",
    "builtUp": "850 sqft",
    "facing": "North",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.527000",
    "longitude": "77.216000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 14,
    "city": "Delhi",
    "locality": "Saket",
    "name": "3 BHK Duplex In Saket - Property 14",
    "address": "Address 14, Saket, Delhi",
    "link": "https://example.com/property/14",
    "price": "₹2.20 Crores",
    "perSqftPrice": "₹18,000 per sq.ft.",
    "emi": "₹1.25 Lacs/Month",
    "builtUp": "1,500 sqft",
    "facing": "South-East",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.528000",
    "longitude": "77.217000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 15,
    "city": "Delhi",
    "locality": "Saket",
    "name": "1 BHK Studio In Saket - Property 15",
    "address": "Address 15, Saket, Delhi",
    "link": "https://example.com/property/15",
    "price": "₹40 Lacs",
    "perSqftPrice": "₹8,000 per sq.ft.",
    "emi": "₹19,000/Month",
    "builtUp": "420 sqft",
    "facing": "North-West",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.529000",
    "longitude": "77.218000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 16,
    "city": "Delhi",
    "locality": "Saket",
    "name": "2 BHK Penthouse In Saket - Property 16",
    "address": "Address 16, Saket, Delhi",
    "link": "https://example.com/property/16",
    "price": "₹3 Crores",
    "perSqftPrice": "₹20,000 per sq.ft.",
    "emi": "₹1.50 Lacs/Month",
    "builtUp": "1,700 sqft",
    "facing": "East",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.530000",
    "longitude": "77.219000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 17,
    "city": "Delhi",
    "locality": "Saket",
    "name": "3 BHK Villa In Saket - Property 17",
    "address": "Address 17, Saket, Delhi",
    "link": "https://example.com/property/17",
    "price": "₹4.5 Crores",
    "perSqftPrice": "₹22,000 per sq.ft.",
    "emi": "₹2 Lacs/Month",
    "builtUp": "2,000 sqft",
    "facing": "South",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.531000",
    "longitude": "77.220000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 18,
    "city": "Delhi",
    "locality": "Saket",
    "name": "1 BHK Condo In Saket - Property 18",
    "address": "Address 18, Saket, Delhi",
    "link": "https://example.com/property/18",
    "price": "₹50 Lacs",
    "perSqftPrice": "₹10,000 per sq.ft.",
    "emi": "₹25,000/Month",
    "builtUp": "500 sqft",
    "facing": "West",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.532000",
    "longitude": "77.221000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 19,
    "city": "Delhi",
    "locality": "Saket",
    "name": "2 BHK Apartment In Saket - Property 19",
    "address": "Address 19, Saket, Delhi",
    "link": "https://example.com/property/19",
    "price": "₹1.30 Crores",
    "perSqftPrice": "₹15,500 per sq.ft.",
    "emi": "₹80,000/Month",
    "builtUp": "950 sqft",
    "facing": "North-East",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.533000",
    "longitude": "77.222000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 20,
    "city": "Delhi",
    "locality": "Saket",
    "name": "3 BHK Flat In Saket - Property 20",
    "address": "Address 20, Saket, Delhi",
    "link": "https://example.com/property/20",
    "price": "₹2 Crores",
    "perSqftPrice": "₹16,000 per sq.ft.",
    "emi": "₹1.35 Lacs/Month",
    "builtUp": "1,400 sqft",
    "facing": "South-West",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.534000",
    "longitude": "77.223000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 21,
    "city": "Delhi",
    "locality": "Saket",
    "name": "1 BHK Apartment In Saket - Property 21",
    "address": "Address 21, Saket, Delhi",
    "link": "https://example.com/property/21",
    "price": "₹42 Lacs",
    "perSqftPrice": "₹8,800 per sq.ft.",
    "emi": "₹21,000/Month",
    "builtUp": "430 sqft",
    "facing": "North",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.535000",
    "longitude": "77.224000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 22,
    "city": "Delhi",
    "locality": "Saket",
    "name": "2 BHK Condo In Saket - Property 22",
    "address": "Address 22, Saket, Delhi",
    "link": "https://example.com/property/22",
    "price": "₹1.40 Crores",
    "perSqftPrice": "₹15,800 per sq.ft.",
    "emi": "₹85,000/Month",
    "builtUp": "980 sqft",
    "facing": "East",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.536000",
    "longitude": "77.225000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 23,
    "city": "Delhi",
    "locality": "Saket",
    "name": "3 BHK Villa In Saket - Property 23",
    "address": "Address 23, Saket, Delhi",
    "link": "https://example.com/property/23",
    "price": "₹4.8 Crores",
    "perSqftPrice": "₹23,000 per sq.ft.",
    "emi": "₹2.15 Lacs/Month",
    "builtUp": "2,100 sqft",
    "facing": "South",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.537000",
    "longitude": "77.226000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 24,
    "city": "Delhi",
    "locality": "Saket",
    "name": "1 BHK Studio In Saket - Property 24",
    "address": "Address 24, Saket, Delhi",
    "link": "https://example.com/property/24",
    "price": "₹38 Lacs",
    "perSqftPrice": "₹8,200 per sq.ft.",
    "emi": "₹18,500/Month",
    "builtUp": "410 sqft",
    "facing": "West",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.538000",
    "longitude": "77.227000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 25,
    "city": "Delhi",
    "locality": "Saket",
    "name": "2 BHK Apartment In Saket - Property 25",
    "address": "Address 25, Saket, Delhi",
    "link": "https://example.com/property/25",
    "price": "₹1.50 Crores",
    "perSqftPrice": "₹16,200 per sq.ft.",
    "emi": "₹90,000/Month",
    "builtUp": "1,000 sqft",
    "facing": "North-East",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.539000",
    "longitude": "77.228000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 26,
    "city": "Delhi",
    "locality": "Saket",
    "name": "3 BHK Duplex In Saket - Property 26",
    "address": "Address 26, Saket, Delhi",
    "link": "https://example.com/property/26",
    "price": "₹2.75 Crores",
    "perSqftPrice": "₹18,500 per sq.ft.",
    "emi": "₹1.40 Lacs/Month",
    "builtUp": "1,550 sqft",
    "facing": "South-East",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.540000",
    "longitude": "77.229000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 27,
    "city": "Delhi",
    "locality": "Saket",
    "name": "1 BHK Condo In Saket - Property 27",
    "address": "Address 27, Saket, Delhi",
    "link": "https://example.com/property/27",
    "price": "₹47 Lacs",
    "perSqftPrice": "₹9,200 per sq.ft.",
    "emi": "₹23,000/Month",
    "builtUp": "460 sqft",
    "facing": "North-West",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.541000",
    "longitude": "77.230000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 28,
    "city": "Delhi",
    "locality": "Saket",
    "name": "2 BHK Apartment In Saket - Property 28",
    "address": "Address 28, Saket, Delhi",
    "link": "https://example.com/property/28",
    "price": "₹1.60 Crores",
    "perSqftPrice": "₹16,800 per sq.ft.",
    "emi": "₹95,000/Month",
    "builtUp": "1,020 sqft",
    "facing": "East",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.542000",
    "longitude": "77.231000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 29,
    "city": "Delhi",
    "locality": "Saket",
    "name": "3 BHK Villa In Saket - Property 29",
    "address": "Address 29, Saket, Delhi",
    "link": "https://example.com/property/29",
    "price": "₹5 Crores",
    "perSqftPrice": "₹24,000 per sq.ft.",
    "emi": "₹2.25 Lacs/Month",
    "builtUp": "2,200 sqft",
    "facing": "South",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.543000",
    "longitude": "77.232000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 30,
    "city": "Delhi",
    "locality": "Saket",
    "name": "1 BHK Studio In Saket - Property 30",
    "address": "Address 30, Saket, Delhi",
    "link": "https://example.com/property/30",
    "price": "₹39 Lacs",
    "perSqftPrice": "₹8,300 per sq.ft.",
    "emi": "₹19,500/Month",
    "builtUp": "415 sqft",
    "facing": "West",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.544000",
    "longitude": "77.233000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 31,
    "city": "Delhi",
    "locality": "Saket",
    "name": "2 BHK Penthouse In Saket - Property 31",
    "address": "Address 31, Saket, Delhi",
    "link": "https://example.com/property/31",
    "price": "₹3.20 Crores",
    "perSqftPrice": "₹20,500 per sq.ft.",
    "emi": "₹1.55 Lacs/Month",
    "builtUp": "1,750 sqft",
    "facing": "North-East",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.545000",
    "longitude": "77.234000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  },
  {
    "lstId": 32,
    "city": "Delhi",
    "locality": "Saket",
    "name": "3 BHK Apartment In Saket - Property 32",
    "address": "Address 32, Saket, Delhi",
    "link": "https://example.com/property/32",
    "price": "₹2.90 Crores",
    "perSqftPrice": "₹17,800 per sq.ft.",
    "emi": "₹1.40 Lacs/Month",
    "builtUp": "1,450 sqft",
    "facing": "South-West",
    "apartmentType": null,
    "bathrooms": null,
    "parking": null,
    "image": ["https://via.placeholder.com/150"],
    "latitude": "28.546000",
    "longitude": "77.235000",
    "possessionStatus": null,
    "possessionDate": null,
    "agentName": null,
    "description": null,
    "source": "NoBroker",
    "createdAt": "2025-02-12T18:03:27.354Z",
    "updatedAt": "2025-02-12T18:03:27.354Z"
  }
];
const RealEstateSearch = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "homescanner",
      text: "Welcome to Homescanner! Where are you looking to find properties today?<br/><span style='color:Brown;'>This is a demo version of the product. Please register for early access.<br/>Currently serving invite only to limited users, be an early applicant!</span>"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [propertyListings, setPropertyListings] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mapCenter, setMapCenter] = useState([28.6139, 77.2090]);
  const [mapZoom, setMapZoom] = useState(12);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [showShortlistedButton, setShowShortlistedButton] = useState(false);
  const [showPropertyMarkers, setShowPropertyMarkers] = useState(false);
  const [hasDateTime, setHasDateTime] = useState(false);
  const chatContainerRef = useRef(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setMapCenter([latitude, longitude]);
          setMapZoom(14);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  }, []);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchQuery
        )}&city=Delhi&country=India`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setMapCenter([parseFloat(lat), parseFloat(lon)]);
        setMapZoom(14);
      }
    } catch (error) {
      console.error("Geocoding error:", error);
    }
  };
  const queryGemini = async (prompt) => {
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      return '{"city": "Delhi", "locality": "Saket", "latitude": "28.6139", "longitude": "77.2090", "certainty": "high", "needsClarification": false}';
    }
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        }
      );
      const data = await response.json();
      return (
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || ""
      );
    } catch (error) {
      console.error("API error:", error);
      return '{"city": "Delhi", "locality": "Saket", "latitude": "28.6139", "longitude": "77.2090", "certainty": "high", "needsClarification": false}';
    }
  };
  const handleGeneralQuery = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    const greetings = [
      "hi",
      "hello",
      "hey",
      "good morning",
      "good afternoon"
    ];
    const identityQuestions = [
      "who are you",
      "developed by",
      "created by",
      "what are you",
      "your name"
    ];
    if (greetings.some((g) => lowerMessage.includes(g))) {
      return "Hello! I'm Homescanner, your AI property assistant. Ready to help you find perfect properties!";
    }
    if (identityQuestions.some((q) => lowerMessage.includes(q))) {
      return "I'm an AI property specialist developed by the Homescanner team to help you find your dream property! 🏠";
    }
    return null;
  };
  const enhanceLocationQuery = async (rawInput) => {
    const enhancementPrompt = `Analyze this real estate query: "${rawInput}". Identify:
1. Primary city (prioritize official names)
2. Primary locality/neighborhood
3. If only locality is given, determine most likely city
4. Provide approximate latitude and longitude for the location

Respond with JSON: { 
  "city": string, 
  "locality"?: string, 
  "latitude": string, 
  "longitude": string, 
  "certainty": "high"|"medium"|"low",
  "needsClarification"?: boolean
}`;
    try {
      const response = await queryGemini(enhancementPrompt);
      const jsonStart = Math.max(response.indexOf("{"), 0);
      const jsonEnd = Math.min(response.lastIndexOf("}") + 1, response.length);
      const locationData = JSON.parse(response.slice(jsonStart, jsonEnd));
      if (!locationData.latitude || !locationData.longitude) {
        locationData.latitude = "28.6139";
        locationData.longitude = "77.2090";
      }
      return locationData;
    } catch (error) {
      return {
        city: "",
        locality: "",
        latitude: "28.6139",
        longitude: "77.2090",
        certainty: "low",
        needsClarification: true
      };
    }
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const getDistance = (lat1, lng1, lat2, lng2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };
  const simulateProcessingSteps = async (listings, hasDateTimeInfo) => {
    const randomBetween = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const totalFound = randomBetween(500, 700);
    const sourcesFound = randomBetween(12, 15);
    setChatMessages((prev) => [
      ...prev,
      {
        sender: "homescanner",
        text: "Processing: Comparing property details across different platforms..."
      }
    ]);
    await delay(6000);
    setChatMessages((prev) => [
      ...prev,
      {
        sender: "homescanner",
        text: `Found ${totalFound} properties from ${sourcesFound} sources`
      }
    ]);
    await delay(6000);
    setChatMessages((prev) => [
      ...prev,
      { sender: "homescanner", text: "Processing: Checking for duplicate properties..." }
    ]);
    await delay(6000);
    setChatMessages((prev) => [
      ...prev,
      { sender: "homescanner", text: "Processing: Finalising best properties..." }
    ]);
    await delay(6000);
    const shortlistSources = randomBetween(5, 12);
    setChatMessages((prev) => [
      ...prev,
      {
        sender: "homescanner",
        text: `Shortlisted ${listings.length} properties from ${shortlistSources} sources`
      }
    ]);
    setShowPropertyMarkers(true);
    await delay(6000);
    setChatMessages((prev) => [
      ...prev,
      {
        sender: "homescanner",
        text: `Adding ${listings.length} properties to shortlist section...`
      }
    ]);
    await delay(6000);
    setShowShortlistedButton(true);
    setChatMessages((prev) => [
      ...prev,
      {
        sender: "homescanner",
        text: "Shortlisted properties ready. Click the 'View Shortlisted' button to see details."
      }
    ]);
    await delay(6000);
    setChatMessages((prev) => [
      ...prev,
      { sender: "homescanner", text: "Processing: Getting contact details of all the listings..." }
    ]);
    await delay(6000);
    setChatMessages((prev) => [
      ...prev,
      { sender: "homescanner", text: "Processing: Calling all brokers and owners..." }
    ]);
    await delay(6000);
    setChatMessages((prev) => [
      ...prev,
      { sender: "homescanner", text: `All ${listings.length} calls initiated` }
    ]);
    await delay(6000);
    const connected = randomBetween(0, listings.length);
    const notResponded = listings.length - connected;
    setChatMessages((prev) => [
      ...prev,
      { sender: "homescanner", text: `Call results: ${connected} connected, ${notResponded} did not respond` }
    ]);
    await delay(6000);
    setChatMessages((prev) => [
      ...prev,
      { sender: "homescanner", text: "Adding all connected call summaries to shortlisted view..." }
    ]);
    await delay(6000);
    if (!hasDateTimeInfo) {
      setChatMessages((prev) => [
        ...prev,
        { sender: "homescanner", text: "Should I arrange a visit to the shortlisted properties?" }
      ]);
      await delay(6000);
    }
    setChatMessages((prev) => [
      ...prev,
      { sender: "homescanner", text: "Processing: Getting locations of all the properties..." }
    ]);
    await delay(6000);
    setChatMessages((prev) => [
      ...prev,
      { sender: "homescanner", text: "Processing: Planning route..." }
    ]);
    await delay(6000);
    setChatMessages((prev) => [
      ...prev,
      { sender: "homescanner", text: "Processing: Optimising route..." }
    ]);
    await delay(6000);
    const connectedListings = listings.slice(0, connected > 0 ? connected : listings.length);
    let sortedListings = connectedListings;
    if (userLocation) {
      sortedListings = connectedListings.slice().sort((a, b) => {
        const distanceA = getDistance(userLocation.lat, userLocation.lng, parseFloat(a.latitude), parseFloat(a.longitude));
        const distanceB = getDistance(userLocation.lat, userLocation.lng, parseFloat(b.latitude), parseFloat(b.longitude));
        return distanceA - distanceB;
      });
    }
    const routeCoords = sortedListings.map((prop) => [
      parseFloat(prop.latitude),
      parseFloat(prop.longitude)
    ]);
    if (routeCoords.length > 0) {
      setRouteCoordinates(routeCoords);
      const avgLat =
        routeCoords.reduce((sum, coord) => sum + coord[0], 0) / routeCoords.length;
      const avgLng =
        routeCoords.reduce((sum, coord) => sum + coord[1], 0) / routeCoords.length;
      setMapCenter([avgLat, avgLng]);
      setMapZoom(13);
      let routeMessage = "Route optimised for connected properties. Visit in the following order:\n";
      sortedListings.forEach((prop, idx) => {
        routeMessage += `${idx + 1}. ${prop.name}\n`;
      });
      setChatMessages((prev) => [
        ...prev,
        { sender: "homescanner", text: routeMessage.trim() }
      ]);
    } else {
      setChatMessages((prev) => [
        ...prev,
        { sender: "homescanner", text: "No connected properties available for route optimisation." }
      ]);
    }
  };
  const handleSendMessage = async () => {
    if (!inputValue.trim() || loading) return;
    const userMessage = inputValue.trim();
    setChatMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInputValue("");
    const generalResponse = handleGeneralQuery(userMessage);
    const dateTimeRegex = /(\d{1,2}:\d{2}\s*(AM|PM|am|pm))|(\d{1,2}\/\d{1,2}\/\d{2,4})/;
    setHasDateTime(dateTimeRegex.test(userMessage));
    if (generalResponse) {
      setChatMessages((prev) => [
        ...prev,
        { sender: "homescanner", text: generalResponse }
      ]);
      return;
    }
    setLoading(true);
    const locationData = await enhanceLocationQuery(userMessage);
    if (locationData.needsClarification || locationData.certainty === "low") {
      const clarificationMessage =
        locationData.city || locationData.locality
          ? `I found ${locationData.locality ? `${locationData.locality} area` : ""}${
              locationData.city ? ` in ${locationData.city}` : ""
            }. Is this correct?`
          : "Could you please specify the city and/or locality? (e.g. '3BHK in Saket, Delhi' or 'Apartments near Marine Drive, Mumbai')";
      setChatMessages((prev) => [
        ...prev,
        { sender: "homescanner", text: clarificationMessage }
      ]);
      setLoading(false);
      return;
    }
    const baseLat = parseFloat(locationData.latitude) || 28.6139;
    const baseLng = parseFloat(locationData.longitude) || 77.2090;
    const listings = dummyData.map((property) => {
      const offsetLat = (Math.random() - 0.5) * 0.02;
      const offsetLng = (Math.random() - 0.5) * 0.02;
      return {
        ...property,
        city: locationData.city || property.city,
        locality: locationData.locality || property.locality,
        latitude: (baseLat + offsetLat).toString(),
        longitude: (baseLng + offsetLng).toString()
      };
    });
    setPropertyListings(listings);
    await simulateProcessingSteps(listings, hasDateTime);
    setLoading(false);
  };
  const handleMarkerClick = (property) => {
    setSelectedProperty(property);
    setChatMessages((prev) => [
      ...prev,
      {
        sender: "homescanner",
        text: `📍 Selected: ${property.name}. Click the card below for full details.`
      }
    ]);
  };
  const handlePropertyClick = (property) => {
    window.open(property.link, "_blank");
  };
  const handleViewShortlisted = () => {
    const count = Math.floor(Math.random() * (30 - 25 + 1)) + 25;
    const shuffled = [...propertyListings].sort(() => Math.random() - 0.5);
    const shortlisted = shuffled.slice(0, count);
    setChatMessages((prev) => [
      ...prev,
      { sender: "homescanner", text: "Shortlisted Properties:" }
    ]);
    shortlisted.forEach((property, idx) => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "homescanner",
          text: `${idx + 1}. ${property.name} - ${property.address} - ${property.price}`
        }
      ]);
    });
  };
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 w-full h-1/2 md:h-full relative">
        <div className="absolute top-4 right-4 z-[1000] bg-white p-2 rounded shadow-md space-y-2">
          <select className="w-full p-1 border rounded">
            <option>Delhi</option>
          </select>
          <input
            type="text"
            className="w-full p-1 border rounded"
            placeholder="Search areas in Delhi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <DynamicMapContainer center={mapCenter} zoom={mapZoom} className="h-full w-full">
          <RecenterAutomatically center={mapCenter} zoom={mapZoom} />
          <DynamicTileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {showPropertyMarkers &&
            propertyListings.map((property, index) => (
              <DynamicMarker
                key={index}
                position={[
                  parseFloat(property.latitude),
                  parseFloat(property.longitude)
                ]}
                eventHandlers={{ click: () => handleMarkerClick(property) }}
              >
                <DynamicPopup className="font-semibold">
                  {property.name}
                </DynamicPopup>
              </DynamicMarker>
            ))}
          {routeCoordinates.length > 0 && (
            <>
              {routeCoordinates.map((coord, idx) => (
                <DynamicMarker key={idx} position={coord}>
                  <DynamicPopup>Route Point {idx + 1}</DynamicPopup>
                </DynamicMarker>
              ))}
              <DynamicPolyline positions={routeCoordinates} color="red" />
            </>
          )}
          {userLocation && L && (
            <DynamicMarker
              position={[userLocation.lat, userLocation.lng]}
              icon={L.icon({
                iconUrl:
                  "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl:
                  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
                shadowSize: [41, 41]
              })}
            >
              <DynamicPopup>Your Current Location</DynamicPopup>
            </DynamicMarker>
          )}
        </DynamicMapContainer>
      </div>
      <div className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col bg-gray-100">
        <div className="flex-grow p-4 overflow-y-auto" ref={chatContainerRef}>
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-4 ${
                msg.sender === "homescanner"
                  ? msg.text.startsWith("Processing:")
                    ? "text-gray-500"
                    : "text-blue-700"
                  : "text-green-700"
              }`}
            >
              <p className="font-semibold">
                {msg.sender === "homescanner" ? "Homescanner" : "You"}
              </p>
              <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: msg.text }}></div>
            </div>
          ))}
          {selectedProperty && (
            <div
              className="p-4 border rounded bg-white cursor-pointer hover:shadow-lg mt-4"
              onClick={() => handlePropertyClick(selectedProperty)}
            >
              <h2 className="text-lg font-bold text-blue-800">
                {selectedProperty.name}
              </h2>
              <p className="mt-2">
                <strong>📍 Address:</strong> {selectedProperty.address}
              </p>
              <p>
                <strong>💰 Price:</strong> {selectedProperty.price}
              </p>
              <p>
                <strong>📏 Size:</strong> {selectedProperty.builtUp}
              </p>
              {selectedProperty.description && (
                <p className="mt-2 text-gray-600">
                  {selectedProperty.description}
                </p>
              )}
            </div>
          )}
          {showShortlistedButton && (
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              onClick={handleViewShortlisted}
            >
              View Shortlisted
            </button>
          )}
        </div>
        <div className="p-4 border-t sticky bottom-0 bg-gray-100">
          <div className="flex">
            <input
              type="text"
              className="flex-grow border rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="e.g. '2BHK in Saket' or 'Luxury apartments Mumbai'..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-r hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "🔍 Searching..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RealEstateSearch;
