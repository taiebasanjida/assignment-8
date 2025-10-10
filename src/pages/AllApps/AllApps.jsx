// src/pages/AllApps/AllApps.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import appsData from "../../data/appsData";
import { FaStar } from "react-icons/fa";

const AllApps = ({ topOnly = false }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const showAll = searchParams.get("show") === "all";

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = appsData.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Apps to show
  const appsToShow = topOnly ? filteredApps.slice(0, 8) : filteredApps;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and subtitle only for AllApps page */}
        {!topOnly && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">All Apps</h2>
            <p className="text-gray-600 mt-2">
              Discover amazing apps for productivity, learning and more.
            </p>
          </div>
        )}

        {/* Search input only for AllApps page */}
        {!topOnly && (
          <div className="flex justify-end mb-8">
            <input
              type="text"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
            />
          </div>
        )}

        {/* Apps grid */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : appsToShow.length === 0 ? (
          <p className="text-center text-gray-500">No App Found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {appsToShow.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded shadow p-4 cursor-pointer hover:shadow-lg transition"
                onClick={() => navigate(`/apps/${app.id}`)}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h3 className="font-semibold text-lg">{app.title}</h3>
                <p className="text-gray-500 text-sm">{app.companyName}</p>
                <div className="flex items-center mt-2 gap-1">
                  {[...Array(Math.round(app.ratingAvg))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">
                    ({app.reviews} reviews)
                  </span>
                </div>
                <p className="mt-1 text-gray-600 text-sm">
                  Downloads: {app.downloads.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Show All button only for top 8 on Home route */}
        {topOnly && filteredApps.length > 8 && (
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/apps")}
              className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              Show All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllApps;
