import React, { useRef, useEffect } from "react";
import rooms1 from "../assets/hotelImage1.jpg";
import rooms2 from "../assets/hotelImage2.jpg";
import rooms3 from "../assets/hotelImage3.jpg";
import rooms4 from "../assets/hotelImage4.jpg";
import CheckRooms from "../components/CheckRooms";


  const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d7?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=1600&q=80"
];


const About = () => {
  const scrollRef = useRef(null);
  const imageCount = heroImages.length;
  const duplicatedImages = [...heroImages, ...heroImages]; // clone for seamless loop

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let index = imageCount; // start from first clone

    // Initial scroll to cloned start
    scrollContainer.scrollTo({
      left: scrollContainer.offsetWidth * index,
      behavior: "auto",
    });

    const interval = setInterval(() => {
      index++;
      scrollContainer.scrollTo({
        left: scrollContainer.offsetWidth * index,
        behavior: "smooth",
      });

      // Reset when reaching end of clone
      if (index >= duplicatedImages.length - 1) {
        setTimeout(() => {
          scrollContainer.scrollTo({
            left: scrollContainer.offsetWidth * imageCount,
            behavior: "auto",
          });
          index = imageCount;
        }, 500); // wait for smooth scroll to finish
      }
    }, 4000); // scroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Seamless Auto-Scrolling Horizontal Hero Section */}
      <div
        ref={scrollRef}
        className="relative w-full overflow-x-auto scroll-smooth snap-x snap-mandatory flex h-[70vh] md:h-[80vh] lg:h-[90vh] scrollbar-hide"
      >
        {duplicatedImages.map((img, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full h-full snap-center"
          >
            <img
              src={img}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center justify-center">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4 leading-tight drop-shadow-lg">
                Discover Comfort & Culture with <br />
                <span className="text-rose-400">Trip</span>
                <span className="text-indigo-300">+Villa</span>
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* About Us Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-800">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
          Why Choose <span className="text-indigo-600">Trip</span>
          <span className="text-rose-500">+Villa</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          Trip+Villa is your gateway to unforgettable stays. From luxury hotels to cozy villas, we blend modern design with cultural warmth. Our platform is built for mobile-first travelers who value style, simplicity, and seamless booking.
        </p>

        {/* Room Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[rooms1, rooms2, rooms3, rooms4].map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white group"
            >
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt={`Room ${i + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="px-4 py-3 text-center">
                <h3 className="text-lg font-semibold text-indigo-600">Room {i + 1}</h3>
                <p className="text-sm text-gray-600">Elegant, spacious, and thoughtfully designed.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CheckRooms Section */}
      <section className="bg-gradient-to-r from-indigo-100 via-white to-rose-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-700">
            Explore Availability & Book Instantly
          </h3>
          <CheckRooms />
        </div>
      </section>
    </div>
  );
};

export default About;
