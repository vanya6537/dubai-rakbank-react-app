import { motion as m } from "framer-motion";

// ToggleCircle component
export const ToggleCircle = ({
  active,
  index,
  onChange,
}: {
  active: number; // The currently active index
  index: number; // The index of the current circle
  onChange: (key: number) => void; // Callback function to handle state change
}) => {
  return (
    <m.div
      aria-pressed={active === index}
      aria-label="Vertical Slider Circle"
      className=" bg-white flex items-center justify-center w-5 h-5 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      <m.svg
        className={`transition transform ${
          active === index
            ? "scale-100 fill-current text-violet-600"
            : "scale-100 fill-current text-white"
        }`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
      </m.svg>
    </m.div>
  );
};
