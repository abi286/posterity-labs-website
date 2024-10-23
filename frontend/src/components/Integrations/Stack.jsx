const Stack = () => {
  const images = [
    { src: "src/assets/logos/123.avif", alt: "logo1" },
    { src: "src/assets/logos/124.avif", alt: "logo2" },
    { src: "src/assets/logos/125.avif", alt: "logo3" },
    { src: "src/assets/logos/android.avif", alt: "android" },
    { src: "src/assets/logos/brew.avif", alt: "brew" },
    { src: "src/assets/logos/dj.avif", alt: "django" },
    { src: "src/assets/logos/flutter.avif", alt: "flutter" },
    { src: "src/assets/logos/gpt.avif", alt: "gpt" },
    { src: "src/assets/logos/mongo.avif", alt: "mongodb" },
  ];

  // Duplicate the image array for infinite scrolling effect
  const repeatedImages = [...images, ...images];

  return (
    <div className="flex flex-col justify-center items-center py-12">
      {/* Heading Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-normal text-2xl lg:text-5xl text-red-500">
          <span className="text-black">Our</span> Solution Stack
        </h2>
        <p className="text-base lg:text-xl text-[#828289] max-w-3xl mx-auto">
          At Posterity Labs, we leverage a diverse and cutting-edge tech stack
          to deliver robust, scalable, and innovative solutions. Our expertise
          spans across a wide range of technologies, ensuring that we can choose
          the best tools for your specific needs.
        </p>
      </div>

      {/* Scrolling Logos Section */}
      <div className="flex flex-col gap-16 overflow-hidden w-full max-w-[1280px] py-6">
        <div className="flex items-center justify-center overflow-hidden relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F9FAFA] to-transparent pointer-events-none z-10"></div>
          {/* Scroll Left */}
          <ul className="flex gap-16 animate-scroll-left">
            {repeatedImages.map((image, index) => (
              <li
                key={index}
                className="w-12 h-12 flex items-center justify-center"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-scale-down max-w-full max-h-full"
                />
              </li>
            ))}
          </ul>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F9FAFA] to-transparent pointer-events-none z-10"></div>
        </div>
        
        {/* Scroll Right */}
        <div className="flex items-center justify-center overflow-hidden relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F9FAFA] to-transparent pointer-events-none z-10"></div>
          <ul className="flex gap-16 animate-scroll-right">
            {repeatedImages.map((image, index) => (
              <li
                key={index}
                className="w-12 h-12 flex items-center justify-center"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-scale-down max-w-full max-h-full"
                />
              </li>
            ))}
          </ul>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F9FAFA] to-transparent pointer-events-none z-10"></div>
        </div>

        <div className="flex items-center justify-center overflow-hidden relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F9FAFA] to-transparent pointer-events-none z-10"></div>
          {/* Scroll Left */}
          <ul className="flex gap-16 animate-scroll-left">
            {repeatedImages.map((image, index) => (
              <li
                key={index}
                className="w-12 h-12 flex items-center justify-center"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-scale-down max-w-full max-h-full"
                />
              </li>
            ))}
          </ul>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F9FAFA] to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
