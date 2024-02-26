import { ToggleCircle } from "./ToggleCircle";

export const VerticalSlider = ({
  active,
  total,
  onChange,
}: {
  active: number;
  total: number;
  onChange: (key: number) => void;
}) => {
  return (
    <div className="w-20 flex bg-violet-600">
      <div
        id="slider"
        data-testid="slider"
        className="flex flex-col rounded-full justify-center items-start space-y-4 ml-10 fixed z-10"
      >
        {Array.from({ length: total }, (_, i) => i).map((i) => (
          <ToggleCircle key={`vertical-menu-${i}`} active={active} index={i} onChange={onChange} />
        ))}
      </div>
    </div>
  );
};
