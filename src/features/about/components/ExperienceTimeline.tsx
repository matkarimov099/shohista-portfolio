"use client";

import { useTranslations } from "next-intl";
import { Timeline } from "@/shared/components/aceternity/timeline";

const ACHIEVEMENTS = {
  expressEducation: ["IELTS Preparation", "General English", "Business English", "Kids English"],
  unioneSchool: ["Multi-level Teaching", "CEFR Assessment", "Student Mentoring", "Curriculum Development"],
  previousTeaching: ["General English", "Grammar Focus", "Speaking Practice"],
};

export function ExperienceTimeline() {
  const t = useTranslations("about");

  const experiences = [
    {
      title: t("experience1Title"),
      company: t("experience1Company"),
      period: t("experience1Period"),
      description: t("experience1Description"),
      achievements: ACHIEVEMENTS.expressEducation,
    },
    {
      title: t("experience2Title"),
      company: t("experience2Company"),
      period: t("experience2Period"),
      description: t("experience2Description"),
      achievements: ACHIEVEMENTS.unioneSchool,
    },
    {
      title: t("experience3Title"),
      company: t("experience3Company"),
      period: t("experience3Period"),
      description: t("experience3Description"),
      achievements: ACHIEVEMENTS.previousTeaching,
    },
    {
      title: t("experience4Title"),
      company: t("experience4Company"),
      period: t("experience4Period"),
      description: t("experience4Description"),
      achievements: [],
      isEducation: true,
    },
  ];

  const data = experiences.map((exp) => ({
    title: exp.period,
    content: (
      <div>
        <div className="flex items-center gap-2">
          {exp.isEducation && (
            <span className="rounded bg-purple-500/20 px-2 py-0.5 text-xs text-purple-400">
              {t("education")}
            </span>
          )}
          <h4 className="text-lg font-bold text-foreground">{exp.company}</h4>
        </div>
        <p className="text-sm text-muted-foreground">{exp.title}</p>
        <p className="mt-2 text-muted-foreground">{exp.description}</p>
        {exp.achievements.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {exp.achievements.map((achievement) => (
              <span
                key={achievement}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
              >
                {achievement}
              </span>
            ))}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <div className="mt-16">
      <Timeline data={data} />
    </div>
  );
}
