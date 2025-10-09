import React, { useState } from "react";
import appsData from "../../data/appsData"; 
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const appsToShow = showAll ? filteredApps : filteredApps.slice(0, 8);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">All Apps</h2>
          <p className="text-gray-600 mt-2">
            Discover amazing apps for productivity, learning and more.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <p>Total Apps: {filteredApps.length}</p>
          <input
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
          />
        </div>

        {appsToShow.length === 0 ? (
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

        {!showAll && filteredApps.length > 8 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
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
