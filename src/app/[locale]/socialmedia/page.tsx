
import DesignSection from "./_components/PostCard";
import SocialMediaHero from "./_components/SocialMediaHero";

// البيانات الثابتة (سيتم استبدالها لاحقًا بطلب من قاعدة البيانات)

const staticWork = [
  {
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
    title: " أعمالنا على السوشيال ميديا",
    description: "نصيحة للمسافرين: نصيحة للمسافرين",
    images : [
        {
            id: 1,
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
            caption: "تصميم حملة McCafé",
          },
          {
            id: 2,
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
            caption: "تصميم حملة McCafé",
          },
    ]
  },
  {
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
    title: " أعمالنا على السوشيال ميديا",
    description: "نصيحة للمسافرين: نصيحة للمسافرين",
    images : [
        {
            id: 1,
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
            caption: "تصميم حملة McCafé",
          },
          {
            id: 2,
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
            caption: "تصميم حملة McCafé",
          },
    ]
  },
];



export default function Home() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#faf5ff] to-white relative overflow-hidden">
        <SocialMediaHero />
        {/* الخلفية المتحركة */}
        <div className="absolute inset-0 overflow-hidden ">
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
  
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* العنوان الرئيسي */}
          {/* <div className="text-center mb-16" data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              معرض أعمالنا الإبداعية
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              تصاميمنا المميزة عبر منصات السوشيال ميديا
            </p>
          </div> */}
  
          {/* أقسام التصاميم */}
          <div className="space-y-20 mt-16">
            {staticWork.map((work, index) => (
              <DesignSection 
              image={work.image}
                key={index}
                title={work.title}
                description={work.description}
                images={work.images}
              />
            ))}
          </div>
  
          {/* زر الإنستجرام */}

        </div>
      </main>
    );
  }