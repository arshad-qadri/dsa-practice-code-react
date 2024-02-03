import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { IoClipboardOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";


const ReactSyntaxHighlight = ({ code, index }) => {
  const [isCopy, setIsCopy] = useState(false);
  const { question, codeString, language } = code;

  const handleCopyCode = (cd) => {
    setIsCopy(true);
    navigator.clipboard.writeText(cd);
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };
  return (
    <div className="mb-16">
      <h2 className="text-white text-xl mb-4">
        {index + 1}. {question}
      </h2>
      <div className="bg-c-light-dark rounded-md overflow-hidden shadow-lg">
        <div className="text-sm inline-flex justify-between w-full px-3 py-2 text-white">
          <span>Example Code</span>{" "}
          {!isCopy ? (
            <button
              className="inline-flex items-center gap-x-1"
              onClick={() => handleCopyCode(codeString)}
            >
              <IoClipboardOutline className="text-white " /> Copy Code
            </button>
          ) : (
            <button className="inline-flex items-center gap-x-1">
              <MdDone className="text-white text-lg" /> Copied!
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          wrapLongLines={true}
          customStyle={{padding:"0 40px"}}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ReactSyntaxHighlight;
