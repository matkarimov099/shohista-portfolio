"use client";

import { IconMapPin } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { TypewriterEffect } from "@/shared/components/aceternity/typewriter-effect";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { SkillsMarquee } from "./SkillsMarquee";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
        >
          <TypewriterEffect
            words={t("title")
              .split(" ")
              .map((word) => ({
                text: word,
              }))}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
            cursorClassName="bg-primary h-5 md:h-7"
          />
        </motion.div>

        <motion.p
          className="mt-4 text-center text-muted-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          variants={fadeUp}
        >
          {t("description")}
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <motion.div
            className="col-span-1 lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeUp}
          >
            <GlassCard className="h-full">
              <h3 className="text-xl font-bold text-purple-400">
                {t("whoIAm")}
              </h3>
              <p className="mt-2 text-muted-foreground">{t("whoIAmText")}</p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            variants={fadeUp}
          >
            <GlassCard className="h-full">
              <h3 className="text-xl font-bold text-purple-400">
                {t("education")}
              </h3>
              <p className="mt-2 text-sm text-foreground">{t("degree")}</p>
              <p className="text-sm text-muted-foreground">{t("university")}</p>
              <p className="text-sm text-muted-foreground">
                {t("educationYears")}
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            className="col-span-1 lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            variants={fadeUp}
          >
            <GlassCard>
              <h3 className="text-xl font-bold text-purple-400">
                {t("languages")}
              </h3>
              <div className="mt-3 flex flex-wrap gap-6">
                <div>
                  <p className="font-semibold text-foreground">{t("uzbek")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("uzbekLevel")}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {t("english")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t("englishLevel")}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {t("russian")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t("russianLevel")}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
            variants={fadeUp}
          >
            <GlassCard className="h-full">
              <h3 className="text-xl font-bold text-purple-400">
                {t("location")}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <IconMapPin size={18} className="text-purple-400" />
                <p className="text-sm text-foreground">
                  {t("currentLocation")}
                </p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {t("readyToRelocate")}
              </p>
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          variants={fadeUp}
        >
          <SkillsMarquee />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={0}
          variants={fadeUp}
        >
          <ExperienceTimeline />
        </motion.div>
      </div>
    </section>
  );
}
