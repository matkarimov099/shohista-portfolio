export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILLS: Skill[] = [
  { name: "IELTS", icon: "certificate" },
  { name: "CEFR", icon: "certificate" },
  { name: "Speaking", icon: "microphone" },
  { name: "Listening", icon: "headphones" },
  { name: "Reading", icon: "book" },
  { name: "Writing", icon: "pen" },
  { name: "Grammar", icon: "book" },
  { name: "Vocabulary", icon: "abc" },
  { name: "Pronunciation", icon: "volume" },
  { name: "Business English", icon: "briefcase" },
  { name: "Kids Education", icon: "school" },
  { name: "Test Preparation", icon: "clipboard" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Language Skills",
    skills: [
      "Speaking",
      "Listening",
      "Reading",
      "Writing",
      "Grammar",
      "Vocabulary",
    ],
  },
  {
    title: "Certifications",
    skills: ["IELTS", "CEFR", "Test Preparation"],
  },
  {
    title: "Specialized Teaching",
    skills: ["Business English", "Kids Education", "Pronunciation"],
  },
];
