"use client"
import React, { Suspense } from 'react'
import { useSearchParams } from "next/navigation";
import { MessageSquareMore, Phone, Cake, UserRound, Hammer, LayoutGrid, Building2, Armchair, Compass, Layers, CarFront, ShieldCheck } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlacePage />
    </Suspense>
  );
};

const PlacePage = () => {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  const center = {
    lat: 28.6139,
    lng: 77.209,
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
    minHeight: "500px",
  };

  return (
    <div className='w-full px-10 mt-10 flex md:flex-row md:justify-between gap-4'>
      <div className='p-5 flex flex-col gap-7 md:w-1/2 rounded-lg bg-[#d9d9d9]'>
        <div className='h-[250px] rounded-lg bg-gray-600 w-full'>{data}</div>
        <div className='flex flex-col items-start gap-2'>
          <div><span className='text-lg font-semibold'>Name: </span>Hotel ABC</div>
          <div><span className='text-lg font-semibold'>Address: </span>xyz</div>
          <div><span className='text-lg font-semibold'>Time of Visit: </span>4:00 pm to 5:00 pm</div>
        </div>
        <div className='w-full bg-white rounded-lg p-2'>
          <span className='text-left text-xl font-bold underline'>Overview:</span>
          <div className='my-5 grid grid-cols-2'>
            <Column icon={<Cake size={'28px'} />} title={'Age of Building'} value={'> 10 Years'} />
            <Column icon={<UserRound size={'28px'} />} title={'Ownership Type'} value={'Self Owned'} />
            <Column icon={<Hammer size={'28px'} />} title={'Maintenance Charges'} value={'$0.0 Per Sq.Ft/M'} />
            <Column icon={<LayoutGrid size={'28px'} />} title={'Flooring'} value={'N/A'} />
            <Column icon={<Building2 size={'28px'} />} title={'BuiltUp Area'} value={'1,550 Sq.Ft'} />
            <Column icon={<Armchair size={'28px'} />} title={'Furnishing Status'} value={'Fully Furnished'} />
            <Column icon={<Compass size={'28px'} />} title={'Facing'} value={`Don't Know`} />
            <Column icon={<Layers size={'28px'} />} title={'Floors'} value={'0/3'} />
            <Column icon={<CarFront size={'28px'} />} title={'Parking'} value={'None'} />
            <Column icon={<ShieldCheck size={'28px'} />} title={'Gated Security'} value={'No'} />
          </div>
          <div className="w-full flex flex-row justify-center gap-4 my-4 text-white text-[19px]">
            <div className="flex p-2 hover:cursor-pointer flex-row gap-2 rounded-xl bg-[#6fc140]" onClick={() => alert("will add this feature soon")}>
              <MessageSquareMore color="white" /> Send a Message
            </div>
            <div className="flex p-2 hover:cursor-pointer flex-row gap-2 rounded-xl bg-[#6fc140]">
              <Phone />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

const Column = ({ icon, title, value }) => {
  return (
    <div className='my-3 border-b-[1px] flex flex-row justify-between items-center text-lg mx-4 pb-3'>
      <div className='flex flex-row gap-2 items-center text-[#817d7d]'>
        {icon}
        <span>{title}</span>
      </div>
      <span>{value}</span>
    </div>
  );
};

export default Page;
