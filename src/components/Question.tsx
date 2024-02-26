import { useRef } from "react";
import {
  motion as m,
  useScroll,
  // useTransform,
  // MotionValue,
  // useSpring,
} from "framer-motion";

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [0, distance]);
// }

export const Question = ({
  question,
  id,
  onViewportEnter,
}: {
  question: string;
  id: number;
  onViewportEnter: () => void;
}) => {
  const ref = useRef<any>(undefined);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // const y = useParallax(scrollYProgress, 100);

  return (
    <m.section
      key={id}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      className="w-full sm:h-full "
      onViewportEnter={onViewportEnter}
    >
      <m.div
        ref={ref}
        className="flex items-center justify-center w-full h-full bg-violet-600 relative"
      >
        <m.p className="text-5xl md:text-7xl text-left pl-8 sm:pl-20 font-bold text-white lg:pr-20 left-[9%]">
          {question}
        </m.p>
      </m.div>
    </m.section>
  );
};
