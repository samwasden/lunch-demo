import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { Stein } from "./components/Stein";

function App() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
  });
  const steinValue = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const opacityValue = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);
  const heightValue = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, window.innerWidth < 1000 ? 250 : 120]
  );

  const beerHeightValue = useTransform(scrollYProgress, [0.9, 1], [0, 52]);
  const foamHeightValue = useTransform(scrollYProgress, [0.9, 1], [0, 10]);

  return (
    <div className="h-[400vh] w-full overflow-x-hidden" ref={target}>
      <div className="w-full h-screen fixed flex items-center justify-center flex-col bg-[#100F17]">
        <Stein progressValue={steinValue} />
        <motion.div
          style={{ height: heightValue, opacity: opacityValue }}
          className={`text-9xl text-white overflow-hidden flex ${
            window.innerWidth < 1000 ? "flex-col gap-0" : "gap-8"
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
      </div>
    </div>
  );
}

export default App;
