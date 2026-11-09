import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.onkernel.com/mcp",
  description: "Run cloud browsers for AI agents.",
  auth: connect({ connector: "mcp.onkernel.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
