import { Clock } from "lucide-react";
import Image from "next/image";

// Mock data - replace with real database later
const mockBlogPosts = [
  {
    id: "1",
    title: "How Storytelling Can Drive Sales",
    content: `Storytelling has become a powerful tool in modern marketing strategies...
              When customers connect emotionally with your brand...
              The Science Behind Storytelling
              Neurological studies show that stories activate multiple areas of the brain...`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
    date: "2023-10-15",
  },
];

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = mockBlogPosts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="relative py-16 lg:py-24 bg-gradient-to-r from-[#f7d9fb] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Post Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-3  mt-16 md:mt-10">
            <Clock className="w-4 h-4 mr-1" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
        </header>

        {/* Featured Image */}
        <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Post Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
