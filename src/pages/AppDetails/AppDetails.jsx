import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appsData from "../../data/appsData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  // Load app data
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const foundApp = appsData.find((a) => String(a.id) === String(id));
      if (foundApp) {
        setApp(foundApp);

        // Check if installed
        const installedApps =
          JSON.parse(localStorage.getItem("installedApps")) || [];
        const isInstalled = installedApps.some(
          (item) => String(item.id) === String(foundApp.id)
        );
        setInstalled(isInstalled);
      }
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [id]);

  // Install handler
  const handleInstall = () => {
    if (!app) return;
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const isInstalled = installedApps.some(
      (item) => String(item.id) === String(app.id)
    );

    if (isInstalled) {
      toast.info(`${app.title} is already installed.`);
      setInstalled(true);
      return;
    }

    installedApps.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
    toast.success(`${app.title} installed successfully!`);
    setInstalled(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">App Not Found</h2>
        <p className="text-gray-500 mt-2">
          We couldn’t find the app you’re looking for.
        </p>
        <button
          onClick={() => navigate("/apps")}
          className="mt-5 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Back to All Apps
        </button>
      </div>
    );
  }

  const reviewData = [
    { rating: "5", count: Math.floor(app.reviews * 0.5) || 50 },
    { rating: "4", count: Math.floor(app.reviews * 0.3) || 30 },
    { rating: "3", count: Math.floor(app.reviews * 0.1) || 10 },
    { rating: "2", count: Math.floor(app.reviews * 0.05) || 5 },
    { rating: "1", count: Math.floor(app.reviews * 0.05) || 5 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Top Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col lg:flex-row gap-8">
        {/* Image */}
        <div className="lg:w-1/3">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-64 object-cover rounded-xl shadow-sm"
          />
        </div>

        {/* Details */}
        <div className="lg:w-2/3 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{app.title}</h1>
          <p className="text-gray-500">{app.companyName}</p>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center">
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
              <span className="ml-2 text-gray-700">
                {app.ratingAvg.toFixed(1)}
              </span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">{app.reviews} reviews</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">
              {app.downloads.toLocaleString()} downloads
            </span>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              installed
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {app.description ||
                "No description provided for this app. Check back later for more information."}
            </p>
          </div>
        </div>
      </div>

      {/* Review Chart */}
      <div className="bg-white rounded-2xl shadow-md p-6 mt-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Reviews Breakdown
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={reviewData} margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="rating" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8b5cf6" barSize={35} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppDetails;
