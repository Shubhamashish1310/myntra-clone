import { Link } from "react-router-dom";
import heroBg from "../img/Mgirl.jpg";
import sideimg from "../img/Myntragandb.png";

const Hero = () => {
  return (
    <section
      className="relative h-[800px] w-full bg-no-repeat bg-cover bg-center pt-24" // Added padding-top
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        {/* Text Section */}
        <div className="relative z-10 text-white max-w-xl">
          <div className="font-semibold flex items-center uppercase tracking-wider text-lg mb-4">
            <div className="w-12 h-[3px] mr-4 bg-cyan-500"></div>Hot Trend
          </div>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Summer Collection</h3>
          <h1 className="text-4xl md:text-6xl leading-tight font-bold mb-6">
            Fresh Fashion Finds
            <br />
            <span className="font-light text-cyan-300">New Collection</span>
          </h1>
          <Link
            to="/category/men's clothing"
            className="inline-block bg-cyan-500 text-black font-semibold text-lg uppercase py-3 px-8 rounded shadow-lg hover:bg-cyan-600 transition duration-300"
          >
            Discover More
          </Link>
        </div>

        {/* Optional Image Section */}
        <div className="hidden lg:block relative z-10">
          <img
            src={sideimg} 
            alt="Summer Collection"
            className="max-w-xs md:max-w-md object-cover drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
