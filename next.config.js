/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  async rewrites() {
    return [
      {
        source: "/api/counter",
        destination: "http://65.0.207.184:4001/api/counter",
      },
      {
        source: "/api/getListings_Agent",
        destination:
          "http://65.0.207.184:4001/api/listings/getListings_Agent?city=Bangalore&locality=Sarjapur Road",
      },
      {
        source: "/api/getListings_Shortlisted",
        destination:
          "http://65.0.207.184:4001/api/listings/getListings_Shortlisted?city=Bangalore&locality=Sarjapur Road",
      },
      {
        source: "/api/waitlist/join",
        destination: "http://65.0.207.184:4001/api/waitlist/join",
      },
      {
        source: "/api/searchFor_searchPage",
        destination: "http://65.0.207.184:4001/api/listings/getListings_withselectedfield?city=Bangalore&locality=Sarjapur Road"
      },
      {
        source: "/api/searchInlistings",
        destination: "http://65.0.207.184:4001/api/listings/searchInlistings"
      },
    ];
  },
  images: {
    domains: [
      "m.economictimes.com",
      "static.vecteezy.com",
      "images.nobroker.in",
      "img.squareyards.com",
      "housing-images.n7net.in",
    ],
  },
};

module.exports = nextConfig;
