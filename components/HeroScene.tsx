"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, CalendarDays, Sparkles, Users } from "lucide-react";

const cards = [
  {
    className: "left-[8%] top-[23%]",
    icon: Users,
    label: "Lead flow",
    stat: "Qualified",
    color: "#4FA3A5",
  },
  {
    className: "right-[5%] top-[10%]",
    icon: CalendarDays,
    label: "Publishing",
    stat: "Scheduled",
    color: "#6D5BD0",
  },
  {
    className: "right-[10%] bottom-[10%]",
    icon: BarChart3,
    label: "Growth signal",
    stat: "Visible",
    color: "#7BAE7F",
  },
];

export function HeroScene() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto h-[390px] w-full max-w-[570px] sm:h-[500px]"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(79,163,165,.16),transparent_68%)] blur-xl" />
      <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#315C72]/10 sm:h-[420px] sm:w-[420px]" />
      <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#315C72]/20 sm:h-[320px] sm:w-[320px]" />

      <div className="absolute inset-[18%] [perspective:900px]">
        <div className="hero-tilt absolute inset-0 rounded-[42px] border border-white/80 bg-[#E5EFEC]/75 shadow-[0_50px_90px_rgba(49,92,114,.14)]">
          <div className="soft-grid absolute inset-0 rounded-[42px] opacity-70" />
          <div className="absolute left-[18%] top-[20%] h-2 w-[64%] rounded-full bg-white/80" />
          <div className="absolute left-[22%] top-[24%] h-[58%] w-2 rounded-full bg-white/80" />
          <div className="absolute bottom-[22%] left-[22%] h-2 w-[56%] rounded-full bg-white/80" />
        </div>
      </div>

      <motion.div
        className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-white bg-white/90 shadow-[0_30px_80px_rgba(49,92,114,.22)] sm:h-36 sm:w-36"
        animate={
          reduceMotion ? undefined : { y: [0, -11, 0], rotate: [0, 1.5, 0] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-3 rounded-[24px] bg-[linear-gradient(145deg,#EEF4F2,#F3F0FF)]" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#315C72] text-white shadow-lg sm:h-20 sm:w-20">
          <Sparkles className="h-7 w-7 sm:h-9 sm:w-9" strokeWidth={1.6} />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-[3px] border-white bg-[#7BAE7F]" />
        </div>
      </motion.div>

      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.label}
            className={`glass absolute z-30 flex w-[142px] items-center gap-3 rounded-2xl p-3.5 sm:w-[166px] sm:p-4 ${card.className}`}
            initial={{ opacity: 0, y: 18 }}
            animate={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -8, 0] }
            }
            transition={{
              opacity: { duration: 0.6, delay: 0.65 + index * 0.12 },
              y: {
                duration: 4.5 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              },
            }}
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: card.color }}
            >
              <Icon className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#667085]">
                {card.label}
              </span>
              <span className="mt-0.5 block text-sm font-bold text-[#18202F]">
                {card.stat}
              </span>
            </span>
          </motion.div>
        );
      })}

      <motion.div
        className="absolute bottom-[21%] left-[20%] z-10 h-4 w-4 rounded-full bg-[#4FA3A5] shadow-[0_0_0_8px_rgba(79,163,165,.12)]"
        animate={reduceMotion ? undefined : { scale: [1, 1.25, 1] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-[25%] top-[23%] z-10 h-3 w-3 rounded-full bg-[#6D5BD0] shadow-[0_0_0_7px_rgba(109,91,208,.12)]"
        animate={reduceMotion ? undefined : { scale: [1, 1.35, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, delay: 0.6 }}
      />
    </motion.div>
  );
}
