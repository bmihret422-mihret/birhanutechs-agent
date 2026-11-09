import { defineAgent } from "eve";

export default defineAgent({
  "model": "google/gemini-2.5-flash-lite",
  "reasoning": "medium",
  "compaction": {
    "threshold": 0.7
  }
});
