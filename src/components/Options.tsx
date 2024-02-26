import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

/**
 * Options component
 * @param data - Array of objects containing icon and label
 * @param answer - Current selected answer
 * @param setAnswer - Function to set the answer
 */
export const Options = ({
  data,
  answer,
  setAnswer,
}: {
  data: { icon: string; label: string }[];
  answer: string | null | undefined;
  setAnswer: (val: string) => void;
}) => {
  const [active, setActive] = useState<string | null>(null);

  /**
   * Handle click event on option button
   * @param index - Index of the clicked option
   */
  const handleClick = (index: number) => {
    setAnswer(data[index].label);
  };

  /**
   * Handle hover end event on option button
   * @param index - Index of the option
   */
  const handleHoverEnd = (index: number) => {
    if (!answer) {
      setActive(null);
    } else {
      setActive(answer);
    }
  };

  /**
   * Handle hover event on option button
   * @param index - Index of the option
   */
  const handleHover = (index: number) => {
    setActive(data[index].label);
  };

  return (
    <m.div className="h-full sm:h-1/3 flex flex-col">
      <m.div className="flex flex-row gap-4 sm:gap-8 items-center justify-center w-full h-1/3 pt-8">
        {data.map((d, i) => (
          <m.button
            data-testid={`${d.label}-${i}`}
            key={`${d.label}-${i}`}
            className={`text-7xl cursor-pointer transition-all delay-0 ${
              answer === d.label ? "bg-violet-300 p-4 rounded-md" : ""
            }`}
            onClick={() => handleClick(i)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onHoverEnd={() => handleHoverEnd(i)}
            onHoverStart={() => handleHover(i)}
          >
            {d.icon}
          </m.button>
        ))}
      </m.div>
      <m.div className="flex flex-col items-center h-2/3">
        <AnimatePresence>
          {active && (
            <m.p
              key="active"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-7xl text-left font-bold text-violet-600 pt-14"
            >
              {active}
            </m.p>
          )}
        </AnimatePresence>
      </m.div>
    </m.div>
  );
};
