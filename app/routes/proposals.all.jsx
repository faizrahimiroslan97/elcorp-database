// ./app/routes/proposals/all.jsx

import { useLoaderData, Link, Outlet } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { Prisma } from "@prisma/client";
import { SearchBar } from "~/components/search-bar";

export const action = async ({ request }) => {
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
};

export default function ProposalsAll() {
  return (
    <div className="w-full px-12 py-6 flex flex-col gap-x-4 gap-y-4 h-full">
      <div className="bg-white rounded px-2 py-4">
        <h1 className="text-4xl">Proposals - All</h1>
        <h2 className="text-lg">Repository of proposals held by ElCorp Tech</h2>
      </div>
      <div className="bg-white rounded">
        <SearchBar />
        <div className="w-full px-6 flex items-center gap-x-4 border-b-4 border-b-blue-900 border-opacity-30 h-20">
          <button className="rounded-xl bg-sky-700 font-semibold text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-sky-600 hover:shadow hover:drop-shadow hover:-translate-y-1">
            Select
          </button>
          <button className="rounded-xl bg-sky-700 font-semibold text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-sky-600 hover:shadow hover:drop-shadow hover:-translate-y-1">
            Filter
          </button>
          <button className="rounded-xl bg-sky-700 font-semibold text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-sky-600 hover:shadow hover:drop-shadow hover:-translate-y-1">
            Sort
          </button>
          <Link to="/proposals/add">
            <button className="rounded-xl bg-green-700 font-semibold text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-green-600 hover:shadow hover:drop-shadow hover:-translate-y-1">
              Add New
            </button>
          </Link>
        </div>
        <div className="flex items-center bg-gray-200 border-b-2 border-opacity-30 border-b-blue-900">
          <div className="w-1/3 px-4 py-4">
            <h4>Title</h4>
          </div>
          <div className="w-1/3 px-4 py-4">
            <h4>Company</h4>
          </div>
          <div className="w-1/3 px-4 py-4">
            <h4>Date</h4>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/3 px-4 py-4">
            <p>Proposal for Bank Islam</p>
          </div>
          <div className="w-1/3 px-4 py-4">
            <p>BANK ISLAM SDN BHD</p>
          </div>
          <div className="w-1/3 px-4 py-4">
            <p>30/5/2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
