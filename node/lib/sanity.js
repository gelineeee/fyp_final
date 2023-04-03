import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "l5skxf4a",
  dataset: "production",
  apiVersion: "v1",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});
