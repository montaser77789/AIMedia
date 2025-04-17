import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Locale } from "@/i18n.config";

// Mock data
const mockBlogPosts = [
  {
    id: "1",
    title: "How Storytelling Can Drive Sales",
    excerpt:
      "Learn how compelling narratives can boost your conversion rates and customer engagement.",
    image:
      "https://www.feedough.com/wp-content/uploads/2020/08/what-is-marketing-1024x572.webp",
    date: "2023-10-15",
    category: "Marketing",
  },
  {
    id: "2",
    title: "Social Media Trends That Boost Sales",
    excerpt:
      "Discover the latest social media strategies driving revenue this year.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
    date: "2023-09-28",
    category: "Social Media",
  },
  {
    id: "3",
    title: "Turning Views into Revenue",
    excerpt:
      "Techniques to convert video content viewers into paying customers.",
    image: "/images/blog3.jpg",
    date: "2023-09-10",
    category: "Content Strategy",
  },
];

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" >
  <div className="absolute inset-0 bg-gradient-to-r from-[#f7d9fb] to-white z-0" />


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10  mt-16 md:mt-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Latest Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert articles to grow your business
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogPosts.map((post) => (
            <article
              key={post.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Blog Image */}
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <Link
                  href={`/${locale}/blog/${post.id}`}
                  className="inline-flex items-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all"
                >
                  Read Article
                  <svg
                    className="w-4 h-4 ml-1 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
