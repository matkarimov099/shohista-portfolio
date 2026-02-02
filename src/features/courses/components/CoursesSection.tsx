"use client";

import {
  IconBrandTelegram,
  IconCheck,
  IconClock,
  IconSparkles,
  IconTrophy,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";
import { COURSES, type Course } from "../data/courses";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -8 },
};

interface CourseCardProps {
  course: Course;
  index: number;
}

function CourseCard({ course, index }: CourseCardProps) {
  const t = useTranslations();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      variants={fadeUp}
    >
      <motion.div
        className={cn(
          "relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-shadow hover:shadow-2xl hover:shadow-purple-500/10",
          course.popular && "ring-2 ring-purple-500/50",
        )}
        initial="rest"
        whileHover="hover"
        variants={cardHover}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Popular badge */}
        {course.popular && (
          <div className="absolute -right-8 top-6 rotate-45 bg-gradient-to-r from-purple-500 to-violet-600 px-10 py-1 text-xs font-semibold text-white shadow-lg">
            <IconSparkles size={12} className="mr-1 inline" />
            Popular
          </div>
        )}

        {/* Gradient accent */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
            course.gradient,
          )}
        />

        {/* Content */}
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground">
              {t(course.titleKey)}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t(course.descriptionKey)}
            </p>
          </div>

          {/* Badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-muted-foreground">
              <IconClock size={12} />
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-muted-foreground">
              <IconTrophy size={12} />
              {course.level}
            </span>
          </div>

          {/* Features */}
          <ul className="mb-6 flex-1 space-y-2">
            {course.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <IconCheck
                  size={16}
                  className={cn(
                    "shrink-0",
                    course.popular ? "text-purple-400" : "text-primary",
                  )}
                />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all",
              course.popular
                ? "bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 hover:shadow-lg hover:shadow-purple-500/25"
                : "bg-white/10 hover:bg-white/20",
            )}
          >
            <IconBrandTelegram
              size={18}
              className="transition-transform group-hover:scale-110"
            />
            {t("courses.contactButton")}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CoursesSection() {
  const t = useTranslations("courses");

  return (
    <section id="courses" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="font-mono text-sm text-primary"
            custom={0}
            variants={fadeUp}
          >
            {"// courses"}
          </motion.p>
          <motion.h2
            className="mt-2 text-3xl font-bold tracking-tight md:text-4xl"
            custom={1}
            variants={fadeUp}
          >
            {t("title")}
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
            custom={2}
            variants={fadeUp}
          >
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {COURSES.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
