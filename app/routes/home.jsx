// ./app/routes/home.jsx

import { useLoaderData, Link, Outlet } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { getOtherUsers } from "~/utils/user.server";
import { Prisma } from "@prisma/client";
import { Layout } from "~/components/layout";
import { SidePanel } from "~/components/side-panel";
import { SearchBar } from "~/components/search-bar";
import profileIcon from "~/media/img/profile.png";
import businessfinanceIcon from "~/media/img/business_finance.png";
import imageIcon from "~/media/img/image.png";
import applicationIcon from "~/media/img/applications.png";

export const loader = async ({ request }) => {
  const userId = await requireUserId(request);
  const users = await getOtherUsers(userId);

  const url = new URL(request.url);
  const sort = url.searchParams.get("sort");
  const filter = url.searchParams.get("filter");

  let sortOptions = {};
  if (sort) {
    if (sort === "firstName") {
      sortOptions = { author: { profile: { firstName: "asc" } } };
    }
    if (sort === "lastName") {
      sortOptions = { author: { profile: { lastName: "asc" } } };
    }
  }

  let textFilter = {};
  if (filter) {
    textFilter = {
      OR: [
        { message: { mode: "insensitive", contains: filter } },
        {
          author: {
            OR: [
              {
                profile: {
                  is: { firstName: { mode: "insensitive", contains: filter } },
                },
              },
              {
                profile: {
                  is: { lastName: { mode: "insensitive", contains: filter } },
                },
              },
            ],
          },
        },
      ],
    };
  }

  return json({ users });
};

export default function Home() {
  return (
    <Layout>
      <div className="h-full flex">
        <SidePanel />
        <div className="flex-1 flex flex-col">
          {/*<SearchBar />*/}
          <Outlet />
          <div className="w-full px-12 flex flex-col gap-x-4 h-full py-6">
            <div className="bg-white rounded px-2 py-4">
              <h1 className="text-4xl">Admin Dashboard</h1>
              <h2 className="text-lg">
                Welcome to ElCorp Technologies Database
              </h2>
            </div>
            <div className="flex items-center pt-6 h-48 gap-x-4">
              <div className="bg-white w-1/4 h-full rounded-xl px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-gray-200 justify-end">
                <p className="text-lg">Certificates/Licenses</p>
                <div className="inline-flex">
                  <img
                    src={applicationIcon}
                    className="m-2 ml-auto mr-auto h-28 w-28"
                  />
                  <p className="text-6xl fixed right-0 bottom-0 mr-6 m-2">0</p>
                </div>
              </div>
              <Link
                to="/proposals"
                className="bg-white w-1/4 h-full rounded-xl px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-gray-200 justify-end"
              >
                <p className="text-lg">Proposals</p>
                <div className="inline-flex">
                  <img
                    src={businessfinanceIcon}
                    className="m-2 ml-auto mr-auto h-28 w-28"
                  />
                  <p className="text-6xl fixed right-0 bottom-0 mr-6 m-2">0</p>
                </div>
              </Link>
              <div className="bg-white w-1/4 h-full rounded-xl px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-gray-200 justify-end">
                <p className="text-lg">Profiles</p>
                <div className="inline-flex">
                  <img
                    src={imageIcon}
                    className="m-2 ml-auto mr-auto h-28 w-28"
                  />
                  <p className="text-6xl fixed right-0 bottom-0 mr-6 m-2">0</p>
                </div>
              </div>
              <div className="bg-white w-1/4 h-full rounded-xl px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-gray-200 justify-end">
                <p className="text-lg">Media</p>
                <div className="inline-flex">
                  <img
                    src={profileIcon}
                    className="m-2 ml-auto mr-auto h-28 w-28"
                  />
                  <p className="text-6xl fixed right-0 bottom-0 mr-6 m-2">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
