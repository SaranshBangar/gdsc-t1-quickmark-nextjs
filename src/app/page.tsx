"use client";

import React, { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { Button } from "@/components/ui/moving-border";
import ReactMarkdown from 'react-markdown';
import Tiptap from "./Tiptap";
import { Interweave } from "interweave";
import { WavyBackground } from "@/components/ui/wavy-background";

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
    text: "Football fanatic and a boring techie",
  },
  {
    text: "I am running out of sentences 😅",
  },
  {
    text: "Alright the markdown editor is ready",
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
      <section className="h-auto flex justify-around items-center m-16 overflow-hidden max-[1100px]:flex-col bg-black backdrop-blur-sm">
        <div className="w-[100%] border-2 border-sky-700 flex flex-col items-center max-[1100px]:mb-6">
          <h1 className="text-5xl font-serif font-bold mt-4 text-center max-[480px]:text-3xl">Markdown Editor</h1>
          <div className="w-full relative backdrop-blur-md text-white flex flex-col justify-between my-4 md:px-6 lg:px-12">
            <Tiptap setContent={setTextareaValue}/>
            <Interweave content={textareaValue} className="p-2 border-2 border-dotted border-sky-700 shadow-sm shadow-black m-2" />
          </div>
          <div className="flex flex-row gap-16 mb-4 max-sm:gap-2 max-md:gap-4 max-md:w-[175px] max-md:h-[90px] max-md:mb-4">
              <Button borderRadius="1.75rem" borderClassName="w-[100px] h-[40px] rounded-[25px]" onClick={handleCopy}>Copy</Button>
              <Button borderRadius="1.75rem" borderClassName="w-[100px] h-[40px] rounded-[25px]" onClick={handleDownload}>Download</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
