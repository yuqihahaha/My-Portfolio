import { motion, useScroll, useTransform } from "framer-motion";
import { Plane } from "lucide-react";

export default function PlanePath() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [40, 900]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [90, 115, 90]);

  return (
    <div className="pointer-events-none fixed left-4 top-0 z-40 hidden h-screen w-16 md:block">
      <div className="absolute left-8 top-0 h-full border-l-2 border-dashed border-sky-300/70" />
      <motion.div style={{ y, rotate }} className="absolute left-2 text-sky-600 drop-shadow-lg">
        <Plane size={38} fill="currentColor" />
      </motion.div>
    </div>
  );
}
