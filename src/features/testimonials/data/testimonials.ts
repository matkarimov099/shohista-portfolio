export interface Testimonial {
  id: string;
  studentName: string;
  achievement: string;
  quoteKey: string;
  course: string;
}

export interface Statistics {
  yearsExperience: number;
  totalStudents: number;
  certificationRate: number;
  certifications: string[];
}

export const STATISTICS: Statistics = {
  yearsExperience: 8,
  totalStudents: 2000,
  certificationRate: 90,
  certifications: ["IELTS", "CEFR", "Multi-level"],
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    studentName: "Aziza K.",
    achievement: "IELTS 7.5",
    quoteKey: "testimonials.quote1",
    course: "IELTS Preparation",
  },
  {
    id: "2",
    studentName: "Jamshid T.",
    achievement: "CEFR B2",
    quoteKey: "testimonials.quote2",
    course: "General English",
  },
  {
    id: "3",
    studentName: "Madina R.",
    achievement: "IELTS 8.0",
    quoteKey: "testimonials.quote3",
    course: "IELTS Preparation",
  },
  {
    id: "4",
    studentName: "Sardor M.",
    achievement: "Business English Certificate",
    quoteKey: "testimonials.quote4",
    course: "Business English",
  },
];
