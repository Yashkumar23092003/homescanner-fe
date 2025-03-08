"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Loader from "../components/Loader";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";

// Utility function to fix image URL
const fixImageUrl = (url) => {
  const parts = url.split("/images/");
  if (parts.length < 2) return url;
  const idPart = parts[1].split("_")[0];
  return `https://images.nobroker.in/images/${idPart}/${parts[1]}`;
};

/* ---------------------
   Static Components
-----------------------*/

// Add new FilterModal component
const FilterModal = React.memo(({ isOpen, onClose, ...props }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end md:hidden">
      <div className="bg-white w-full max-w-[320px] h-full overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <SidebarContent {...props} />
        </div>
      </div>
    </div>
  );
});

// Update SearchBar component to include filter button
const SearchBar = React.memo(({ searchTerm, setSearchTerm, handleSearch, onFilterClick }) => (
  <div className="flex justify-center pt-4 pb-2 px-4">
    <div className="flex items-center w-full max-w-[40rem] text-lg border border-black rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search by locality, property name, etc."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-4 py-2 focus:outline-none border-none"
      />
      <button
        className="md:hidden px-4 py-2 border-l border-black"
        onClick={onFilterClick}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </button>
      <button
        className="px-6 py-2 bg-[#D9D9D9] text-black border-l border-black"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  </div>
));

// Update Sidebar component styles to show on desktop
const Sidebar = React.memo(({ ...props }) => (
  <aside className="hidden md:block w-2/5 h-fit pr-6 border mr-5 rounded-xl border-gray-500">
    <SidebarContent {...props} />
  </aside>
));

