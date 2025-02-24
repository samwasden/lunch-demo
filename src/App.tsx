import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { Stein } from "./components/Stein";
import { Logo } from "./components/Logo";

function App() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
  });
  const steinValue = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const logoValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const sizeValue = useTransform(steinValue, [0, 0.5], [360, 300]);
  const opacityValue = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  return (
    <div
      className="h-[400dvh] w-full overflow-x-hidden bg-[#100F17] overscroll-non"
      ref={target}
    >
      <div
        className={`w-full fixed flex items-center justify-center flex-col h-fit min-h-[100dvh]`}
      >
        <Stein
          progressValue={steinValue}
          height={sizeValue}
          width={sizeValue}
        />
        <Logo progressValue={logoValue} />
        <motion.div style={{ opacity: opacityValue }}>
          <p className="text-4xl text-[#FFCF30]">COMING SOON</p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
