"use client"; 
import React, { useState } from "react";
import { useCombinedContext } from "@/app/context/CombinedContext";
import GoogleMapComponent from "../map/page";
const ShortlistPage = () => {
  const { shortlistedProperties, removeFromShortlist } = useCombinedContext();
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleImage = (index) => {
    setSelectedPropertyIndex(selectedPropertyIndex === index ? null : index);
  };

  // Filter properties based on search query
  const filteredProperties = shortlistedProperties.filter((property) =>
    `${property.name} ${property.location}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">

      <div className="w-full ">
        <GoogleMapComponent search={true} />
      </div>
    </div>
  );
};

export default ShortlistPage;
