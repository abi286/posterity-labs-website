import { useState } from "react";

const Testimonials = () => {
  // State to track which image is currently active
  const [activeImage, setActiveImage] = useState(0);

  // Array of image sources and descriptions
  const images = [
    {
      src: "src/assets/seamless.avif",
      alt: "Seamless Integration",
      description:
        "Integrate effortlessly with your existing tools and workflows. Our solutions are designed to fit smoothly into your current systems, minimizing disruption and maximizing efficiency.",
    },
    {
      src: "src/assets/realtime.avif",
      alt: "Real-Time Monitoring and AI powered Analytics",
      description:
        "Track performance and gain insights with real-time analytics. Monitor key metrics, identify trends, and make informed decisions to keep your products running at their best.",
    },
    {
      src: "src/assets/face.avif",
      alt: "Customizable Dashboards",
      description:
        "Build and customize your own dashboards to visualize important data. Tailor the view to your specific needs, ensuring you have all the critical information at your fingertips.",
    },
  ];

  return (
    <div className="w-full md:px-[60px]">
      <section className="flex pt-[80px] px-[60px] pb-[120px] bg-[#EFF3F6]  rounded-xl  place-items-center justify-center">
        <div className="flex justify-center flex-nowrap relative flex-col max-w-[1280px] gap-[60px] ">
          <div className="flex justify-center relative place-items-center items-center">
            <h3 className="flex items-center flex-nowrap font-bold font-sans text-3xl align-middle text-center">
              Integrated Solutions for Seamless <br />
              Operations
            </h3>
          </div>
          <div className="flex flex-row gap-16">
            {/* Image section - only display the currently active image */}
            <div className="w-full max-w-[1280px] h-[430px] hidden xl:block">
              <img
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Buttons and Paragraphs section */}
            <div className="w-full max-w-[1280px] h-[430px] flex flex-col justify-center gap-4">
              <button
                onClick={() => setActiveImage(0)}
                className={`py-7 px-4  ${
                  activeImage === 0
                    ? " border-[1px] border-[#EFF3F6] border-b-red-500"
                    : ""
                }`}
              >
                <div className="flex gap-6 text-xl">
                  <div>01.</div>
                  <div>Seamless Integration</div>
                </div>
              </button>
              {/* Show paragraph for activeImage 0 */}
              {activeImage === 0 && (
                <p className="mt-2 text-gray-600">{images[0].description}</p>
              )}

              <button
                onClick={() => setActiveImage(1)}
                className={`py-7 px-4 ${
                  activeImage === 1
                    ? "border-[1px] border-[#EFF3F6] border-b-red-500"
                    : ""
                }`}
              >
                <div className="flex gap-6 text-xl">
                  <div>02.</div>
                  <div>Real-Time Monitoring and AI powered Analytics</div>
                </div>
              </button>
              {/* Show paragraph for activeImage 1 */}
              {activeImage === 1 && (
                <p className="mt-2 text-gray-600">{images[1].description}</p>
              )}

              <button
                onClick={() => setActiveImage(2)}
                className={`py-7 px-4 ${
                  activeImage === 2
                    ? "border-[1px] border-[#EFF3F6] border-b-red-500"
                    : ""
                }`}
              >
                <div className="flex gap-6 text-xl">
                  <div>03.</div>
                  <div>Customizable Dashboards</div>
                </div>
              </button>
              {/* Show paragraph for activeImage 2 */}
              {activeImage === 2 && (
                <p className="mt-2 text-gray-600">{images[2].description}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
