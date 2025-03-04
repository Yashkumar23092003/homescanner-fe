import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetTagImg01 from "@/public/images/Group 18.png";
import PlanetTagImg02 from "@/public/images/Group 19.png";
import PlanetTagImg03 from "@/public/images/Group 20.png";
import PlanetTagImg04 from "@/public/images/Group 21.png";

export default function FeaturesPlanet() {
  return (
    <div className=" scale-50 lg:scale-100">
      <section className="z-10 relative before:absolute before:inset-0 before:-z-20">
        <div className="mx-auto w-[100%] lg:w-[80%] px-4 sm:px-6 bg-[#f4f4f6] rounded-full">
          <div className="py-12 ">
            <div className="mx-auto pb-6 sm:pb-16 text-center">
              <h2 className="text-3xl font-bold text-[#477dd7] sm:mb-0 md:text-5xl">
                2. AI Personal Staff for Everything
              </h2>
              <p className="text-lg font-semibold text-grey-400 mt-2 md:text-3xl">
                check duplicate, create shortlist, call brokers, negotiate price and schedule visit
              </p>
              <p className="text-base font-medium text-green-500 mt-1 md:text-4xl">
                for 1000s of listings in 10 minutes
              </p>
            </div>
            <div className="" data-aos="zoom-y-out">
              <div className="text-center">
                <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                  <Image
                    className="rounded-full bg-gradient-to-r from-blue-500 via-green-400 via-yellow-500 to-orange-500 "
                    src={PlanetImg}
                    width={400}
                    height={400}
                    alt="Planet"
                  />
                  <div className="pointer-events-none" aria-hidden="true">
                    <div>
                      <Image
                        className="rounded-full absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                        src={PlanetTagImg01}
                        width={253}
                        height={56}
                        alt="Tag 01"
                      />
                      <Image
                        className="rounded-full absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-70 transition-opacity duration-500"
                        src={PlanetTagImg02}
                        width={241}
                        height={56}
                        alt="Tag 02"
                      />
                      <Image
                        className="rounded-full absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-70 transition-opacity duration-500"
                        src={PlanetTagImg03}
                        width={243}
                        height={56}
                        alt="Tag 03"
                      />
                      <Image
                        className="rounded-full absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                        src={PlanetTagImg04}
                        width={251}
                        height={56}
                        alt="Tag 04"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}