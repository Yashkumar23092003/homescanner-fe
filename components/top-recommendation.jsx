"use client";

import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const fixImageUrl = (url) => {
    const parts = url.split("/images/");
    if (parts.length < 2) return url;
    const idPart = parts[1].split("_")[0];
    return `https://images.nobroker.in/images/${idPart}/${parts[1]}`;
};

const Top_Recommendation = () => {


    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBHK, setSelectedBHK] = useState([]);
    const [priceRange, setPriceRange] = useState(10);
    const [newBuilder, setNewBuilder] = useState(false);
    const [propertyStatus, setPropertyStatus] = useState("");
    const [furnishing, setFurnishing] = useState([]);
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [property, setProperty] = useState([]);
    const [isActive, setIsActive] = useState("");
    const [page, setPage] = useState(1);
    const [isSearching, setIssearching] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [trigger, setTrigger] = useState(true);

    const getProperties = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`/api/searchInlistings`, {
                params: { page, limit: 10, searchText: searchTerm },
            });
            if (response.status === 200) {
                setProperty(response.data.data);
                setNotFound(response.data.data.length === 0);
            } else if (response.status === 205) {
                setNotFound(true);
                setIssearching(false);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch properties when page or trigger changes
    useEffect(() => {
        getProperties();
    }, []);



    return (
        <section className="flex flex-col mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-5xl text-center font-semibold mb-9 text-gray-800">
                Top Recommendation for <span className="text-blue-600">You</span>
            </h2>
            <div className="mx-auto" style={{ width: "calc(16rem * 4 + 1.5rem * 3)" }}>
                <div className="flex space-x-6 overflow-hidden">
                    {property && property.map((rec, i) => (
                        <div
                            key={i}
                            className="border border-gray-400 bg-white w-64 h-[357px] flex-shrink-0 rounded-lg shadow-md"
                        >
                            <img
                                src={fixImageUrl(rec.image[0])}
                                alt={rec.name}
                                className="w-full h-44 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h4
                                    className="text-lg font-semibold mb-2 w-48 line-clamp-2"
                                    title={rec.name}
                                >
                                    {rec.name}
                                </h4>
                                <p className="text-md text-gray-600">{rec.price}</p>
                                <a
                                    href={rec.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-2 px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700 text-sm"
                                >
                                    know more
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Top_Recommendation;
