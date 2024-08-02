import dotenv from "dotenv";
import { ChatGroq } from "@langchain/groq";
import { ChatOpenAI } from "@langchain/openai";
import type { AIMessage } from "@langchain/core/messages";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import type { RunnableLike } from "@langchain/core/runnables";

import { Mode } from "./types";
import { GoogleSearchRunnable } from "./GoogleSearchRunnable";

dotenv.config();

const systemTemplate =
  "You are an AI assistant that helps find the most relevant LinkedIn profile for a company. When provided with the company name and a list of possible LinkedIn profile links, you will analyze and select the link that most likely corresponds to the company's official LinkedIn profile. Ensure the selection is accurate and based on relevance.";
const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", systemTemplate],
  ["user", "{name}, {links}"],
]);

const runParseChatAnswer: RunnableLike<AIMessage> = (input) => {
  const content = input.content.toString();
  console.log("Chat response: ", input);
  try {
    return {
      url: content
        .match(/\bhttps?:\/\/[^\s<>"']+/gi)[0]
        .replace(/^["'<]|[">]$/g, ""),
      context: input.content,
    };
  } catch (e) {
    return "";
  }
};

const openaiModel = new ChatOpenAI({
  temperature: 0,
});

const groqModel = new ChatGroq({
  temperature: 0,
});

const GoogleSearchRunnableInstance = new GoogleSearchRunnable();

export const getChain = (mode?: Mode) => {
  return GoogleSearchRunnableInstance.pipe(promptTemplate)
    .pipe(mode === Mode.GROQ ? groqModel : openaiModel)
    .pipe(runParseChatAnswer);
};
