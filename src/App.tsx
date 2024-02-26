import React, { useState, useRef } from "react";
import "./App.css";
import emoji from "emojis-list";
import { VerticalSlider } from "./components/VerticalSlider";
import {
  motion as m,
  AnimatePresence,
  useScroll,
  useSpring
} from "framer-motion";
import { Question } from "./components/Question";
import { Options } from "./components/Options";
import {questionsConfig} from './lib/config';

function App() {
  const [step, setStep] = useState<"quiz" | "results">("quiz");
  const [active, setActive] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = questionsConfig;

  const total = questions.length;

  const { scrollYProgress } = useScroll();

  useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
              <div key={`question-content-${i}`}>
                <div className="flex !flex-row h-full">
                  <m.div
                    className="flex flex-col py-10 items-center w-1/2 bg-violet-600"
                    onViewportEnter={() => {
                      setActive(i);
                    }}
                  >
                    <Question question={q.title} id={i} />
                  </m.div>
                  <div className="flex flex-col items-center justify-center w-1/2 bg-white">
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
                        onClick={() => setStep("results")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {emoji[2996]} Click to see all results
                      </m.button>
                    ) : null}
                  </div>
                </div>
              </div>
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
              <h1 className="text-6xl pb-5">Your results:</h1>
              {questions.map((q, i) => {
                const title = q.title;
                const answer = answers[i];
                return (
                  <p className="text-3xl text-left p-5 font-bold">
                    <span>{title}</span>
                    {" - "}
                    <span>{answer ? answer : "No answer"}</span>
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
