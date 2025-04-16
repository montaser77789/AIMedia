import { db } from "../prisma";
import { cache } from "../cache";

export const getBlogs = cache(
  async (locale: "en" | "ar") => {
    const blogs = await db.blogs.findMany();

    return blogs.map((blog) => ({
      id: blog.id,
      text: locale === "ar" ? blog.text_ar : blog.text_en,
    }));
  },
  (locale) => [`blogs-${locale}`],
  { revalidate: 3600 }
);
