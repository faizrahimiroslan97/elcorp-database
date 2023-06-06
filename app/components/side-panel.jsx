// app/components/side-panel.jsx

import { Link } from "@remix-run/react";

export function SidePanel() {
  return (
    <div className="w-1/6 bg-gray-200 flex flex-col">
      <div className="text-center bg-gray-300 h-20 flex items-center justify-center">
        <h2 className="text-xl text-blue-500 font-bold">ElCorp Tech</h2>
      </div>
      <div className="flex-1 py-4 flex flex-col gap-y-10 items-center">
        <Link to="/home">
          <div>Dashboard</div>
        </Link>
        <div>Certificates/Licenses</div>
        <Link to="/proposals">
          <div>Proposals</div>
        </Link>
        <div>Profiles</div>
        <div>Media</div>
      </div>
      <div className="text-center p-6 bg-gray-300">
        <form action="/logout" method="post">
          <button
            type="submit"
            className="rounded-xl bg-blue-600 font-semibold text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-400 hover:-translate-y-1"
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}
