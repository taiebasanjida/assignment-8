import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/Loading/Loading";
import noAppsImg from "../../assets/App-Error.png"; // No apps image

const Installations = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");
  const [showWelcome, setShowWelcome] = useState(true); // প্রথমবারের জন্য

  // Load installed apps
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
      setInstalledApps(apps);

      // প্রথমবারে welcome circle দেখাবে
      setShowWelcome(apps.length === 0 && !localStorage.getItem("visitedInstallPage"));

      // এবার পেজ ভিজিট হয়েছে mark করে দাও
      localStorage.setItem("visitedInstallPage", "true");

      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // Handle uninstall
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);

    // সব uninstall হলে "No Apps" ইমেজ দেখাবে
    setShowWelcome(false);
    toast.success("App uninstalled successfully!");
  };

  // Sorting logic
  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    const sortedApps = [...installedApps];
    switch (value) {
      case "downloads-high-low":
        sortedApps.sort((a, b) => b.downloads - a.downloads);
        break;
      case "downloads-low-high":
        sortedApps.sort((a, b) => a.downloads - b.downloads);
        break;
      case "rating-high-low":
        sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg);
        break;
      case "rating-low-high":
        sortedApps.sort((a, b) => a.ratingAvg - b.ratingAvg);
        break;
      default:
        break;
    }
    setInstalledApps(sortedApps);
  };

  if (loading) return <LoadingSpinner />;

  // Empty state
  if (installedApps.length === 0) {
    return (
      <div className="text-center py-20 mt-16 flex flex-col items-center space-y-4">
        {showWelcome ? (
          // Welcome circle
          <div className="relative w-64 h-64 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <div className="text-white text-center px-6">
              <h2 className="text-3xl font-bold mb-2 drop-shadow-lg">Welcome!</h2>
              <p className="text-sm opacity-90">
                Your installed apps will appear here soon.
              </p>
            </div>
          </div>
        ) : (
          // No Apps image
          <img
            src={noAppsImg}
            alt="No Installed Apps"
            className="w-60 sm:w-72 mb-6 opacity-90"
          />
        )}

        <h1 className="text-3xl font-bold text-gray-800">
          {showWelcome ? "Welcome to Installations" : "My Installation"}
        </h1>
        <p className="text-gray-500 mt-2">
          {showWelcome
            ? "Start installing your favorite apps to see them here."
            : "You have not installed any apps yet."}
        </p>
      </div>
    );
  }

  // Summary calculations
  const totalApps = installedApps.length;
  const totalDownloads = installedApps.reduce(
    (sum, app) => sum + app.downloads,
    0
  );
  const averageRating = (
    installedApps.reduce((sum, app) => sum + app.ratingAvg, 0) / totalApps
  ).toFixed(1);

  // Main UI
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Installation</h1>
        <p className="text-gray-500 mt-2">Manage your installed apps below</p>
      </div>

      {/* Sorting Dropdown */}
      <div className="flex justify-end mb-6">
        <select
          value={sortOrder}
          onChange={handleSort}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Sort by</option>
          <option value="downloads-high-low">Downloads: High to Low</option>
          <option value="downloads-low-high">Downloads: Low to High</option>
          <option value="rating-high-low">Rating: High to Low</option>
          <option value="rating-low-high">Rating: Low to High</option>
        </select>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between transition-transform hover:scale-105 duration-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-md truncate">{app.title}</h3>
                <span className="text-gray-500 text-sm truncate">
                  {app.companyName}
                </span>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.round(app.ratingAvg)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } text-sm`}
                    />
                  ))}
                  <span className="text-gray-600 text-sm ml-1">
                    ({app.reviews})
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1 truncate">
                  Downloads: {app.downloads.toLocaleString()}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="w-full mt-2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition text-sm"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="mt-10 bg-gray-100 rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Installation Summary
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8 text-gray-700">
          <p>
            <span className="font-bold">{totalApps}</span> Installed Apps
          </p>
          <p>
            <span className="font-bold">
              {totalDownloads.toLocaleString()}
            </span>{" "}
            Total Downloads
          </p>
          <p>
            <span className="font-bold">{averageRating}</span> Avg. Rating
          </p>
        </div>
      </div>
    </div>
  );
};

export default Installations;
