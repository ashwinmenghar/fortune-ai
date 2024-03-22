"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  CircleUserRound,
  Compass,
  Lightbulb,
  Youtube,
  Code,
  SendHorizontal,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Context } from "@/context/ContextProvider";

const FortuneBody = () => {
  const {
    submit,
    recentPrompts,
    displayResult,
    loading,
    result,
    input,
    setInput,
    setDisplayResult,
  } = useContext(Context);

  const [searching, setSearching] = useState(false);
  useEffect(() => {
    setSearching(false);
  }, [recentPrompts]);

  return (
    <>
      <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
        <div className="flex items-center justify-between p-5 text-xl text-gray-400">
          <p>Fortune Ai</p>
          <CircleUserRound size={40} className="text-softTextColor" />
        </div>
        <div className="max-w-[900px] m-auto">
          {!displayResult ? (
            <>
              <div className="my-12 text-5xl font-medium p-5">
                <p>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Hello, User
                  </span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="grid grid-cols-4 gap-5 p-5">
                <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                  <p>
                    Suggest beautiful places to see on an upcoming road trip
                  </p>
                  <Compass
                    size={35}
                    className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                  />
                </div>
                <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                  <p>
                    What’s the reaction to and impact of autonomous vehicles
                  </p>
                  <Lightbulb
                    size={35}
                    className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                  />
                </div>
                <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                  <p>Come up with a recipe for an upcoming event</p>
                  <Youtube
                    size={35}
                    className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                  />
                </div>
                <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                  <p>Evaluate and rank common camera categories</p>
                  <Code
                    size={35}
                    className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                  />
                </div>
              </div>
            </>
          ) : !searching ? (
            <div className="result">
              <div className="my-10 flex items-center gap-5">
                <CircleUserRound size={40} className="text-softTextColor" />
                <p>{recentPrompts}</p>
              </div>
              <div className="flex items-start gap-5">
                <img src="/gemini.png" alt="" />
                <p
                  className="text-md font-normal loading-6 text-gray-400"
                  dangerouslySetInnerHTML={{ __html: result }}
                ></p>
              </div>
            </div>
          ) : (
            <>
              <div className="result">
                <div className="my-10 flex items-center gap-5">
                  <CircleUserRound size={40} className="text-softTextColor" />
                  <p>{recentPrompts}</p>
                </div>
                <div
                  role="status"
                  className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
                >
                  <div className="flex items-start gap-5 w-auto">
                    <img src="/gemini.png" alt="" />
                    <div className="w-96 ">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 bg-gradient-to-r from-indigo-500"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5 bg-gradient-to-r from-indigo-500"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 bg-gradient-to-r from-indigo-500"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5 bg-gradient-to-r from-indigo-500"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5 bg-gradient-to-r from-indigo-500"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] bg-gradient-to-r from-indigo-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="absolute bottom-0 w-full max-w-[900px] px-5 m-auto">
            <form action={submit}>
              <div className="flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 px-5 rounded-full">
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="text"
                  className="flex-1 bg-transparent border-none outline-none p-2 text-md text-gray-400"
                  placeholder="Enter a prompt here"
                />
                <div className="flex cursor-pointer">
                  <button type="submit">
                    <SendHorizontal
                      size={20}
                      onClick={() => setSearching(true)}
                    />
                  </button>
                </div>
              </div>
            </form>
            <p className="text-gray-400 text-sm text-center p-3">
              Fortune may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Fortune Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );

  function Loading() {
    // Or a custom loading skeleton component
    return <p>Loading...</p>;
  }
};

export default FortuneBody;
