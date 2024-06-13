import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import removeMarkdown from "markdown-to-text";
import logo from "../assets/small_logo.jpg";

const API_KEY = "AIzaSyBIEScln1EtBCi61VYNPaogJ8U7Fe-LFEA";
const AIChatBot = () => {


  const [Askquery, setquery] = useState("");
  const [result, setResult] = useState("");

  // Access your API key as an environment variable.
  const genAI = new GoogleGenerativeAI(API_KEY);

  async function run() {
    // Choose a model that's appropriate for your use case.
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = Askquery;

    const query = await model.generateContent(prompt);
    const response = query.response;
    const text = response.text();
    console.log(text);
    // const markdown = removeMarkdown(markdown);

    setResult(text);
  }
  const handleInputChange = (event) => {
    setquery(event.target.value);
  };

  const handleSend = () => {
    if (Askquery.trim() === "") {
      alert("Please enter a query");
      return;
    }
    run();
    console.log("query sent:", Askquery);
    setquery(""); // Clear input field after sending query
  };

  return (
    <>
      <div className="flex flex-col justify-start pt-10 items-center h-screen bg-gray-100">
        <span className="flex item-center justify-center bg-white pl-3 pr-7 py-1 shodow-xl my-2 rounded-xl">
            <img width={50} src={logo} alt="Amazon Logo" /><span className="text-2xl"> AI chat Bot</span>
        </span>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            className="border outline-none border-black border  p-2 rounded mb-4 w-[280px] md:w-[400px]"
            value={Askquery}
            onChange={handleInputChange}
            placeholder="Type your query..."
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
      <div className="text-lg text-black p-5 rounded-xl shadow-xl">
        {result}
      </div>
    </>
  );
};

export default AIChatBot;
