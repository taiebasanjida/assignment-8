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

  if (loading) return <LoadingSpinner />;

  if (installedApps.length === 0)
    return (
      <div className="text-center py-20 mt-16">
        <h1 className="text-3xl font-bold text-gray-800">My Installation</h1>
        <p className="text-gray-500 mt-2">
          You have not installed any apps yet.
        </p>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-16">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Installation</h1>
        <p className="text-gray-500 mt-2">Manage your installed apps below</p>
      </div>

      <div className="flex justify-end mb-6">
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
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-2 relative"
          >
            {/* Top Row: Image + Button */}
            <div className="flex items-start gap-3">
              <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
              />

              {/* Title + Company + Stars */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-md">{app.title}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <span>{app.companyName}</span>
                    <span className="text-gray-400">▼</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-2">
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

                <p className="text-gray-600 text-sm mt-1">
                  Downloads: {app.downloads.toLocaleString()}
                </p>
              </div>

              {/* Button Right Side */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="ml-auto px-3 py-1 bg-red-600 text-white rounded shadow hover:bg-red-700 transition text-sm self-start"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installations;
