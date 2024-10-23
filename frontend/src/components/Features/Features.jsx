import Industry from "./Industry";
import Testimonials from "./Testimonials";

const Features = () => {
  return (
    <div className="flex flex-col w-full h-full relative items-center place-content-center ">
        {/* industry */}
        <Industry/>
        {/* testimonials */}
        <Testimonials/>
    </div>
  );
};

export default Features;
