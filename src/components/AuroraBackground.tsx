import { motion } from "framer-motion";
import React from "react";

export const AuroraBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative flex flex-col h-[100vh] items-center justify-center bg-zinc-950 text-slate-950 transition-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="filter blur-[100px] absolute -inset-[10px] opacity-50">
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-[100px] h-[150vh] w-[150vw] bg-[linear-gradient(45deg,var(--transparent),var(--transparent)_45%,#4f46e5_50%,#8b5cf6_55%,var(--transparent)_60%)] bg-[length:200%_200%] md:bg-[length:150%_150%] opacity-20"
          />
        </div>
      </div>
      {children}
    </div>
  );
};
