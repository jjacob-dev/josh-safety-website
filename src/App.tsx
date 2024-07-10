import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ibox from "./components/Ibox";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="flex justify-center">
        <div className="flex w-[65%] py-28 gap-6">
          <Ibox
            title="Work history"
            desc="Specialising in mild and stainless steel, aluminium, and exotic alloy fabrication for a wide range of clients in the agricultural, commercial, oil & gas, food and beverage, resources, and water industries"
          />
          <Ibox
            title="Qualifications"
            desc="Offering specialised mechanical installation including tanks, pipework, and equipment for the beverage, brewing, dairy, food, oil & gas, industrial, pharmaceutical and water industries."
          />
          <Ibox
            title="Projects"
            desc="Ongoing or ‘as-required’ maintenance and breakdown services are available with a focus on reducing downtime and improving productivity."
          />
        </div>
      </div>
      <div className="flex justify-center bg-zinc-50">
        <div className="w-[65%] py-8">
          <About></About>
        </div>
      </div>
    </>
  );
}

export default App;
