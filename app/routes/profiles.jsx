// ./app/routes/profiles.jsx

import { Outlet } from "@remix-run/react";
import { Layout } from "~/components/layout";
import { SidePanel } from "~/components/side-panel";

export default function Profiles() {
  return (
    <Layout>
      <div className="h-full flex">
        <SidePanel />
        <div className="flex-1 flex flex-col">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
}
