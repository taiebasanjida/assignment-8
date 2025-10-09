import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/Loading/Loading";

const Installations = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
      setInstalledApps(apps);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    toast.success("App uninstalled successfully!");
  };

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
          className="border border-gray-300 rounded px-4 py-2"
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
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-2 relative"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-md">{app.title}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <span>{app.companyName}</span>
                  </div>
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
                  <p className="text-gray-600 text-sm mt-1">
                    Downloads: {app.downloads.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded shadow hover:bg-red-700 transition text-sm"
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installations;
