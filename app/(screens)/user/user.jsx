"use client";
import React, { useState, useRef, useEffect } from "react";
import { User, Pencil, Check, Trash2, ChevronDown, ChevronUp } from "lucide-react";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editField, setEditField] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const dropdownRef = useRef(null);

  const sampleData = {
    location: "New Delhi",
    coordinates: "82.88 N, 22.22 E",
    address: "B-40, Jia Sarai, IIT Delhi Main Road, Hauz Khas, New Delhi, 110011",
    totalArea: "0.020 Dc = 900 Sq Ft",
    details: ["Metro", "School", "Govt Office", "Police Station", "Hospital", "Map", "Media"],
  };

  const [user, setUser] = useState({
    image: "https://plus.unsplash.com/premium_photo-1689606093808-3cb4393248d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    name: "Property User",
    mobile: "+91 9876543210",
    email: "properyuser@gmail.com",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setEditField(null);
        setShowDetails(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Delete profile (reset user data)
  const handleDelete = () => {
    setUser({
      image: "",
      name: "Deleted User",
      mobile: "",
      email: "",
    });
    setIsOpen(false);
  };

  return (
    <div className="relative z-[9999]">
      <User className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div ref={dropdownRef} className="absolute z-[9999] right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 border">
          <img src={user.image || "https://via.placeholder.com/64"} alt="User" className="w-16 h-16 rounded-full mx-auto" />

          {/* Name Field */}
          <div className="flex items-center gap-2 justify-between mt-3">
            {editField === "name" ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full p-1 border rounded"
              />
            ) : (
              <h3 className="text-lg font-semibold">{user.name}</h3>
            )}
            <button onClick={() => setEditField(editField === "name" ? null : "name")}>
              {editField === "name" ? <Check size={16} /> : <Pencil size={16} />}
            </button>
          </div>

          {/* Mobile Field */}
          <div className="flex items-center gap-2 justify-between mt-2">
            {editField === "mobile" ? (
              <input
                type="text"
                name="mobile"
                value={user.mobile}
                onChange={handleChange}
                className="w-full p-1 border rounded"
              />
            ) : (
              <p className="text-sm text-gray-600">{user.mobile}</p>
            )}
            <button onClick={() => setEditField(editField === "mobile" ? null : "mobile")}>
              {editField === "mobile" ? <Check size={16} /> : <Pencil size={16} />}
            </button>
          </div>

          {/* Email Field */}
          <div className="flex items-center gap-2 justify-between mt-2">
            {editField === "email" ? (
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full p-1 border rounded"
              />
            ) : (
              <p className="text-sm text-gray-600">{user.email}</p>
            )}
            <button onClick={() => setEditField(editField === "email" ? null : "email")}>
              {editField === "email" ? <Check size={16} /> : <Pencil size={16} />}
            </button>
          </div>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            <Trash2 size={16} /> Delete Profile
          </button>

          {/* Sample Data Dropdown */}
          <button
            className="mt-3 w-full flex items-center justify-between bg-gray-200 text-gray-700 py-2 px-3 rounded hover:bg-gray-300"
            onClick={() => setShowDetails(!showDetails)}
          >
            Address {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showDetails && (
            <div className="mt-3 p-3 border rounded bg-gray-100 text-left">
              <h2 className="text-lg font-bold">{sampleData.location}</h2>
              <p><strong>Coordinates:</strong> {sampleData.coordinates}</p>
              <p><strong>Address:</strong> {sampleData.address}</p>
              {/* <p><strong>Total Area:</strong> {sampleData.totalArea}</p> */}
              {/* <p><strong>Details:</strong></p>
              <ul className="list-disc ml-5">
                {sampleData.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
