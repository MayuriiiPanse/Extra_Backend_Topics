import { config } from "dotenv";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate} from "@langchain/core/prompts";
config();

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GOOGLE_API_KEY,
  maxOutputTokens: 2048,
});

const promptTemplate = PromptTemplate.fromTemplate(`
    explain {topic} in very simple way like ELI5, make sure to include the core concepts and avoid unnecessary jargons.make the answer as consise as possible.`)

const chain = promptTemplate.pipe(model);

chain.invoke({
    topic : "Express"
}).then(response=>{
    console.log(response);
})