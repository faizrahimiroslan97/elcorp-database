// ./app/routes/_index.jsx

import { redirect } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";

export const loader = async ({ request }) => {
  await requireUserId(request);
  return redirect("/home");
};
