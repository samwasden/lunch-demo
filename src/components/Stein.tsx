import {
  easeInOut,
  easeOut,
  motion,
  useTransform,
  type MotionValue,
} from "motion/react";

export const Stein = ({ progressValue }: { progressValue: MotionValue }) => {
  const rotationValue = useTransform(progressValue, [0.3, 0.8], [-30, 0], {
    ease: easeInOut,
  });
  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask progressValue={progressValue} rotationValue={rotationValue} />
      <g mask="url(#mask0_3_4)">
        <Beer />
        <Bubbles />
        <Foam progressValue={progressValue} />
      </g>
      <motion.path
        d="M100 80C100 80 100 326.856 100 378.175C100 429.494 100 429.494 144.087 429.494C188.173 429.494 256.048 429.494 300.134 429.494C344.221 429.494 344.221 429.494 344.221 378.175C344.221 326.856 344.221 351.117 344.221 351.117M344.221 351.117C344.221 351.117 344.221 322.795 372.29 322.795C400.36 322.795 400.36 322.795 400.36 297.459C400.36 272.122 400.36 272.122 400.36 272.122V230V198.5C400.36 198.5 400.36 208.836 400.36 183.5C400.36 158.164 400.36 145.44 372.29 145.44C344.221 145.44 344.221 145.44 344.221 145.44M344.221 351.117V145.44M344.221 145.44V79.5"
        stroke="white"
        stroke-width="40"
        stroke-linecap="round"
        style={{ rotateZ: rotationValue }}
      />
    </svg>
  );
};

const Mask = ({
  progressValue,
  rotationValue,
}: {
  progressValue: MotionValue;
  rotationValue: MotionValue;
}) => {
  const yValue = useTransform(progressValue, [0, 1], [600, 100], {
    ease: easeOut,
  });
  return (
    <motion.mask
      id="mask0_3_4"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y={yValue}
      width="500"
      height="600"
    >
      <motion.path
        d="M346.5 95H99.5V426H346.5V95Z"
        fill="white"
        stroke="black"
        style={{ rotateZ: rotationValue }}
      />
    </motion.mask>
  );
};

const Beer = () => {
  return (
    <motion.rect x="-12" y="151" width="482" height="360" fill="#FFCF30" />
  );
};

const Foam = ({ progressValue }: { progressValue: MotionValue }) => {
  const yValue = useTransform(progressValue, [0, 1], [280, 100]);
  const heightValue = useTransform(progressValue, [0, 1], [20, 70], {
    ease: easeOut,
  });
  return (
    <motion.rect y={yValue} width="470" height={heightValue} fill="#FFE17F" />
  );
};

const Bubble = ({
  radius,
  xInitial,
  delay,
}: {
  radius: number;
  xInitial: number;
  delay: number;
}) => {
  return (
    <motion.circle
      animate={{
        cx: [xInitial],
        cy: [400, 160],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatDelay: delay,
          ease: easeOut,
        },
      }}
      r={radius}
      fill="#FFE17F"
    />
  );
};

const Bubbles = () => {
  return (
    <>
      <Bubble radius={4} xInitial={250} delay={1} />
      <Bubble radius={5} xInitial={200} delay={1.5} />
      <Bubble radius={2} xInitial={225} delay={0.25} />
      <Bubble radius={6} xInitial={300} delay={0.5} />
      <Bubble radius={3.5} xInitial={150} delay={0.75} />
    </>
  );
};
