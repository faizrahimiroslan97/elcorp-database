// app/components/side-panel.jsx

import { Link } from "@remix-run/react";

export function SidePanel() {
  return (
    <div className="w-1/6 bg-gray-200 flex flex-col">
      <div className="text-center bg-sky-900 h-20 flex items-center justify-center">
        <h2 className="text-2xl text-white font-extrabold font-poppins">
          ElCorp Tech
        </h2>
      </div>
      <div className="flex-1 py-4 flex flex-col gap-y-10 items-center">
        <Link to="/home">
          <div>Dashboard</div>
        </Link>
        <Link to="/certificates">
          <div>Certificates/Licenses</div>
        </Link>
        <Link to="/proposals">
          <div>Proposals</div>
        </Link>
        <Link to="/profiles">
          <div>Profiles</div>
        </Link>
        <Link to="/multimedia">
          <div>Media</div>
        </Link>
      </div>
      <div className="text-center p-6 bg-gray-300">
        <form action="/logout" method="post">
          <button
            type="submit"
            className="rounded-xl bg-sky-600 font-semibold text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-sky-400 hover:-translate-y-1"
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}
