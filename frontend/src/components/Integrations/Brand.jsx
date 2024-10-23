const Brand = () => {
  return (
    <div className="h-screen bg-gray-100 overflow-auto">
      <div className="flex flex-row w-full h-full snap-y md:snap-x snap-mandatory transition-transform duration-300">
        {/* Section 1 */}
        <div className="w-full md:w-max h-full flex-shrink-0  hidden  lg:block">
          <div className="w-full md:w-max h-full flex items-center justify-center place-content-center ">
            <img
              src="src/assets/hori1.avif"
              alt=""
              className="w-[500px] m-[250px] rounded-md"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-[1200px] h-full flex-shrink-0 snap-center flex items-center justify-center p-10 sm:px-10">
          <div className="flex flex-col gap-6 px-8 font-light ">
            <h1 className="text-3xl lg:text-5xl">Empower Your Brand</h1>
            <p className="lg:font-normal lg:text-xl w-[1000px]">
              Elevate your brand with our strategic marketing solutions. We
              combine creativity and data-driven insights to create campaigns
              that resonate with your audience and drive engagement. From social
              media management to content creation and SEO, our comprehensive
              marketing services ensure your brand stands out in a crowded
              digital landscape.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full md:w-max h-full flex-shrink-0  hidden  lg:block">
          <div className="w-full md:w-max h-full flex items-center justify-center place-content-center ">
            <img
              src="src/assets/hori2.avif"
              alt=""
              className="w-[500px] m-[250px] rounded-md"
            />
          </div>
        </div>

        {/* Section 4 */}
        <div className="w-max h-full flex-shrink-0 snap-center flex items-center justify-center">
          <div className="flex flex-col gap-6 px-8 font-light sm:w-96 lg:max-w-6xl">
            <h1 className="text-3xl lg:text-5xl">
              Crafting Cutting-Edge Digital Solutions
            </h1>
            <p className="lg:font-normal lg:text-xl ">
              We specialize in building high-quality web and mobile applications
              tailored to your business needs. Our product engineering services
              encompass the entire development lifecycle, from initial concept
              to final deployment. With a focus on innovation and user-centric
              design, we create digital products that are robust, scalable, and
              visually appealing. Partner with us to bring your vision to life
              with state-of-the-art technology.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="w-full md:w-max h-full flex-shrink-0  hidden  lg:block">
          <div className="w-full md:w-max h-full flex items-center justify-center place-content-center ">
            <img
              src="src/assets/hori3.avif"
              alt=""
              className="w-[500px] m-[250px] rounded-md"
            />
          </div>
        </div>

        {/* Section 6 */}
        <div className="w-max h-full flex-shrink-0 snap-center flex items-center justify-center">
          <div className="flex flex-col gap-6 px-8 font-light sm:w-96 lg:max-w-6xl">
            <h1 className="text-3xl lg:text-5xl">
              Transforming Business with Intelligence
            </h1>
            <p className="lg:font-normal lg:text-xl">
              Leverage the power of artificial intelligence to revolutionize
              your business operations. Our AI solutions encompass a wide range
              of applications including predictive analytics, machine learning,
              and intelligent automation.Whether you aim to enhance customer
              interactions, optimize processes, or gain deeper insights from
              your data, our Al expertise ensures you stay ahead in the digital
              landscape. Discover how Al can drive innovation and efficiency in
              your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
