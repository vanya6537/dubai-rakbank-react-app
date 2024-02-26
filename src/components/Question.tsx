import {  useRef } from "react";
import {
  m,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const Question = ({
  question,
  id,
}: {
  question: string;
  id: number;
}) => {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });


  const y = useParallax(scrollYProgress, 100);

  return (
    <section key={id} className="w-full h-full">
      <m.div
        ref={ref}
        className="flex items-center justify-center w-full bg-violet-600"
      >
        <m.p
          className="text-7xl text-left pl-20 font-bold text-white lg:pr-20 left-[9%] mt-[100px]"
          style={{ y }}
        >
          {question}
        </m.p>
      </m.div>
    </section>
  );
};
