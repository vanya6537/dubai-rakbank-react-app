import React, { useEffect, useState } from "react";
import "./App.css";
import emoji from "emojis-list";
import { VerticalSlider } from "./components/VerticalSlider";
import {
  motion as m,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
import { Question } from "./components/Question";
import { Options } from "./components/Options";
import { questionsConfig } from "./lib/config";

function App() {
  const [step, setStep] = useState<"quiz" | "results">("quiz");
  const [active, setActive] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = questionsConfig;

  const total = questions.length;

  // Send results to server mocked function
  function sendResultsToServer(answers: Record<string, string>) {
    console.log("Sending results to server...");
    console.log(answers);
    // fetch("http://hiremeplease.com/api/submit", {
    //   method: "POST",
    //   body: JSON.stringify(answers),
    // })
    //   .then((res) => {
    //     console.log("Results sent to server!");
    //   })
    //   .catch((err) => {
    //     console.error("Error sending results to server: ", err);
    //   });
  }

  useEffect(() => {
    if (step === "results") {
      window.scrollTo(0, 0);
    }
  }, [step])
  ;
  return (
    <div className="App bg-violet-600">
      <VerticalSlider total={total} active={active} onChange={setActive} />

      <AnimatePresence>
        {step === "quiz" && (
          <m.div
            key="quiz-container"
            animate={{ transition: { duration: 1 } }}
            exit={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          >
            {questions.map((q, i) => (
              <m.div
                key={`question-content-${i}`}
                className="flex flex-col sm:!flex-row h-dvh relative"
             
              >
                <m.div className="flex flex-col sm:py-10 items-center sm:w-1/2 bg-violet-600 h-1/2 sm:h-full">
                  <Question question={q.title} id={i} onViewportEnter={() => {
                  setActive(i);
                }}/>
                </m.div>
                <m.div className="flex flex-col items-center justify-center h-1/2 sm:h-dvh sm:w-1/2 bg-white p-5">
                  <Options
                    data={q.options}
                    answer={answers[i]}
                    setAnswer={(val: string) => {
                      setAnswers((prev) => ({ ...prev, [i]: val }));
                    }}
                  />
                  {i === questions.length - 1 ? (
                    <m.button
                      data-testid={`results-button`}
                      className="text-3xl font-bold cursor-pointer text-violet-600"
                      onClick={() => {
                        setStep("results");
                        sendResultsToServer(answers);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {emoji[2996]} Click to see all results
                    </m.button>
                  ) : null}
                </m.div>
              </m.div>
            ))}
          </m.div>
        )}

        {step === "results" && (
          <m.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 10,
              },
            }}
            className="flex !flex-row h-screen text-white"
          >
            <m.div className="flex flex-col p-20 items-left w-full h-full bg-violet-600 space-y-4">
              <h1 className="text-3xl sm:text-6xl pb-5">Your results:</h1>
              {questions.map((q, i) => {
                const title = q.title;
                const answer = answers[i];
                return (
                  <p className="text-2xl sm:text-3xl text-left p-5">
                    <span>{title}</span>
                    {" - "}
                    <span className="font-bold">
                      {answer ? answer : "No answer"}
                    </span>
                  </p>
                );
              })}
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
