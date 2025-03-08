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
        <section className="flex flex-col mt-8 bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-5xl text-center font-semibold mb-6 md:mb-9 text-gray-800">
                Top Recommendation for <span className="text-blue-600">You</span>
            </h2>
            
            {/* Scrollable container */}
            <div className="w-full max-w-[100vw] md:max-w-[90vw] mx-auto relative">
                <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 scrollbar-hide">
                    {property && property.map((rec, i) => (
                        <div
                            key={i}
                            className="flex-none w-[280px] md:w-[300px] border border-gray-400 bg-white rounded-lg shadow-md"
                        >
                            <div className="relative h-48 md:h-52">
                                <img
                                    src={fixImageUrl(rec.image[0])}
                                    alt={rec.name}
                                    className="w-full h-full object-cover rounded-t-lg"
                                />
                            </div>
                            <div className="p-4">
                                <h4
                                    className="text-lg font-semibold mb-2 line-clamp-2"
                                    title={rec.name}
                                >
                                    {rec.name}
                                </h4>
                                <p className="text-md text-gray-600 mb-3">{rec.price}</p>
                                <a
                                    href={rec.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full text-center py-2 text-white bg-blue-600 rounded hover:bg-blue-700 text-sm transition-colors"
                                >
                                    Know More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Optional: Add custom scrollbar styling */}
            <style jsx global>{`
                /* Hide scrollbar for Chrome, Safari and Opera */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                /* Hide scrollbar for IE, Edge and Firefox */
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }

                /* Optional: Add smooth scrolling to container */
                .scrollbar-hide {
                    scroll-behavior: smooth;
                    -webkit-overflow-scrolling: touch;
                }
            `}</style>
        </section>
    );
};


export default Top_Recommendation;
