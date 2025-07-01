"use client";
import Link from "next/link";
import dummyData from "../../data/dummy_data.json";

export default function DetailsPage() {
  const activities = dummyData.analyticsSummary.recentActivities;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl text-blue-700 font-bold mb-4">
          All Activities
        </h2>
        <ul className="space-y-3">
          {activities.map((a) => (
            <li
              key={a.id}
              className="bg-gray-50 text-blue-400 p-4 rounded shadow-sm"
            >
              <p className="font-medium">{a.description}</p>
              <p className="text-sm text-gray-500">
                {new Date(a.timestamp).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
        <Link
          href="/dashboard"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
