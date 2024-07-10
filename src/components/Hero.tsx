import heroimg from "../images/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div
        className="flex flex-col w-full h-[70vh] bg-center bg-no-repeat bg-cover justify-center items-start gap-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${heroimg})`,
        }}
      >
        <div className="font-medium text-zinc-100 ml-48 max-w-[35%]">
          <h3 className="text-4xl">
            Delivering excellence in fabrication, installation and maintenance -
            Australia wide.
          </h3>
        </div>
        <div className="flex justify-flex items-center flex-col ml-48">
          <div>
            <Link to="/projects">
              <button className=" py-3 px-6 md:px-8 rounded bg-zinc-200  text-zinc-700 duration-500 hover:bg-cyan-600 hover:outline-cyan-600">
                Find out more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
