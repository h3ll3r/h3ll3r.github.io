import Image from "next/image";
import * as motion from "motion/react-client";
import { HTMLMotionProps } from "motion/react";

const skills = ["csharp", "ts", "react", "graphql"];

const getAnimateArgs = (delay?: number): HTMLMotionProps<"div"> => ({
  transition: { ease: "easeIn", duration: 0.41, delay},
  initial: { translateY: "7px", filter: "blur(3px)", opacity: 0 },
  animate: { translateY: "0", filter: "blur(0)", opacity: 1 },
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-full sm:min-h-screen p-8 pb-20 gap-50 md:gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[16px] row-start-2 items-start">
        <motion.div className="text-3xl font-bold" {...getAnimateArgs()}>
          andrei.
        </motion.div>
        <motion.div className="flex flex-col" {...getAnimateArgs(0.33)}>
          <span className="font-mono">full-stack web dev</span>
          <span className="font-mono">
            {skills.map((skill, index, items) => (
              <motion.span key={skill} {...getAnimateArgs((index + 1) * 0.21)}>
                {`${skill}${index < items.length - 1 ? " • " : ""}`}
              </motion.span>
            ))}
          </span>
        </motion.div>
      </main>
      <motion.footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center" {...getAnimateArgs(0.66)}>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/andrei-r"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            className="invert-dark"
            alt="File icon"
            width={24}
            height={24}
          />
        </a>
      </motion.footer>
    </div>
  );
}
