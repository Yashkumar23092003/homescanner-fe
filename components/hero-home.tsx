import { useState, useEffect } from "react";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { LottiePlayer7 } from "@/components/lottiejson";
import "./style.css";

export default function HeroHome() {
  const [waitlistedCount, setWaitlistedCount] = useState(null);

  useEffect(() => {
    fetch("/api/counter")
      .then((response) => response.json())
      .then((data) => setWaitlistedCount(data.value));
  }, []);

  return (
    <div className="scale-wrapper-3">
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 md:pb-20 md:pt-10 w-full justify-center items-center">
            <div className="text-center items-center justify-center">
              <div>
                <h1 className="text-center mb-10">
                  <div
                    className="relative lg:h-[20vh] h-[15vh] flex w-[90%] lg:w-1/2 mx-auto bg-gray-50 rounded-full items-center justify-center text-gray-400 font-bold animate-border shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]"
                  >
                    <div className="pb-5">
                      <span
                        className="lg:mr-1 mr-2 text-[40px] lg:text-[75px]"
                        style={{
                          color: "#477dd7",
                          fontFamily: "Lexend, sans-serif",
                        }}
                      >
                        home
                      </span>
                      <span
                        className="lg:mr-1 mr-2 text-[40px] lg:text-[75px]"
                        style={{
                          color: "#83d454",
                        }}
                      >
                        scanner
                      </span>
                    </div>
                  </div>
                </h1>
              </div>
              <h1></h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 font-bold text-4xl text-[#83d454]"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Search to visit 10 times faster and simpler
                </p>
                <div className="w-fit mx-auto mt-4 px-4 py-1 bg-yellow-200 text-yellow-800 text-3xl rounded-full font-semibold shadow-md">
                  Beta Launch
                </div>
                {waitlistedCount !== null && (
                  <div className="mt-6 text-3xl font-bold" style={{ color: "#FFD700" }}>
                    {waitlistedCount} waitlisted users
                  </div>
                )}
                <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"></div>
              </div>
            </div>
            <div className="my-[75px]">
              <h2 className="text-[40px] font-bold text-center text-[#477dd7]">
                Save the burden let us do it
              </h2>
              <div className="w-full max-w-4xl mx-auto border-2 border-gray-200 bg-white rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 text-center font-bold bg-gray-100 border-b">
                  <div className="p-4 border-r">Item</div>
                  <div className="p-4 border-r">At Present</div>
                  <div className="p-4 border-r">With Homescanner</div>
                </div>
                <div className="grid grid-cols-3 text-center hover:bg-gray-50 transition-colors">
                  <div className="p-4 border-r border-b">
                    Number of listing sites to visit
                  </div>
                  <div className="p-4 border-r border-b">10+</div>
                  <div className="p-4 border-r border-b">1</div>
                </div>
                <div className="grid grid-cols-3 text-center hover:bg-gray-50 transition-colors">
                  <div className="p-4 border-r border-b">
                    Getting duplicate listings
                  </div>
                  <div className="p-4 border-r border-b">68%</div>
                  <div className="p-4 border-r border-b">{`< 5%`}</div>
                </div>
                <div className="grid grid-cols-3 text-center hover:bg-gray-50 transition-colors">
                  <div className="p-4 border-r border-b">
                    Time spent on search before visit
                  </div>
                  <div className="p-4 border-r border-b">{"1000 min"}</div>
                  <div className="p-4 border-r border-b">{`10 min`}</div>
                </div>
                <div className="grid grid-cols-3 text-center hover:bg-gray-50 transition-colors">
                  <div className="p-4 border-r border-b">
                    Average no. of brokers engaged
                  </div>
                  <div className="p-4 border-r border-b">{">20"}</div>
                  <div className="p-4 border-r border-b">{`< 5`}</div>
                </div>
                <div className="grid grid-cols-3 text-center hover:bg-gray-50 transition-colors">
                  <div className="p-4 border-r border-b">
                    Number of properties checked
                  </div>
                  <div className="p-4 border-r border-b">500+</div>
                  <div className="p-4 border-r border-b">{`> 50000`}</div>
                </div>
                <div className="grid grid-cols-3 text-center hover:bg-gray-50 transition-colors">
                  <div className="p-4 border-r border-b">
                    Ground level details collected
                  </div>
                  <div className="p-4 border-r border-b">Minimum</div>
                  <div className="p-4 border-r border-b">Maximum</div>
                </div>
                <div className="grid grid-cols-3 text-center hover:bg-gray-50 transition-colors">
                  <div className="p-4 border-r border-b">
                    Negotiation with brokers for pricing
                  </div>
                  <div className="p-4 border-r border-b">Difficult</div>
                  <div className="p-4 border-r border-b">Easy</div>
                </div>
                <div className="grid grid-cols-3 text-center hover:bg-gray-50 transition-colors">
                  <div className="p-4 border-r border-b">
                    Track new listing in selected places
                  </div>
                  <div className="p-4 border-r border-b">Manual</div>
                  <div className="p-4 border-r border-b">Automated</div>
                </div>
                <div className="grid grid-cols-3 text-center hover:bg-gray-50 transition-colors">
                  <div className="p-4 border-r border-b">Scheduling visit</div>
                  <div className="p-4 border-r border-b">
                    Hectic and Complicated
                  </div>
                  <div className="p-4 border-r border-b">Automated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
