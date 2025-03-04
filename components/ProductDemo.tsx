import React from "react";
import { useState } from "react";

export default function ProductDemo() {
  const [status, setStatus] = useState("hindi");

  const handleClick = (e: string): void => {
    setStatus(e);
    console.log(e);
  };

  return (
    <div className="w-full my-20">
      <h1 className="w-full py-4 text-center text-5xl font-bold text-[#477dd7]">
        Product Demo Videos
      </h1>

      <div className="w-full flex flex-col justify-center items-center gap-5">
        <div className="w-fit flex rounded-2xl bg-gray-400 rounded-s-3xl rounded-e-3xl">
          <div
            className={`py-4 px-6 cursor-pointer rounded-s-3xl ${status === "hindi" ? "bg-gray-600 text-white" : ""}`}
            onClick={() => handleClick("hindi")}
          >
            Hindi
          </div>
          <div
            className={`py-4 px-6 cursor-pointer rounded-2xl ${status === "english" ? "bg-gray-600 text-white" : ""}`}
            onClick={() => handleClick("english")}
          >
            English
          </div>
          <div
            className={`py-4 px-6 cursor-pointer rounded-e-3xl ${status === "tech" ? "bg-gray-600 text-white" : ""}`}
            onClick={() => handleClick("tech")}
          >
            Tech
          </div>
        </div>

        <div
          className="w-[900px] flex flex-wrap gap-4 justify-center h-[500px] overflow-hidden rounded-3xl"
          style={{
            border: "4px solid rounded-3xl",
            borderImage: "linear-gradient(to right, #3b82f6, #10b981, #3b82f6) 1",
          }}
        >
          {status === "hindi" && (
            <iframe
              className="flex-1"
              src="https://www.youtube.com/embed/iFmlr8jw5i0"
              title="Hindi Videos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {status === "english" && (
  <div className="w-[900px] h-[400px] mt-5 flex items-center justify-center text-xl text-gray-500 border-[3px] border-green-500 rounded-lg p-4">
    We will be uploading soon
  </div>
)}
{status === "tech" && (
  <div className="w-[900px] h-[400px] mt-5  flex items-center justify-center text-xl text-gray-500 border-[3px] border-green-500 rounded-lg p-4">
    We will be uploading soon
  </div>
)}

{/*           {status === "english" && (
            <iframe
              className="flex-1"
              src="https://www.youtube.com/embed/iFmlr8jw5i0"
              title="English Videos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {status === "tech" && (
            <iframe
              className="flex-1"
              src="https://www.youtube.com/embed/iFmlr8jw5i0"
              title="Tech Videos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )} */}
          
        </div>
      </div>
    </div>
  );
}
