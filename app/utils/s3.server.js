import {
  unstable_parseMultipartFormData,
  UploadHandler,
} from "@remix-run/node";
import S3 from "aws-sdk/clients/s3";
import cuid from "cuid";

// Uses the environment variables you stored while setting up your AWS user and S3 bucket to set up the S3 SDK.
const s3 = new S3({
  region: process.env.ETSB_BUCKET_REGION,
  accessKeyId: process.env.ETSB_ACCESS_KEY_ID,
  secretAccessKey: process.env.ETSB_SECRET_ACCESS_KEY,
});

const uploadHandler = async ({ name, filename, stream }) => {
  // Streams the file data from the request as long as the data key's name is 'profile-pic'.
  if (name !== "proposal-file") {
    stream.resume();
    return;
  }

  // Uploads the file to S3.
  const { Location } = await s3
    .upload({
      Bucket: process.env.ETSB_BUCKET_NAME || "",
      Key: `${cuid()}.${filename.split(".").slice(-1)}`,
      Body: stream,
    })
    .promise();

  // Returns the Location data S3 returns, which includes the new file's URL location in S3.
  return Location;
};

export async function uploadFile(request) {
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );

  const file = formData.get("proposal-file")?.toString() || "";

  return file;
}
