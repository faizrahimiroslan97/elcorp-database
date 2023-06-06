// ./app/routes/proposals.jsx

import { useLoaderData, Outlet } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { getOtherUsers } from "~/utils/user.server";
import { Prisma } from "@prisma/client";
import { Layout } from "~/components/layout";
import { SidePanel } from "~/components/side-panel";
import { SearchBar } from "~/components/search-bar";

export const action = async ({ request }) => {
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler // <-- we'll look at this deeper next
  );
};

export default function Home() {
  return (
    <Layout>
      <div className="h-full flex">
        <SidePanel />
        <div className="flex-1 flex flex-col">
          <Outlet />
          <div className="w-full px-6 flex flex-col gap-x-4 h-full">
            <h1 className="text-4xl">Proposals</h1>
            <h2 className="text-lg">
              Repository of proposals held by ElCorp Tech
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
