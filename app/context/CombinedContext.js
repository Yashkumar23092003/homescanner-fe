"use client";
import { createContext, useContext, useState } from "react";

const sampleDataList = [
  {
    location: "Mumbai",
    coordinates: "72.87 E, 19.07 N",
    address: "A-12, Bandra West, Mumbai, 400050",
    totalArea: "0.030 Dc = 1350 Sq Ft",
    details: ["Metro", "School", "Mall", "Police Station", "Hospital", "Map", "Media"],
  },
  {
    location: "Bangalore",
    coordinates: "77.59 E, 12.97 N",
    address: "No. 45, MG Road, Bangalore, 560001",
    totalArea: "0.025 Dc = 1125 Sq Ft",
    details: ["Metro", "School", "Govt Office", "IT Park", "Hospital", "Map", "Cafe"],
  },
];

const CombinedContext = createContext();
const AuthContext = createContext();

export const CombinedProvider = ({ children }) => {
  const [shortlistedProperties, setShortlistedProperties] = useState([]);
  const [favorites, setFavorites] = useState(sampleDataList);

  const addToShortlist = (property) => {
    if (!shortlistedProperties.some((p) => p.name === property.name)) {
      setShortlistedProperties([...shortlistedProperties, property]);
    }
  };

  const removeFromShortlist = (property) => {
    setShortlistedProperties(shortlistedProperties.filter((p) => p.name !== property.name));
  };

  const isShortlisted = (property) => {
    return shortlistedProperties.some((p) => p.name === property.name);
  };

  const addToFavorites = (item) => {
    if (!favorites.some((fav) => fav.location === item.location)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorites = (location) => {
    setFavorites(favorites.filter((item) => item.location !== location));
  };

  return (
    <CombinedContext.Provider
      value={{
        shortlistedProperties,
        addToShortlist,
        removeFromShortlist,
        isShortlisted,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </CombinedContext.Provider>
  );
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useCombinedContext = () => useContext(CombinedContext);
export const useAuthContext = () => useContext(AuthContext);
