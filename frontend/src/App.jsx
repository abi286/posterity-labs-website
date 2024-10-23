import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/Features/Features";
import Integrations from "./components/Integrations/Integrations";
import Plans from "./components/Plans/plans";
import Advantanges from "./components/Home/Advantanges";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Features />
      <Integrations/>
      <Plans/>
      <Advantanges/>
      <Footer/>
    </div>
  );
};

export default App;
