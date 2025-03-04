"use client";
import React, { useState } from "react";
import { MessageSquareMore, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import {useRouter} from "next/navigation"

const initialAgents = [
  {
    id: 1,
    name: "Rahul Sharma",
    time: "9:00 am - 10:00 am",
    locality: "Connaught Place, Delhi",
    visited: false,
  },
  {
    id: 2,
    name: "Keshav Raj",
    time: "4:30 pm - 5:30 pm",
    locality: "Hauz khas, New-Delhi",
    visited: false,
  },
  {
    id: 3,
    name: "Ananya Verma",
    time: "10:30 am - 11:30 am",
    locality: "Indiranagar, Bangalore",
    visited: false,
  },
  {
    id: 4,
    name: "Vikram Malhotra",
    time: "12:00 pm - 1:00 pm",
    locality: "Bandra West, Mumbai",
    visited: false,
  },
  {
    id: 5,
    name: "Sneha Nair",
    time: "2:00 pm - 3:00 pm",
    locality: "T Nagar, Chennai",
    visited: false,
  },
  {
    id: 6,
    name: "Amitabh Sinha",
    time: "3:30 pm - 4:30 pm",
    locality: "Salt Lake, Kolkata",
    visited: false,
  },
  {
    id: 7,
    name: "Pooja Desai",
    time: "4:00 pm - 5:00 pm",
    locality: "Satellite, Ahmedabad",
    visited: false,
  },
  {
    id: 8,
    name: "Rohan Khanna",
    time: "5:30 pm - 6:30 pm",
    locality: "Koregaon Park, Pune",
    visited: false,
  },
  {
    id: 9,
    name: "Meera Joshi",
    time: "7:00 pm - 8:00 pm",
    locality: "Banjara Hills, Hyderabad",
    visited: false,
  },
];

const Connect = () => {
 
  // Agents state
  const [agents, setAgents] = useState(initialAgents);
  // Tab state: either "Scheduled" or "Visited"
  const [activeTab, setActiveTab] = useState("Scheduled");

  // Filter state variables
  const [filterName, setFilterName] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterBHK, setFilterBHK] = useState("");
  const [filterPropertyType, setFilterPropertyType] = useState("");

  // Toggle the visited status for a specific agent
  const toggleVisited = (id) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === id ? { ...agent, visited: !agent.visited } : agent
      )
    );
  };

  // Filter agents based on filter inputs
  const filteredAgents = agents.filter((agent) => {
    const matchesName = agent.name.toLowerCase().includes(filterName.toLowerCase());
    const matchesCity = filterCity
      ? agent.locality.toLowerCase().includes(filterCity.toLowerCase())
      : true;
    // For demonstration, these always return true.
    const matchesBHK = true;
    const matchesPropertyType = true;
    return matchesName && matchesCity && matchesBHK && matchesPropertyType;
  });

  // Split agents into Scheduled and Visited based on their visited flag
  const scheduledAgents = filteredAgents.filter((agent) => !agent.visited);
  const visitedAgents = filteredAgents.filter((agent) => agent.visited);

  return (
    <div className="w-full my-9 flex flex-col items-center">
      {/* Tabs */}
      <div className="w-full h-fit py-2 flex flex-row justify-center items-center">
        <div className="flex flex-row w-fit">
          <div
            onClick={() => setActiveTab("Scheduled")}
            className={`w-[120px] text-center p-3 rounded-s-full cursor-pointer ${
              activeTab === "Scheduled" ? "bg-[#6fc140]" : "bg-gray-300"
            }`}
            style={{ border: "1px solid black" }}
          >
            Scheduled
          </div>
          <div
            onClick={() => setActiveTab("Visited")}
            className={`w-[120px] text-center p-3 rounded-e-full cursor-pointer ${
              activeTab === "Visited" ? "bg-[#6fc140]" : "bg-gray-300"
            }`}
            style={{ border: "1px solid black" }}
          >
            Visited
          </div>
        </div>
      </div>

      {/* Filter Inputs */}
      <div className="my-4 flex flex-wrap justify-center gap-2">
        <input
          type="text"
          placeholder="Name of the seller"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          className="rounded-full p-2 border"
        />
        <select
          name="city"
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
          className="p-2 border rounded-2xl"
        >
          <option value="">City</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
        </select>
        <select
          name="bhk"
          value={filterBHK}
          onChange={(e) => setFilterBHK(e.target.value)}
          className="py-2 px-7 border rounded-2xl"
        >
          <option value="">BHK</option>
          <option value="1BHK">1BHK</option>
          <option value="2BHK">2BHK</option>
          <option value="3BHK">3BHK</option>
        </select>
        <select
          name="propertyType"
          value={filterPropertyType}
          onChange={(e) => setFilterPropertyType(e.target.value)}
          className="py-2 px-7 border rounded-2xl"
        >
          <option value="">Property Type</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>

      {/* Render only the active tab */}
      {activeTab === "Scheduled" && (
        <div className="w-full my-8">

          {/* <h2 className="text-2xl font-bold mb-4">Scheduled</h2> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
            {scheduledAgents.map((agent) => (
              <AgentBox
                key={agent.id}
                name={agent.name}
                time={agent.time}
                locality={agent.locality}
                visited={agent.visited}
                toggleVisited={() => toggleVisited(agent.id)}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === "Visited" && (
        <div className="w-full my-8">

          {/* <h2 className="text-2xl font-bold mb-4">Visited</h2> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
            {visitedAgents.map((agent) => (
              <AgentBox
                key={agent.id}
                name={agent.name}
                time={agent.time}
                locality={agent.locality}
                visited={agent.visited}
                toggleVisited={() => toggleVisited(agent.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Connect;

const AgentBox = ({ name, time, locality, visited, toggleVisited }) => {
  const router = useRouter()
  return (
    
<div className="p-5 w-full sm:w-[320px] md:w-[450px] mx-auto bg-[#d9d9d9] shadow-md rounded-xl hover:cursor-pointer hover:bg-[#a29b9b] "
      onClick={() => {
        router.push("/connect/broker-property")
      }}
    >
    {/* <div className="p-5 w-full sm:w-[320px] md:w-[450px] mx-auto bg-[#d9d9d9] shadow-md rounded-xl"> */}
    <div>
      <div className="flex flex-col content-center md:justify-between gap-4">

        <span className="text-xl font-semibold text-center">{name}</span>
        <span className="text-center">Locality: {locality}</span>
        <span className="text-center">Time of Visit: {time}</span>

      </div>

      {/* Action Buttons */}
      <div className="w-full flex flex-row justify-center gap-4 my-4 text-white">
        <div className="flex p-2 cursor-pointer flex-row gap-2 rounded-xl bg-[#6fc140]"
          onClick={() => alert("will add this feature soon")}>
          <MessageSquareMore color="white" /> Send a Message
        </div>
        <div className="flex p-2 cursor-pointer flex-row gap-2 rounded-xl bg-[#6fc140]"
          onClick={() => alert("will add this feature soon")}>
          <Phone />
        </div>
        <Link href="/connect/place?data=1">
          <div className="flex p-2 cursor-pointer flex-row gap-2 rounded-xl bg-[#6fc140]">
            <MapPin />
          </div>
        </Link>
      </div>

      {/* Swipe to Mark Visited */}
      <div className="mt-4 flex flex-row justify-center">
        <SwipeToMarkVisited visited={visited} toggleVisited={toggleVisited} />
      </div>
    </div>
    </div>
  );
};

const SwipeToMarkVisited = ({ visited, toggleVisited }) => {
  return (
    <div
      onClick={toggleVisited}
      className={`flex items-center w-full ${
        visited ? "bg-green-500" : "bg-blue-500"
      } hover:bg-green-700 rounded-full p-2 relative overflow-hidden cursor-pointer`}
    >
      <div className="w-full text-white text-center">
        {visited ? "Visited" : "Click to mark visited"}
      </div>
    </div>
  );
};
