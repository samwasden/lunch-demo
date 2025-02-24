import { motion, type MotionValue, useTransform } from "motion/react";

export const Logo = ({ progressValue }: { progressValue: MotionValue }) => {
  const beerHeightValue = useTransform(progressValue, [0.8, 0.9], [0, 52]);
  const foamHeightValue = useTransform(progressValue, [0.8, 0.9], [0, 10]);

  const opacityValue = useTransform(progressValue, [0.5, 0.9], [0, 1]);
  const heightValue = useTransform(
    progressValue,
    [0, 0.3],
    [0, window.innerWidth < 1000 ? 240 : 120]
  );

  return (
    <motion.div
      style={{ height: heightValue, opacity: opacityValue }}
      className={`text-9xl text-white overflow-hidden flex ${
        window.innerWidth < 1000
          ? "scale-60 flex-col gap-0 leading-[120px]"
          : "gap-8 leading-[120px]"
      }`}
    >
      <span className="relative">
        <motion.div
          className="w-8 absolute -z-20 left-29 bottom-10 bg-[#FFCF30]"
          style={{ height: beerHeightValue }}
        >
          <motion.div
            className="w-8 bg-[#FFE17F]"
            style={{ height: foamHeightValue }}
          />
        </motion.div>
        <span>LUNCH</span>
      </span>
      <span>BEERS</span>
    </motion.div>
  );
};
