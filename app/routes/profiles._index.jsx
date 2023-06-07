// ./app/routes/profiles.jsx

import { useLoaderData, Link, Outlet } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { Prisma } from "@prisma/client";
import profileIcon from "~/media/img/profile.png";

export default function ProfilesIndex() {
  return (
    <div className="w-full px-12 py-6 flex flex-col gap-x-4 gap-y-4 h-full">
      <div className="bg-white rounded px-2 py-4">
        <h1 className="text-4xl">Profiles</h1>
        <h2 className="text-lg">User profiles of ElCorp Tech staff</h2>
      </div>
      <div className="flex items-center h-44 gap-x-4">
        <Link
          to=""
          className="bg-white w-1/4 h-full rounded-xl px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-gray-200 justify-end"
        >
          <p className="text-lg">User 1</p>
          <div className="inline-flex">
            <img src={profileIcon} className="m-2 ml-auto mr-auto h-28 w-28" />
          </div>
        </Link>
        <Link
          to=""
          className="bg-white w-1/4 h-full rounded-xl px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-gray-200 justify-end"
        >
          <p className="text-lg">User 2</p>
          <div className="inline-flex">
            <img src={profileIcon} className="m-2 ml-auto mr-auto h-28 w-28" />
          </div>
        </Link>
        <Link
          to=""
          className="bg-white w-1/4 h-full rounded-xl px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-gray-200 justify-end"
        >
          <p className="text-lg">User 3</p>
          <div className="inline-flex">
            <img src={profileIcon} className="m-2 ml-auto mr-auto h-28 w-28" />
          </div>
        </Link>
      </div>
    </div>
  );
}