// Create a new SidebarContent component to share between Sidebar and FilterModal
const SidebarContent = React.memo(({
  selectedBHK,
  handleBHKChange,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  newBuilder,
  setNewBuilder,
  propertyStatus,
  setPropertyStatus,
  furnishing,
  handleFurnishingChange,
  propertyTypes,
  handlePropertyTypeChange,
}) => (
  <>
    {/* BHK Filter */}
    <div className="bg-white rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2 border-b pb-1">BHK Type</h3>
      <div className="flex flex-wrap gap-2">
        {["1", "2", "3", "4"].map((bhk) => (
          <button
            key={bhk}
            onClick={() => handleBHKChange(bhk)}
            className={`flex items-center text-center p-2 rounded-md ${
              selectedBHK.includes(bhk) ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {bhk} BHK
          </button>
        ))}
      </div>
    </div>
    {/* Price Range Filter */}
    <div className="bg-white rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2 border-b pb-1">Price Range</h3>
      <p className="text-sm text-gray-700 mb-4">
        {minPrice} Cr - {maxPrice} Cr
      </p>
      <div className="relative h-2">
        {/* Full track background */}
        <div className="absolute w-full h-2 rounded-full" style={{ background: "#e5e7eb" }}></div>
        {/* Active range track */}
        <div
          className="absolute h-2 rounded-full"
          style={{
            left: `${(minPrice / 10) * 100}%`,
            width: `${((maxPrice - minPrice) / 10) * 100}%`,
            background: "#3b82f6",
          }}
        ></div>
        {/* Minimum price slider */}
        <input
          type="range"
          min="0"
          max={maxPrice} // prevent min slider from exceeding maxPrice
          step="1"
          value={minPrice}
          onChange={(e) => setMinPrice(parseFloat(e.target.value))}
          className="absolute w-full h-2 appearance-none cursor-pointer focus:outline-none
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 
            [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full"
          style={{ 
            background: "transparent", 
            zIndex: maxPrice - minPrice < 1 ? 5 : 3 
          }}
        />
        {/* Maximum price slider */}
        <input
          type="range"
          min={minPrice} // prevent max slider from going below minPrice
          max="10"
          step="1"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
          className="absolute w-full h-2 appearance-none cursor-pointer focus:outline-none
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 
            [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full"
          style={{ background: "transparent", zIndex: 4 }}
        />
      </div>
    </div>
    {/* New Builder Filter */}
    <div className="bg-white rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2 border-b pb-1">New Builder Projects</h3>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={newBuilder}
          onChange={(e) => setNewBuilder(e.target.checked)}
        />
        New Builder Project
      </label>
    </div>
    {/* Property Status Filter */}
    <div className="bg-white rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2 border-b pb-1">Property Status</h3>
      <label className="flex items-center mb-2">
        <input
          type="radio"
          name="status"
          value="underConstruction"
          checked={propertyStatus === "underConstruction"}
          onChange={(e) => setPropertyStatus(e.target.value)}
          className="mr-2"
        />
        Under Construction
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="status"
          value="ready"
          checked={propertyStatus === "ready"}
          onChange={(e) => setPropertyStatus(e.target.value)}
          className="mr-2"
        />
        Ready
      </label>
    </div>
    {/* Furnishing Filter */}
    <div className="bg-white rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2 border-b pb-1">Furnishing</h3>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={furnishing.includes("full")}
          onChange={() => handleFurnishingChange("full")}
          className="mr-2"
        />
        Full
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={furnishing.includes("partial")}
          onChange={() => handleFurnishingChange("partial")}
          className="mr-2"
        />
        Partial
      </label>
    </div>
    {/* Property Type Filter */}
    <div className="bg-white rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2 border-b pb-1">Property Type</h3>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={propertyTypes.includes("apartment")}
          onChange={() => handlePropertyTypeChange("apartment")}
          className="mr-2"
        />
        Apartment
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={propertyTypes.includes("independent")}
          onChange={() => handlePropertyTypeChange("independent")}
          className="mr-2"
        />
        Independent House/Villa
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={propertyTypes.includes("gated")}
          onChange={() => handlePropertyTypeChange("gated")}
          className="mr-2"
        />
        Gated Community/Villa
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={propertyTypes.includes("standalone")}
          onChange={() => handlePropertyTypeChange("standalone")}
          className="mr-2"
        />
        Standalone Building
      </label>
    </div>
  </>
));

// Update PropertyList component styles
const PropertyList = React.memo(({
  property,
  fixImageUrl,
  isLoading,
  notFound,
  handlePrevPage,
  handleNextPage,
  page,
  pageNumbers,
  setPage,
}) => {
  const [shortlistedItems, setShortlistedItems] = useState(JSON.parse(localStorage.getItem("shortlisted")) || []);

  const handleShortlist = (item) => {
    let updatedShortlisted = [...shortlistedItems];
    if (updatedShortlisted.some((p) => p.lstId === item.lstId)) {
      updatedShortlisted = updatedShortlisted.filter((p) => p.lstId !== item.lstId);
    } else {
      updatedShortlisted.push(item);
    }
    setShortlistedItems(updatedShortlisted);
    localStorage.setItem("shortlisted", JSON.stringify(updatedShortlisted));
  };

  const isShortlisted = (item) => {
    return shortlistedItems.some((p) => p.lstId === item.lstId);
  };

  return (
    <section className="w-full md:w-3/5">
      <div className="mb-4">
        <p className="text-gray-700 text-sm">
          Showing <span className="font-semibold">{property.length}</span> results
        </p>
      </div>
      {isLoading ? (
        <Loader />
      ) : notFound ? (
        <div className="w-full h-3/4">
          <h1 className="text-red-600">No data found</h1>
        </div>
      ) : (

<>
  {property.map((item, index) => (
    <div
      key={index}
      className="relative flex border border-gray-200 rounded-lg mb-4 bg-white shadow-md overflow-hidden"
    >
      {/* Shortlist Icon at Top Right */}
      <button
        onClick={() => handleShortlist(item)}
        className="absolute top-2 right-2 text-gray-600 hover:text-green-600 p-2 rounded-full"
      >
        {isShortlisted(item) ? <img src="/icon/Vector.svg"  className="h-6"/> : <img src="/icon/Vector1.svg"  className="h-6"/>}
      </button>

      {/* Image Section */}
      <div className="w-48 h-36">
        <Image
          alt={item.name}
          src={fixImageUrl(item.image[0])}
          height={200}
          width={200}
          className="object-cover w-full h-full rounded-l-lg"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1 p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.address}</p>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
          <span className="font-medium text-red-600">{item.price}</span>
          <span>{item.perSqftPrice}</span>
          <span>{item.emi}</span>
          <span>{item.builtUp}</span>
          <span>Facing: {item.facing}</span>
        </div>

        {/* Buttons */}
        <div className="flex mt-3 space-x-3">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 text-sm"
          >
            Know More
          </a>
        </div>
      </div>
    </div>
  ))}
</>

      )}

      {/* Pagination Controls */}
      {!isLoading && !notFound && (
        <div className="flex justify-center space-x-2 mt-4">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-300 text-black rounded disabled:opacity-50"
          >
            Previous
          </button>
          {pageNumbers.map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-3 py-1 rounded ${
                page === num ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
              }`}
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={property.length < 10}
            className="px-3 py-1 bg-gray-300 text-black rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
});

export default function SearchPage() {
  // Filter & Pagination States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBHK, setSelectedBHK] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10);
  const [newBuilder, setNewBuilder] = useState(false);
  const [propertyStatus, setPropertyStatus] = useState("");
  const [furnishing, setFurnishing] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [property, setProperty] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Fetch properties based on current filters and pagination
  const getProperties = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/searchInlistings`, {
        params: {
          page,
          limit: 10,
          searchText: searchTerm,
          selectedBHK: selectedBHK.join(','),
          minPrice,
          maxPrice,
          newBuilder,
          propertyStatus,
          furnishing: furnishing.join(','),
          propertyTypes: propertyTypes.join(','),
        },
      });
      if (response.status === 200) {
        setProperty(response.data.data);
        console.log(response.data.data);
        setNotFound(response.data.data.length === 0);
      } else if (response.status === 205) {
        setNotFound(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger API call whenever filters, search term, or page change
  useEffect(() => {
    getProperties();
  }, [page, searchTerm, selectedBHK, minPrice, maxPrice, newBuilder, propertyStatus, furnishing, propertyTypes]);

  // Optional: Clear results if the search term is empty
  useEffect(() => {
    if (searchTerm === "") {
      setProperty([]);
      setPage(1);
      setNotFound(false);
    }
  }, [searchTerm]);

  // Manually trigger search (resets page to 1)
  const handleSearch = () => {
    setPage(1);
    getProperties();
  };

  // Handlers for updating filters
  const handleBHKChange = (value) => {
    const bhkValue = value.toString();
    if (selectedBHK.includes(bhkValue)) {
      setSelectedBHK(selectedBHK.filter((v) => v !== bhkValue));
    } else {
      setSelectedBHK([...selectedBHK, bhkValue]);
    }
  };

  const handleFurnishingChange = (value) => {
    if (furnishing.includes(value)) {
      setFurnishing(furnishing.filter((v) => v !== value));
    } else {
      setFurnishing([...furnishing, value]);
    }
  };

  const handlePropertyTypeChange = (value) => {
    if (propertyTypes.includes(value)) {
      setPropertyTypes(propertyTypes.filter((v) => v !== value));
    } else {
      setPropertyTypes([...propertyTypes, value]);
    }
  };

  // Pagination handlers
  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (property.length === 10) setPage(page + 1);
  };

  // Define visible page numbers (5 visible page buttons)
  const maxPageNumbers = 5;
  const halfRange = Math.floor(maxPageNumbers / 2);
  const startPage = page <= halfRange ? 1 : page - halfRange;
  const pageNumbers = Array.from({ length: maxPageNumbers }, (_, i) => startPage + i);

  // Use useLayoutEffect to scroll to top as soon as the DOM updates
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        onFilterClick={() => setIsFilterOpen(true)}
      />
      <main className="flex flex-col md:flex-row px-4 md:px-8 py-6">
        <Sidebar
          selectedBHK={selectedBHK}
          handleBHKChange={handleBHKChange}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          newBuilder={newBuilder}
          setNewBuilder={setNewBuilder}
          propertyStatus={propertyStatus}
          setPropertyStatus={setPropertyStatus}
          furnishing={furnishing}
          handleFurnishingChange={handleFurnishingChange}
          propertyTypes={propertyTypes}
          handlePropertyTypeChange={handlePropertyTypeChange}
        />
        <FilterModal 
          isOpen={isFilterOpen} 
          onClose={() => setIsFilterOpen(false)}
          selectedBHK={selectedBHK}
          handleBHKChange={handleBHKChange}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          newBuilder={newBuilder}
          setNewBuilder={setNewBuilder}
          propertyStatus={propertyStatus}
          setPropertyStatus={setPropertyStatus}
          furnishing={furnishing}
          handleFurnishingChange={handleFurnishingChange}
          propertyTypes={propertyTypes}
          handlePropertyTypeChange={handlePropertyTypeChange}
        />
        <PropertyList
          property={property}
          fixImageUrl={fixImageUrl}
          isLoading={isLoading}
          notFound={notFound}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          page={page}
          pageNumbers={pageNumbers}
          setPage={setPage}
        />
      </main>
    </div>
  );
}
