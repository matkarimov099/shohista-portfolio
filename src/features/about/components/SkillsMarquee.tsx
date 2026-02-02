"use client";

import { useTranslations } from "next-intl";
import { SKILL_CATEGORIES } from "@/features/about/data/skills";
import { InfiniteMovingCards } from "@/shared/components/aceternity/infinite-moving-cards";
import { TypewriterEffect } from "@/shared/components/aceternity/typewriter-effect";

const skillDescriptions: Record<string, string> = {
  Speaking: "Developing fluent communication and confident expression",
  Listening: "Building comprehension skills for real-world conversations",
  Reading: "Enhancing understanding through diverse texts and materials",
  Writing: "Crafting clear, effective written communication",
  Grammar: "Mastering language structure for accurate expression",
  Vocabulary: "Expanding word knowledge for richer communication",
  IELTS: "Comprehensive preparation for international English testing",
  CEFR: "European framework standards from A1 to C2 levels",
  "Test Preparation": "Strategic approaches for exam success",
  "Business English": "Professional communication for career advancement",
  "Kids Education": "Engaging, age-appropriate learning experiences",
  Pronunciation: "Clear articulation and natural accent development",
};

function buildItems() {
  return SKILL_CATEGORIES.flatMap((category) =>
    category.skills.map((skill) => ({
      quote: skillDescriptions[skill] ?? skill,
      name: skill,
      title: category.title,
    })),
  );
}

export function SkillsMarquee() {
  const t = useTranslations("about");
  const items = buildItems();
  const mid = Math.ceil(items.length / 2);
  const rowOne = items.slice(0, mid);
  const rowTwo = items.slice(mid);

  return (
    <div className="mt-16 space-y-4">
      <TypewriterEffect
        words={t("skillsTitle")
          .split(" ")
          .map((word) => ({ text: word }))}
        className="mb-6 text-xl sm:text-2xl font-bold"
        cursorClassName="bg-primary h-4 md:h-6"
      />
      <InfiniteMovingCards items={rowOne} direction="left" speed="slow" />
      <InfiniteMovingCards items={rowTwo} direction="right" speed="slow" />
    </div>
  );
}
