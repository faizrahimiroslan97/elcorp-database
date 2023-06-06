// app/routes/fileupload.jsx

import { json } from "@remix-run/node";
import { uploadFile } from "~/utils/s3.server";

export const action = async ({ request }) => {
  // Uploads the file past along in the request data.
  const fileUrl = await uploadFile(request);

  // Responds to the POST request with the fileUrl variable.
  return json({ fileUrl });
};
