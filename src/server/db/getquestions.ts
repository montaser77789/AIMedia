import { db } from "../prisma";
import { cache } from "../cache";

export const getQuestions = cache(
    async ({ role, locale }: { role: "admin" | "user"; locale: "en" | "ar" }) => {
      const questions = await db.question.findMany();
  
      if (role === "admin") {
        return questions.map((question) => ({
          id: question.id,
          question_en: question.question_en,
          answer_en: question.answer_en,
          question_ar: question.question_ar,
          answer_ar: question.answer_ar,
        }));
      } else {
        return questions.map((question) => ({
          id: question.id,
          text: locale === "ar" ? question.question_ar : question.question_en,
          answer: locale === "ar" ? question.answer_ar : question.answer_en,
        }));
      }
    },
    ({ role, locale }) => [`questions-${role}-${locale}`],
    { revalidate: 3600 }
  );
  