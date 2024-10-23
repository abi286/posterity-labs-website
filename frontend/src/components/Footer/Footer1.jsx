import { Check } from "lucide-react";

const Footer1 = () => {
  return (
    <div className="px-8 py-28">
      <div className="flex justify-center items-start text-center px-10 pb-20">
        <h1 className="text-2xl lg:text-5xl">
          Transform Your Digital Presence with <br />{" "}
          <span className="text-red-500">AI-Powered</span> Technologies
        </h1>
      </div>
      <div className="flex flex-col gap-36">
        <div className="flex flex-col items-center xl:flex-row justify-center gap-6">
          <div className="flex flex-col justify-center items-start gap-1 md:w-[640px] lg:px-10">
            <div className="flex items-start text-center w-fit text-sm bg-[#EDF2FA] px-1 rounded-lg uppercase">
              <h1>Empowering Your Business with Advanced AI</h1>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-bold text-2xl md:text-4xl">
                <h1>The user experience that makes redundant work disappear</h1>
              </div>
              <div>
                <p className="font-extralight">
                  At Posterity Labs, we specialize in integrating AI tools into
                  our products. Our expertise in AI ensures that your digital
                  products are not only cutting-edge but also deliver
                  exceptional user experiences. From automating routine tasks to
                  providing deep insights, our AI solutions are designed to meet
                  your business needs.
                </p>
              </div>
              <ul className="font-semibold space-y-4 md:mt-10">
                <li className="flex items-start">
                  <Check className="mr-2" size={65} strokeWidth={3} />
                  Enhance customer interaction and support with intelligent
                  chatbots that understand and respond to user queries in
                  real-time, providing a seamless and engaging user experience.
                </li>
                <li className="flex items-start">
                  <Check className="mr-2" size={60} strokeWidth={3} />
                  Leverage AI to analyze data and predict trends, helping you
                  make informed decisions and stay ahead of the competition.
                </li>
                <li className="flex items-start">
                  <Check className="mr-2" size={65} strokeWidth={3} />
                  Deliver personalized content and recommendations to your users
                  based on their behavior and preferences, increasing engagement
                  and satisfaction.
                </li>
              </ul>
            </div>
          </div>
          <div className="h-[300px] md:px-12 md:h-[500px] overflow-hidden">
            <img
              src="src/assets/footer1.avif"
              alt=""
              className="flex xl:w-[600px] xl:h-[600px] rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center xl:flex-row justify-center gap-6">
          <div className="md:px-12 md:h-[500px] overflow-hidden">
            <img
              src="src/assets/footer2.avif"
              alt=""
              className="xl:w-[600px] xl:h-[600px] rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-1 md:w-[640px] lg:px-10">
            <div className="flex items-start text-center w-fit text-sm bg-[#EDF2FA] px-1 rounded-lg uppercase">
              <h1>Seamless and Strategic AI Integration</h1>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-bold text-2xl">
                <h1>Our Approach to AI Integration</h1>
              </div>
              <div>
                <p className="font-extralight">
                  At Posterity Labs, our approach to integrating AI into your
                  digital products is both strategic and user-centric
                </p>
              </div>
              <ul className="font-semibold space-y-4 md:mt-10">
                <li className="flex items-start">
                  <Check className="mr-2" size={65} strokeWidth={3} />
                  We work closely with you to understand your business goals and
                  identify how AI can best support them. Our consultative
                  approach ensures that we design solutions that are aligned
                  with your vision.
                </li>
                <li className="flex items-start">
                  <Check className="mr-2" size={60} strokeWidth={3} />
                  Our team of experts ensures that AI components are seamlessly
                  integrated into your existing systems, minimizing disruption
                  and maximizing efficiency.
                </li>
                <li className="flex items-start">
                  <Check className="mr-2" size={65} strokeWidth={3} />
                  AI is an evolving field, and we stay at the forefront of
                  technological advancements. We continually update and optimize
                  our AI solutions to ensure they remain effective and
                  cutting-edge.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
