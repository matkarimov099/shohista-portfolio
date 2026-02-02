"use client";

import {
  IconBook,
  IconCertificate,
  IconLanguage,
  IconMail,
  IconMicrophone,
  IconSchool,
  IconUsers,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";

const ENGLISH_QUOTES = [
  { text: '"Knowledge is power"', x: "10%", y: "15%", delay: 0 },
  { text: '"Learning never stops"', x: "75%", y: "20%", delay: 0.5 },
  { text: '"Education opens doors"', x: "5%", y: "70%", delay: 1 },
  { text: '"Speak your mind"', x: "80%", y: "65%", delay: 1.5 },
  { text: '"Dream big, learn more"', x: "15%", y: "85%", delay: 0.8 },
  { text: '"Words connect worlds"', x: "70%", y: "80%", delay: 1.2 },
  { text: '"Be fluent, be free"', x: "88%", y: "35%", delay: 0.3 },
  { text: '"Your journey starts here"', x: "3%", y: "45%", delay: 1.8 },
];

const FLOATING_ICONS = [
  { Icon: IconBook, x: "20%", y: "25%", delay: 0.3 },
  { Icon: IconSchool, x: "85%", y: "40%", delay: 0.7 },
  { Icon: IconLanguage, x: "10%", y: "50%", delay: 1.1 },
  { Icon: IconCertificate, x: "90%", y: "15%", delay: 0.5 },
  { Icon: IconMicrophone, x: "5%", y: "30%", delay: 1.4 },
  { Icon: IconUsers, x: "78%", y: "75%", delay: 1.9 },
];

function FloatingQuote({
  text,
  x,
  y,
  delay,
}: {
  text: string;
  x: string;
  y: string;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute hidden md:block rounded-lg border border-primary/20 bg-card/60 px-3 py-1.5 text-sm italic text-primary/70 backdrop-blur-sm"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0, 0.7, 0.5, 0.7],
        scale: [0.8, 1, 0.95, 1],
        y: [0, -15, 5, -10],
        rotate: [-1, 1, -0.5, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {text}
    </motion.div>
  );
}

function FloatingIcon({
  Icon,
  x,
  y,
  delay,
}: {
  Icon: typeof IconBook;
  x: string;
  y: string;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute hidden md:block text-primary/20"
      style={{ left: x, top: y }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.4, 0.2, 0.4],
        y: [0, -20, 10, -15],
        rotate: [0, 10, -5, 8],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <Icon size={32} />
    </motion.div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-125 w-125 rounded-full bg-primary/10 blur-[120px]"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 top-1/3 h-100 w-100 rounded-full bg-violet-500/8 blur-[100px]"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 100, -40, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 h-87.5 w-87.5 rounded-full bg-purple-500/8 blur-[100px]"
          animate={{
            x: [0, 50, -80, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating English quotes */}
      {ENGLISH_QUOTES.map((quote, i) => (
        <FloatingQuote key={`${i}-${quote.text}`} {...quote} />
      ))}

      {/* Floating icons */}
      {FLOATING_ICONS.map((icon, i) => (
        <FloatingIcon key={`${i}-${icon.delay}`} {...icon} />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center gap-6 px-4 text-center"
      >
        {/* Greeting badge */}
        <motion.div
          variants={item}
          className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-primary">{t("greeting")}</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="bg-linear-to-r from-primary via-purple-400 to-violet-400 bg-clip-text text-transparent">
            {t("name")}
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={item} className="flex items-center gap-2">
          <span className="text-lg text-muted-foreground md:text-xl">
            {t("role")}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="max-w-lg text-sm text-muted-foreground md:text-base"
        >
          {t("description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/courses"
            className="group relative inline-flex items-center gap-2 rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-800 hover:shadow-lg hover:shadow-purple-700/25"
          >
            <IconBook size={16} aria-hidden="true" />
            {t("viewCourses")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-card hover:shadow-lg"
          >
            <IconMail size={16} />
            {t("contactMe")}
          </Link>
        </motion.div>
      </motion.div>

      {/* Teaching Stats Card */}
      <motion.div
        className="absolute bottom-24 right-8 z-20 hidden md:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <div className="w-72 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4">
            <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <IconSchool size={18} className="text-purple-400" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Teaching Stats
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Experience</span>
              <span className="text-sm font-semibold text-purple-400">
                8+ years
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Students Taught
              </span>
              <span className="text-sm font-semibold text-purple-400">
                2000+
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Certification Rate
              </span>
              <span className="text-sm font-semibold text-purple-400">90%</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-green-400">
                Available for new students
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
