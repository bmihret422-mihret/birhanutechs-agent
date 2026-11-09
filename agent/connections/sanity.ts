import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.sanity.io",
  description: "Query and edit content in your datasets.",
  auth: connect({ connector: "mcp.sanity.io/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
