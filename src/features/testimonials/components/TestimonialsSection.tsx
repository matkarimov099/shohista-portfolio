"use client";

import {
  IconAward,
  IconQuote,
  IconSchool,
  IconUsers,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { cn } from "@/shared/lib/utils";
import {
  STATISTICS,
  TESTIMONIALS,
  type Testimonial,
} from "../data/testimonials";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

interface StatCardProps {
  icon: typeof IconUsers;
  value: string;
  label: string;
  gradient: string;
  index: number;
}

function StatCard({
  icon: Icon,
  value,
  label,
  gradient,
  index,
}: StatCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      variants={scaleIn}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-white/20 hover:shadow-xl"
    >
      {/* Gradient background on hover */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10",
          `bg-gradient-to-br ${gradient}`,
        )}
      />

      <div className="relative flex flex-col items-center text-center">
        <div className={cn("mb-4 rounded-xl p-3 bg-gradient-to-br", gradient)}>
          <Icon size={28} className="text-white" />
        </div>
        <motion.span
          className="text-3xl font-bold text-foreground md:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
        >
          {value}
        </motion.span>
        <span className="mt-1 text-sm text-muted-foreground">{label}</span>
      </div>
    </motion.div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const t = useTranslations();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5"
    >
      {/* Quote icon */}
      <div className="absolute -right-2 -top-2 opacity-10 transition-opacity group-hover:opacity-20">
        <IconQuote size={64} className="text-purple-500" />
      </div>

      <div className="relative">
        {/* Quote */}
        <blockquote className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          "{t(testimonial.quoteKey)}"
        </blockquote>

        {/* Student info */}
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600 text-lg font-bold text-white">
            {testimonial.studentName.charAt(0)}
          </div>

          <div className="flex-1">
            <p className="font-semibold text-foreground">
              {testimonial.studentName}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.course}
            </p>
          </div>

          {/* Achievement badge */}
          <div className="rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 px-3 py-1 text-xs font-semibold text-purple-400">
            {testimonial.achievement}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const t = useTranslations("testimonials");

  const stats = [
    {
      icon: IconSchool,
      value: `${STATISTICS.yearsExperience}+`,
      label: t("stats.years"),
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: IconUsers,
      value: `${STATISTICS.totalStudents}+`,
      label: t("stats.students"),
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: IconAward,
      value: `${STATISTICS.certificationRate}%`,
      label: t("stats.successRate"),
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section id="testimonials" className="py-24">
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
            {"// testimonials"}
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

        {/* Statistics */}
        <div className="mb-16 grid gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {STATISTICS.certifications.map((cert, index) => (
            <motion.span
              key={cert}
              custom={index}
              variants={scaleIn}
              className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400"
            >
              {cert}
            </motion.span>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
