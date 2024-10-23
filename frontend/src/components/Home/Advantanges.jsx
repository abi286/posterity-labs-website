import { useEffect, useRef, useState } from "react";

const Advantages = () => {
  const scrollContainerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 640); // Adjust this value as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (isLargeScreen) {
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 1;
          }
        } else {
          if (scrollContainer.scrollTop >= scrollContainer.scrollHeight / 2) {
            scrollContainer.scrollTop = 0;
          } else {
            scrollContainer.scrollTop += 1;
          }
        }
      }, 20);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, [isLargeScreen]);

  return (
    <div className="md:px-[60px]">
      <div className="flex flex-col gap-20 bg-[#EFF3F6] py-8 sm:px-[60px] sm:py-[80px] border-slate-300 border-[1px] rounded-xl">
        <div className="flex flex-col gap-[60px] container mx-auto max-w-7xl">
          {/* Title Section */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-semibold">
              The Posterity Labs Advantage
            </h1>
          </div>

          {/* Scrollable Container */}
          <div className="relative">
            <div
              className="relative overflow-hidden h-[400px] sm:h-[334px] p-2"
              ref={scrollContainerRef}
            >
              <div
                className={`gap-10 ${
                  isLargeScreen ? "flex" : "space-y-6 sm:space-y-8"
                }`}
              >
                {/* Original Content */}
                {[
                  {
                    title: "Client Focus",
                    image: "src/assets/client.avif",
                    description:
                      "At Posterity Labs, our mission is to transform your vision into reality. We pride ourselves on delivering innovative solutions tailored to your unique needs.",
                  },
                  {
                    title: "Team Expertise",
                    image: "src/assets/client2.webp",
                    description:
                      "Our team of experts is dedicated to providing top-notch product engineering and marketing services. We ensure your web and mobile applications are built to perfection.",
                  },
                  {
                    title: "Company Vision",
                    image: "src/assets/client3.jpg",
                    description:
                      "Driven by innovation and excellence, Posterity Labs is here to help you launch and manage your products seamlessly. Let's create the future together.",
                  },
                  {
                    title: "Service Commitment",
                    image: "src/assets/client4.webp",
                    description:
                      "With Posterity Labs, you get more than just a service provider. You gain a partner committed to your success, from concept to launch and beyond.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white items-center rounded-xl p-8 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-10 ${
                      isLargeScreen ? "flex flex-col w-[1000px] h-[284px] flex-shrink-0" : ""
                    }`}
                  >
                    <div className="h-48  flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-[440px] rounded-xl object-cover"
                      />
                    </div>
                    <div className="sm:w-2/3 ">
                      <h2 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h2>
                      <p className="font-light text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Fade effects */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#EFF3F6] to-transparent pointer-events-none sm:hidden"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#EFF3F6] to-transparent pointer-events-none sm:hidden"></div>
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#EFF3F6] to-transparent pointer-events-none hidden sm:block"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#EFF3F6] to-transparent pointer-events-none hidden sm:block"></div>
          </div>
        </div>
        {/* Statistics Section */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 text-center">
          {[
            { value: "100%", label: "Customer satisfaction" },
            { value: "30,000+", label: "Hours of engineering expertise" },
            { value: "100%", label: "Custom solutions" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col pr-10 ${
                index < 2 ? "sm:border-r-[1px] sm:border-[#B9BED0]" : ""
              }`}
            >
              <h1 className="text-3xl sm:text-6xl text-[#A1A1AA]">
                {stat.value}
              </h1>
              <p className="text-sm sm:text-lg font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;