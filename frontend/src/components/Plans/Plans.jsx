const Plans = () => {
  return (
    <div>
      <section className="py-10 sm:py-16 lg:py-24 px-5 md:px-10 lg:px-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl leading-tight text-black sm:text-4xl lg:text-5xl">
              Flexible Plans for Teams of all sizes
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 mx-auto mt-8 md:max-w-5xl lg:grid-cols-3 md:gap-8 sm:mt-16 bg-white rounded-xl">
            <div className="relative overflow-hidden bg-transparent shadow-gray-200 shadow-xl rounded-xl">
              <div className="flex flex-col md:flex-row lg:flex-col justify-between gap-[26px] px-4 py-5 lg:p-8">
                <div className="flex flex-col gap-[18px]">
                  <div>
                    <p className="text-lg text-gray-500">For individuals</p>
                    <p className="text-2xl font-semibold text-black">Basic</p>
                  </div>
                  <div>
                    <p className="text-base font-extralight">
                      Ideal for individuals and small teams
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h4>What’s included</h4>
                    <ul className=" mt-8 space-y-1 list-outside list-image-[url(src/components/Plans/Chek.svg)]">
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p className="leading-4">
                            Basic engineering and marketing support
                          </p>
                        </div>
                      </li>
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p className="leading-4">Standard support</p>
                        </div>
                      </li>
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p>
                            Suitable for simple projects with limited complexity
                          </p>
                        </div>
                      </li>
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p>Monthly progress reports</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <button className="relative inline-flex h-12 w-full overflow-hidden rounded-sm p-[2px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF_0%,#000_50%,#FFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 py-3 px-7 text-base font-normal text-white backdrop-blur-3xl">
                      Get Started
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-b from-[#626267] to-black w-full shadow-xl shadow-gray-200 rounded-xl text-white ">
              <div className="flex flex-col md:flex-row lg:flex-col gap-[26px] px-4 py-5 lg:p-8">
                <div className="flex flex-col gap-[18px]">
                  <div>
                    <p className="text-lg text-white">For startups</p>
                    <p className="text-2xl font-semibold">Pro</p>
                  </div>
                  <div>
                    <p className="text-base font-extralight">
                      Unlock enhanced AI capabilities, priority support, and
                      weekly updates.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h4>What’s included</h4>
                    <ul className=" mt-8 space-y-1 list-outside list-image-[url(src/components/Plans/Chek.svg)]">
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p className="leading-4">Dedicated account manager</p>
                        </div>
                      </li>
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p className="leading-4">All analytics features</p>
                        </div>
                      </li>
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p>Advanced engineering and marketing support</p>
                        </div>
                      </li>
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p>Priority support</p>
                        </div>
                      </li>
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p>Weekly performance reports</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button className="relative inline-flex w-full h-12 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-50 py-3 px-7 text-base font-normal text-black backdrop-blur-3xl">
                      Get Started
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-transparent shadow-xl shadow-gray-200  bg-white rounded-xl">
              <div className="flex flex-col md:flex-row lg:flex-col gap-[26px] px-4 py-5 lg:p-8">
                <div className="flex flex-col gap-[18px]">
                  <div>
                    <p className="text-lg text-gray-500">For big companies</p>
                    <p className="text-2xl font-semibold text-black">
                      Enterprise
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-extralight">
                      Access the full suite of AI features, 24/7 dedicated
                      support.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h4>What’s included</h4>
                    <ul className=" mt-8 space-y-1 list-outside list-image-[url(src/components/Plans/Chek.svg)]">
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p className="leading-4">Priority feature requests</p>
                        </div>
                      </li>
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p className="leading-4">Dedicated project team</p>
                        </div>
                      </li>
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p>Comprehensive engineering and marketing support</p>
                        </div>
                      </li>
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p>Monthly strategy sessions</p>
                        </div>
                      </li>
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p>24/7 dedicated support</p>
                        </div>
                      </li>
                      <li className="text-base font-extralight">
                        <div className="flex items-center gap-3">
                          <p>Custom AI solutions</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <button className="relative inline-flex h-12 w-full overflow-hidden rounded-sm p-[2px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF_0%,#000_50%,#FFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 py-3 px-7 text-base font-normal text-white backdrop-blur-3xl">
                      Get Started
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
