export interface Course {
  id: string;
  titleKey: string;
  descriptionKey: string;
  duration: string;
  level: string;
  features: string[];
  popular?: boolean;
  gradient: string;
}

export const COURSES: Course[] = [
  {
    id: "ielts-prep",
    titleKey: "courses.ielts.title",
    descriptionKey: "courses.ielts.description",
    duration: "3-6 months",
    level: "Intermediate - Advanced",
    features: [
      "All 4 skills",
      "Mock tests",
      "Individual feedback",
      "Study materials",
    ],
    popular: true,
    gradient: "from-purple-500 to-violet-600",
  },
  {
    id: "general-english",
    titleKey: "courses.general.title",
    descriptionKey: "courses.general.description",
    duration: "Ongoing",
    level: "All levels",
    features: ["Grammar", "Vocabulary", "Speaking", "Listening"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "business-english",
    titleKey: "courses.business.title",
    descriptionKey: "courses.business.description",
    duration: "2-4 months",
    level: "Intermediate+",
    features: [
      "Business vocabulary",
      "Email writing",
      "Presentations",
      "Meetings",
    ],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: "kids-english",
    titleKey: "courses.kids.title",
    descriptionKey: "courses.kids.description",
    duration: "Ongoing",
    level: "Beginner",
    features: [
      "Interactive games",
      "Songs & stories",
      "Basic vocabulary",
      "Fun activities",
    ],
    gradient: "from-pink-500 to-rose-600",
  },
];
