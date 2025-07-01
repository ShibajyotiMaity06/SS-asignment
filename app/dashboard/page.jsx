"use client";

import { useEffect, useState } from "react";
import dummyData from "../data/dummy_data.json";
import Link from "next/link";
import { ClockIcon, BellAlertIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Simulated API call with delay
    setTimeout(() => {
      try {
        setData(dummyData);
      } catch (err) {
        console.error(err);
        setError("Failed to load dashboard data");
      }
    }, 1000);
  }, []);

  // in case of any error did this
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p role="alert" className="text-red-600 font-medium">
          {error} — please refresh or try again later.
        </p>
      </div>
    );
  }

  //   till data comes to simulate loading
  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p role="status" className="text-gray-500 animate-pulse">
          Loading dashboard...
        </p>
      </div>
    );
  }

  const { analyticsSummary, notifications } = data;

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-6 animate-fade-in">
        {/* title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {analyticsSummary.widgetTitle}
        </h2>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <SummaryCard
            label="Total Users"
            value={analyticsSummary.totalUsers}
          />
          <SummaryCard
            label="New Signups"
            value={analyticsSummary.newSignupsToday}
          />
          <SummaryCard
            label="Active Users"
            value={analyticsSummary.activeUsers}
          />
          <SummaryCard
            label="Revenue Today"
            value={analyticsSummary.revenueToday}
          />
        </div>

        <div className="mb-10">
          <p className="text-gray-700 text-lg font-medium">
            Conversion Rate:{" "}
            <span className="font-bold text-blue-600">
              {analyticsSummary.conversionRate}
            </span>
          </p>
        </div>

        {/* Recent activities part */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <ClockIcon className="w-6 h-6 text-indigo-500" />
            Recent Activities
          </h3>

          <div className="grid gap-4">
            {analyticsSummary.recentActivities.slice(0, 4).map((activity) => (
              <div
                key={activity.id}
                className="bg-white border-l-4 border-blue-500 shadow-sm p-4 rounded-lg hover:shadow-md transition hover:scale-[1.01]"
              >
                <p className="text-sm text-gray-800 font-medium">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(activity.timestamp).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          {/* View more part  */}
          <Link
            href="/dashboard/details"
            aria-label="View all activities"
            className="text-blue-600 mt-4 inline-block hover:underline text-sm"
          >
            View More →
          </Link>
        </section>

        {/* Notifications section */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BellAlertIcon className="w-6 h-6 text-rose-500" />
            Notifications
          </h3>

          <ul className="space-y-3">
            {notifications.map((n) => (
              <li
                key={n.id}
                className={`p-3 rounded-lg font-medium ${
                  n.severity === "high"
                    ? "bg-red-100 text-red-800"
                    : "bg-blue-100 text-blue-800"
                } transition hover:brightness-95`}
              >
                {n.message}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

// Summary card which renders the metrics
function SummaryCard({ label, value }) {
  return (
    <div className="bg-blue-50 text-blue-900 rounded-xl p-4 shadow hover:shadow-md transition hover:scale-[1.02]">
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
