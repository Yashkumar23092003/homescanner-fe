"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { MapPin, Share2 } from "lucide-react"; 
import axios from "axios";

const Map = dynamic(() => import("../map/MapComponent"), { ssr: false });

const fixImageUrl = (url) => {
  const parts = url.split("/images/");
  if (parts.length < 2) return url;
  const idPart = parts[1].split("_")[0];
  return `https://images.nobroker.in/images/${idPart}/${parts[1]}`;
};

export default function ShortlistPage() {
  const [shortlistType, setShortlistType] = useState("manual");
  const [searchLocation, setSearchLocation] = useState("");
  const [copiedPropertyId, setCopiedPropertyId] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [shortListedProperties, setShortListedProperties] = useState([]);
  const [budget, setBudget] = useState("");
  const [bhk, setBhk] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const [openContactDropdown, setOpenContactDropdown] = useState(null);

  const [showSourcesPopup, setShowSourcesPopup] = useState(null);

  useEffect(() => {
    const storedProperties = localStorage.getItem("shortlisted");
    if (shortlistType == "ai") {
      setShortListedProperties([]);
    }
    else if (storedProperties) {
      setShortListedProperties(JSON.parse(storedProperties));
    }
  }, [shortlistType]);
  

  const filteredProperties = shortListedProperties;

  const handleCopy = (property) => {
    const propertyDetails = `${property.price}, ${property.title}, ${property.location}`;
    navigator.clipboard.writeText(propertyDetails);
    setCopiedPropertyId(property.id);
    localStorage.setItem("copiedProperty", JSON.stringify(property));
  };

  const handleUncopy = () => {
    setCopiedPropertyId(null);
    localStorage.removeItem("copiedProperty");
  };

  const handleZoomToLocation = (property) => {
    setSelectedLocation([property.latitude, property.longitude]);
  };

  const handleRemoveProperty = (propertyId) => {
    const updatedProperties = shortListedProperties.filter(property => property.lstId !== propertyId);
    setShortListedProperties(updatedProperties);
    localStorage.setItem("shortlisted", JSON.stringify(updatedProperties));
  };

  const toggleContactDropdown = (propertyId) => {
    setOpenContactDropdown((prev) => (prev === propertyId ? null : propertyId));
  };

  const toggleSourcesPopup = (propertyId) => {
    setShowSourcesPopup((prev) => (prev === propertyId ? null : propertyId));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-6 bg-gray-100 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Shortlists</h2>
          <div
            className="relative w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300"
            onClick={() =>
              setShortlistType(shortlistType === "manual" ? "ai" : "manual")
            }
          >
            <div
              className={`w-6 h-6 rounded-full shadow-md transform transition-all duration-300 ${
                shortlistType === "manual"
                  ? "translate-x-0 bg-yellow-500 border border-yellow-600"
                  : "translate-x-6 bg-blue-500 border border-blue-600"
              }`}
            />
            <span className="absolute left-2 text-xs font-semibold text-gray-700">M</span>
            <span className="absolute right-2 text-xs font-semibold text-gray-700">AI</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by City, Locality"
            className="border p-2 rounded-3xl w-full md:w-2/4"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />

          {/* Budget Filter */}
          <select
            className="border p-2 rounded-3xl w-full md:w-1/4"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Select Budget</option>
            <option value="₹1 Cr">₹1 Cr</option>
            <option value="₹2 Cr">₹2 Cr</option>
            <option value="₹3 Cr">₹3 Cr</option>
            <option value="₹8 Cr">₹8 Cr</option>
          </select>

          {/* BHK Filter */}
          <select
            className="border p-2 rounded-3xl w-full md:w-1/4"
            value={bhk}
            onChange={(e) => setBhk(e.target.value)}
          >
            <option value="">Select BHK</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="Plot">Plot</option>
          </select>

          {/* Property Type Filter */}
          <select
            className="border p-2 rounded-3xl w-full md:w-2/4"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Select Property Type</option>
            <option value="Flat">Flat</option>
            <option value="Apartment">Apartment</option>
            <option value="Plot">Plot</option>
          </select>
        </div>

        {/* PROPERTY LIST */}
        {filteredProperties?.map((property) => (
          <div key={property.id} className="bg-white p-4 rounded shadow mb-4 relative">
            {/* Row container for image and details */}
            <div className="flex flex-row">
              {console.log(property.image && property.image.length > 0 ? fixImageUrl(property.image[0]) : "https://img.squareyards.com/secondaryPortal/IN_638698620300780078-1512241220302030.jpg?aio=w-360;h-210;crop")}
              <Image
                src={property.image && property.image.length > 0 ? fixImageUrl(property.image[0]) : "https://img.squareyards.com/secondaryPortal/IN_638698620300780078-1512241220302030.jpg?aio=w-360;h-210;crop"}
                width={200}
                height={200}
                className="rounded mb-4"
              />
              <div className="ml-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-2xl font-bold pb-2">{property.name}</div>
                    <div className="text-xl font-semibold">{property.price}</div>
                    <div className="text-sm text-gray-600 mt-1">{property.title}</div>
                  </div>
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() => {
                      // Currently does nothing
                    }}
                  >
                    <Share2 size={20} />
                  </button>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                  <div className="font-semibold">
                    Price/SQ.FT: <span className="font-normal">{property.pricePerSqFt || "₹11,670 per sq.ft."}</span>
                  </div>
                  <div className="font-semibold">
                    Built Up: <span className="font-normal">{property.builtUp || "1,311 sqft"}</span>
                  </div>
                  <div className="font-semibold">
                    EMI: <span className="font-normal">{property.emi || '₹1.75 Lacs/Month'}</span>
                  </div>
                  <div className="font-semibold">
                    Facing: <span className="font-normal">{property.facing || "East"}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-2">{property.description || "Are you looking for a spacious and luxurious Flats in the bustling city of Bangalore. Look no further! We present to you a fabulous 3 BHK apartment in the renowned Godrej Lakeside Orchard project on Sarjapur a total area of......."}</p>
              </div>
            </div>

            {/* Button Row */}
            <div className="flex items-center mt-4 gap-3">
              <div className="relative inline-block text-left">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
                  onClick={() => toggleContactDropdown(property.id)}
                >
                  Contact Seller
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {openContactDropdown === property.id && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow z-20">
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                      Call
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                      WhatsApp
                    </button>
                  </div>
                )}
              </div>

              <MapPin
                className="text-blue-500 cursor-pointer hover:scale-110 transition-transform"
                size={24}
                onClick={() => handleZoomToLocation(property)}
              />

              <div className="relative">
                {showSourcesPopup === property.id && (
                  <div className="absolute left-0 mt-2 p-3 w-48 bg-white border rounded shadow z-30">
                    <div className="font-semibold text-sm mb-2">Sources</div>
                    {property.sources.map((src, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <Image
                          src={`/images/${src}.png`}
                          alt={src}
                          width={20}
                          height={20}
                          className="border border-white rounded-full bg-gray-200 mr-2"
                        />
                        <span className="text-gray-700 text-sm">{src}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
                onClick={() => handleRemoveProperty(property.lstId)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/2 bg-gray-300">
        <Map properties={filteredProperties} selectedLocation={selectedLocation} zoom={17} />
      </div>
    </div>
  );
}
