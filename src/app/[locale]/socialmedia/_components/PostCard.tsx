import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Image from "next/image";

export default function DesignSection({
  image,
  title,
  description,
  images,
}: {
  image: string;
  title: string;
  description: string;
  images: {
    id: number;
    imageUrl: string;
    caption: string;
  }[];
}) {
  return (
    <div className="mb-12" data-aos="fade-up">
      {/* عنوان القسم */}
      <div className="mb-8 flex items-center gap-5">
        <Image src={image} className="rounded-full w-16 h-16" width={50} height={50} alt={title} />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600  mx-auto">{description}</p>
        </div>
      </div>

      {/* شبكة التصاميم */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <DesignCard
            key={image.id}
            src={image.imageUrl}
            caption={image.caption}
          />

          
        ))}
      </div>
      <div className="mt-16 text-center" data-aos="fade-up">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button >
            <Instagram className="ml-2" />
            تابعنا على انستقرام
          </Button>
        </a>
      </div>
    </div>
  );
}

function DesignCard({ src, caption }: { src: string; caption: string }) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full">
      <div className="aspect-square overflow-hidden">
        <Image
          src={src}
          width={500}
          height={500}
          alt={caption}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* تأثيرات عند hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
        <p className="text-white text-sm font-medium">{caption}</p>
      </div>
    </div>
  );
}
