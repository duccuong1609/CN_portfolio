import { motion } from "framer-motion";

import { useScrollDirection } from "@/helper/scroll-direction";

export default function ScrollAnimation({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const scrollDirection = useScrollDirection();

  return (
    <motion.div
      animate={{
        opacity: scrollDirection === "down" ? 0 : 1,
      }}
      className={className}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
