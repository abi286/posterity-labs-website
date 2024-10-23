const Industry = () => {
  const images = [
    { src: "src/assets/git.jpeg", alt: "git" },
    { src: "src/assets/darkly.jpeg", alt: "darkly" },
    { src: "src/assets/eraser.avif", alt: "eraser" },
    { src: "src/assets/linear.avif", alt: "linear" },
    { src: "src/assets/next.avif", alt: "next" },
    { src: "src/assets/nvm.avif", alt: "nvm" },
    { src: "src/assets/strap.avif", alt: "strap" },
  ];

  return (
    <div className="flex flex-col flex-nowrap relative pb-20 pt-[60px] gap-[60px] max-w-[1280px] items-center content-center">
      <div className="relative w-full flex items-center justify-center overflow-hidden">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-60 bg-gradient-to-r from-[#F9FAFA] to-transparent pointer-events-none z-10"></div>
        <ul className="flex gap-16 relative justify-center w-screen overflow-hidden align-middle animate-scroll">
          {images.map((image, index) => (
            <li key={index} className="w-24 h-[18px]">
              <div className="flex w-24 h-[18px] items-center align-middle justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-scale-down max-w-full max-h-full"
                />
              </div>
            </li>
          ))}
        </ul>
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-60 bg-gradient-to-l from-[#F9FAFA] to-transparent pointer-events-none z-10"></div>
      </div>


      <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6 px-10">
   
        <div className="overflow-hidden bg-white rounded-lg shadow-2xl shadow-slate-200 p-4">
          <h1 className="text-lg font-bold mb-2 text-start">
            Expert Product <br /> Engineering
          </h1>
          <p className="text-sm text-gray-600">
            We turn your ideas into reality with expert engineering, using the
            latest technologies to create scalable, user-friendly web and mobile
            applications. Continuous feedback ensures the final product exceeds
            your expectations.
          </p>
        </div>

   
        <div className="overflow-hidden bg-white rounded-lg shadow-2xl shadow-slate-200 p-4">
          <h1 className="text-lg font-bold mb-2">
            Comprehensive Quality Assurance
          </h1>
          <p className="text-sm text-gray-600">
            Our rigorous testing guarantees optimal performance and a bug-free
            experience. We ensure your app is intuitive and provide ongoing
            support to keep it running smoothly.
          </p>
        </div>


        <div className="overflow-hidden bg-white rounded-lg shadow-2xl shadow-slate-200 p-4">
          <h1 className="text-lg font-bold mb-2">AI-Enhanced Solutions</h1>
          <p className="text-sm text-gray-600">
            Enhance your applications with AI for deeper insights and improved
            functionality. We tailor AI integration to meet your unique business
            needs, keeping you competitive in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Industry;
