import { FaGooglePlay, FaApple } from "react-icons/fa";
import bannerImg from "../../assets/hero.png";

const Home = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-6">

        {/* H2 */}
        <h1 className="text-3xl sm:text-4xl font-bold">
          We Build <br />
          <span className="text-[#632EE3]">Productive</span> Apps
        </h1>

        {/* P tag */}
        <p className="text-gray-700 text-lg max-w-xl">
          Discover amazing apps that enhance your productivity, health, and learning experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-gray-800 px-6 py-3 rounded shadow hover:shadow-md transition"
          >
            <FaGooglePlay size={20} color="#0BDF74" />
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-gray-800 px-6 py-3 rounded shadow hover:shadow-md transition"
          >
            <FaApple size={20} color="#0BDF74" />
            App Store
          </a>
        </div>

        {/* Image */}
        <div className="mt-8 w-full max-w-md">
          <img
            src={bannerImg}
            alt="App Banner"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div
      className="py-16 text-white"
      style={{
        background:
          "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold">
          Trusted by Millions, Built for You
        </h1>

        {/* 3 Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-2xl shadow-md hover:bg-white/20 transition">
            <p className="text-sm uppercase tracking-widest text-gray-200">
              Global Reach
            </p>
            <h2 className="text-2xl font-semibold text-white mt-2">
              10M+ Users
            </h2>
            <p className="text-gray-200 mt-2">
              Our apps are trusted worldwide by millions of happy users.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-2xl shadow-md hover:bg-white/20 transition">
            <p className="text-sm uppercase tracking-widest text-gray-200">
              Performance
            </p>
            <h2 className="text-2xl font-semibold text-white mt-2">
              Fast & Reliable
            </h2>
            <p className="text-gray-200 mt-2">
              Optimized for speed, stability, and smooth experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-2xl shadow-md hover:bg-white/20 transition">
            <p className="text-sm uppercase tracking-widest text-gray-200">
              Innovation
            </p>
            <h2 className="text-2xl font-semibold text-white mt-2">
              Next-Gen Features
            </h2>
            <p className="text-gray-200 mt-2">
              We continuously improve to bring you cutting-edge tools.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Home;
