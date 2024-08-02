import "dotenv/config";
import express from "express";
import type { RequestHandler } from "express";

import { Mode } from "./types";
import { getChain } from "./getLinkedInInfoChain";

const app = express();
app.use(express.json());
const port = process.env.PORT;

export const getLinkedInProfile: RequestHandler = async (req, res) => {
  const { companyName, expanded, mode = Mode.GROQ } = req.body;
  try {
    if (!companyName) {
      res.status(400).json({ error: "Please provide company name" });
    }
    const chain = getChain(mode);
    const response = await chain.invoke({
      name: companyName,
    });
    const { url, context } = response;

    console.log("Done");
    res.json({ done: true, url, ...(expanded && { context }) });
  } catch (error) {
    console.error("Error during processing:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

app.post("/linkedin/get-company-profile", getLinkedInProfile);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
