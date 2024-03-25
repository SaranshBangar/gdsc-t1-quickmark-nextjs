"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { Button } from "@/components/ui/moving-border";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import Markdown from "react-markdown";
import marked from "marked";

const loadingStates = [
  {
    text: "Hello GDSC judges!",
  },
  {
    text: "I am Saransh Bangar",
  },
  {
    text: "2nd year Software Engineering",
  },
  {
    text: "Football fanatic and a boring tech guy",
  },
  {
    text: "I don't have anything else to write 😅",
  },
  {
    text: "Your markdown editor is ready",
  },
];

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  
  useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
          setLoading(false);
      }, 7200);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(textareaValue)
      .then (() => {
        alert("Text copied to clipboard");
      })
      .catch (e => {
        console.log(e);
      })
  }
  
  const handleDownload = () => {
    const blob = new Blob([textareaValue], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'markdown_code.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } 

  return (
    <main>
      <Loader loadingStates={loadingStates} loading={loading} duration={1200} />  
      <section className="flex justify-around items-center m-16 overflow-hidden max-[1100px]:flex-col">
        <div className="w-[40%] h-screen border-2 border-sky-700 flex flex-col items-center max-[1100px]:w-[100%] max-[1100px]:mb-6 max-[1100px]:h-[600px]">
          <h1 className="text-5xl font-serif font-bold mt-4 text-center max-[480px]:text-3xl">Markdown Editor</h1>
          <div className="grid grid-cols-5 gap-4 m-4 max-[500px]:gap-2 max-[500px]:grid-cols-3">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              H1
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              H2
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              H3
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              H4
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              H5
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 max-[500px]:hidden">
              H6
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Bold
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Italics
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Link
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Code
            </button>
          </div>
          <textarea
            id="input"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            className="bg-black w-[90%] h-[60%] mt-4 rounded-md border-dotted outline-dotted outline-sky-700 border-sky-700 text-xl font-sans overflow-y-auto p-2"
            placeholder=" Enter your markdown code here..."
            autoFocus
          >
          </textarea>
          <div className="mt-6 flex flex-row gap-16 mb-4 max-sm:gap-2 max-md:gap-4 max-md:w-[175px] max-md:h-[90px]">
            <Button borderRadius="1.75rem" borderClassName="w-[100px] h-[40px] rounded-[25px]" onClick={handleCopy}>Copy</Button>
            <Button borderRadius="1.75rem" borderClassName="w-[100px] h-[40px] rounded-[25px]" onClick={handleDownload}>Download</Button>
          </div>
        </div>
        <div className="w-[40%] h-screen border-2 border-sky-700 flex flex-col items-center max-[1100px]:w-[100%] max-[1100px]:h-[600px]">
          <h1 className="text-5xl font-serif font-bold mt-4 max-[480px]:text-3xl">Preview</h1>
          <div className="w-[90%] h-[85%] m-4 text-xl font-sans overflow-auto rounded-md border-dotted outline-dotted outline-sky-700 border-sky-700 p-2">
            <ReactMarkdown>{textareaValue}</ReactMarkdown>
          </div>
        </div>
      </section>
    </main>
  );
}
