// ./app/routes/certificates.jsx

import { useLoaderData, Link, Outlet } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { Prisma } from "@prisma/client";
import applicationIcon from "~/media/img/applications.png";

export default function CertificatesIndex() {
  return (
    <div className="w-full px-12 py-6 flex flex-col gap-x-4 gap-y-4 h-full">
      <div className="bg-white rounded px-2 py-4">
        <h1 className="text-4xl">Certificate & Licenses</h1>
        <h2 className="text-lg">
          Repository of certificates held by ElCorp Tech
        </h2>
      </div>

      <div className="bg-white rounded px-2 py-4 w-fit">
        <h3 className="text-lg">Choose a category</h3>
      </div>
      <div className="flex items-center h-44 gap-x-4">
        <Link
          to=""
          className="bg-white w-1/4 h-full rounded-xl px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-gray-200 justify-end hover:-translate-y-1 transition duration-300 ease-in-out"
        >
          <p className="text-lg">Certificates</p>
          <div className="inline-flex">
            <img
              src={applicationIcon}
              className="m-2 ml-auto mr-auto h-28 w-28"
            />
            <p className="text-6xl fixed right-0 bottom-0 mr-6 m-2">0</p>
          </div>
        </Link>
        <Link
          to=""
          className="bg-white w-1/4 h-full rounded-xl px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-gray-200 justify-end hover:-translate-y-1 transition duration-300 ease-in-out"
        >
          <p className="text-lg">Licenses</p>
          <div className="inline-flex">
            <img
              src={applicationIcon}
              className="m-2 ml-auto mr-auto h-28 w-28"
            />
            <p className="text-6xl fixed right-0 bottom-0 mr-6 m-2">0</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
