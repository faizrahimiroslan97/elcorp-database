// ./app/routes/proposals/add.jsx

import { useLoaderData, Link, Outlet } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { Prisma } from "@prisma/client";

export const action = async ({ request }) => {
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const action = form.get("_action");
  const title = form.get("title");
  const intro = form.get("password");
  const summary = form.get("summary");
  const conclusion = form.get("conclusion");
  const cost = form.get("cost");
  const startDate = form.get("startDate");
  const endDate = form.get("endDate");
  let fileName = form.get("fileName");

  return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
};

export default function ProposalsAdd() {
  const actionData = useActionData();
  const [errors, setErrors] = useState(actionData?.errors || {});
  const [formError, setFormError] = useState(actionData?.error || "");

  const [formData, setFormData] = useState({
    email: actionData?.fields?.email || "",
    password: actionData?.fields?.password || "",
    firstName: actionData?.fields?.lastName || "",
    lastName: actionData?.fields?.firstName || "",
  });

  return (
    <div className="w-full px-12 py-6 flex flex-col gap-x-4 gap-y-4 h-full">
      <div className="bg-white rounded px-2 py-4">
        <h1 className="text-4xl">Proposals - Add New</h1>
      </div>
      <form method="post" className="bg-white rounded flex py-4">
        <div className="flex flex-col w-1/2 gap-y-4">
          <div className="text-xs font-semibold text-center tracking-wide text-red-500 w-full">
            {formError}
          </div>
          <div className="w-full px-4">
            <label>Title of Proposal:</label>
          </div>
          <div className="w-full px-4">
            <input
              type="text"
              id="title"
              name="title"
              className="border-2 border-gray-300 rounded py-1 w-full px-2"
            />
          </div>
          <div className="w-full px-4">
            <p>Introduction:</p>
          </div>
          <div className="w-full px-4">
            <input
              type="text"
              id="title"
              name="title"
              className="border-2 border-gray-300 rounded py-1 w-full px-2 h-20"
            />
          </div>
          <div className="w-full px-4">
            <p>Summary</p>
          </div>
          <div className="w-full px-4">
            <input
              type="text"
              id="title"
              name="title"
              className="border-2 border-gray-300 rounded py-1 w-full px-2 h-20"
            />
          </div>
          <div className="w-full px-4">
            <p>Conclusion</p>
          </div>
          <div className="w-full px-4">
            <input
              type="text"
              id="title"
              name="title"
              className="border-2 border-gray-300 rounded py-1 w-full px-2 h-20"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-y-4">
          <div className="w-full px-4">
            <p>Total Cost: </p>
          </div>
          <div className="w-full px-4">
            <input
              type="text"
              id="title"
              name="title"
              className="border-2 border-gray-300 rounded py-1 w-full px-2"
            />
          </div>
          <div className="w-full px-4">
            <p>Project Start Date: </p>
          </div>
          <div className="w-full px-4">
            <input
              type="text"
              id="title"
              name="title"
              className="border-2 border-gray-300 rounded py-1 w-full px-2"
            />
          </div>
          <div className="w-full px-4">
            <p>Project End Date</p>
          </div>
          <div className="w-full px-4">
            <input
              type="text"
              id="title"
              name="title"
              className="border-2 border-gray-300 rounded py-1 w-full px-2"
            />
          </div>
          <p>Presentation Files: </p>
          <div className="px-4">
            <input type="file" className="py-1 px-2" />
          </div>
          <button
            type="submit"
            name="_action"
            value={action}
            className="rounded-xl mt-2 bg-blue-600 px-3 py-2 text-white font-semibold transition duration-300 ease-in-out hover:bg-blue-400 hover:-translate-y-1"
          >
            Add to Database
          </button>
        </div>
      </form>
    </div>
  );
}
