
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../components/Loading/Loading";

const Installations = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(""); 

  // Load installed apps from localStorage
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
      setInstalledApps(apps);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Uninstall handler
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    toast.success("App uninstalled successfully!");
  };

  // Sort handler
  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    const sortedApps = [...installedApps];
    if (value === "high-low") {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    } else if (value === "low-high") {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    }
    setInstalledApps(sortedApps);
  };

  if (loading) return <LoadingSpinner/>;

  if (installedApps.length === 0)
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">
          No Installed Apps
        </h2>
        <p className="text-gray-500 mt-2">
          You have not installed any apps yet.
        </p>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-gray-800">My Installation</h2>

        <select
          value={sortOrder}
          onChange={handleSort}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">Sort by Downloads</option>
          <option value="high-low">High to Low</option>
          <option value="low-high">Low to High</option>
        </select>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-3"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-40 object-cover rounded-xl"
            />
            <h3 className="font-semibold text-lg">{app.title}</h3>
            <p className="text-gray-500 text-sm">{app.companyName}</p>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.round(app.ratingAvg)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-gray-600 text-sm ml-1">
                ({app.reviews})
              </span>
            </div>

            <p className="text-gray-600 text-sm">
              Downloads: {app.downloads.toLocaleString()}
            </p>

            <button
              onClick={() => handleUninstall(app.id)}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installations;
