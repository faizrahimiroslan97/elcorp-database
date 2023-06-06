// ./app/routes/proposals.jsx

import { useLoaderData, Outlet } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { Prisma } from "@prisma/client";
import { Layout } from "~/components/layout";
import { SidePanel } from "~/components/side-panel";
import { SearchBar } from "~/components/search-bar";

export const action = async ({ request }) => {
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
};

export default function Proposals() {
  return (
    <Layout>
      <div className="h-full flex">
        <SidePanel />
        <div className="flex-1 flex flex-col">
          <Outlet />
          <div className="w-full px-12 py-6 flex flex-col gap-x-4 h-full">
            <div className="bg-white rounded px-2 py-4">
              <h1 className="text-4xl">Proposals</h1>
              <h2 className="text-lg">
                Repository of proposals held by ElCorp Tech
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
