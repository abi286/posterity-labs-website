import { Button } from "./Button";

const Home = () => {
  return (
    <div className="flex w-full h-full place-content-center align-middle lg:px-[50px] py-[80px]">
      <div className="flex flex-col items-center flex-nowrap gap-12 h-min max-w-[1280px] w-full relative px-10 lg:px-[60px] overflow-visible content-center">
        <div className="flex flex-col items-center flex-nowrap gap-8 h-min max-w-[1280px] w-full relative overflow-visible leading-5">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-center items-center align-middle ">
              Crafting Timeless Product Engineering and Marketing <br />
              Solutions
            </h1>
          </div>
          <div className="lg:px-36">
            <p className="text-base lg:text-lg text-center items-center align-middle">
              At Posterity Labs, we&aposre passionate about helping your
              business thrive in the digital age. We specialize in product
              engineering, AI integration, and marketing. Our expert team crafts
              robust, scalable web and mobile applications, customized to meet
              your unique needs. Let&aposs work together to turn your vision
              into reality and harness the power of AI to achieve your goals.
            </p>
          </div>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Home;
