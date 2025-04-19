import Image from "next/image";
import { notFound } from "next/navigation";

const MyWork = [
  {
    id: 1,
    title: "Work 1",
    description: "Description of Work 1",
    date: "2023-10-15",
    image: "https://cdn.prod.website-files.com/643502b2111f060f3c9b12d2/669e2b195430668a29b49e5e_st_regis_residences.jpg",
    images: [
      { id: 1, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s" },
      { id: 2, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s" },
    ],
  },
  // باقي المشاريع...
];

export async function generateStaticParams() {
  return MyWork.map((project) => ({ id: project.id.toString() }));
}

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const project = MyWork.find((work) => work.id.toString() === params.id);

  if (!project) return notFound();

  return (
    <div className="container mx-auto py-10  text-black mt-16">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-2">Date: {project.date}</p>
      <p className="mb-6">{project.description}</p>

      <div className="mb-6">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {project.images.map((img) => (
          <div key={img.id} className="w-full">
            <Image
              src={img.imageUrl}
              alt={`Image ${img.id}`}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-[250px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
