import ItemServices from "./ItemServices";

const AmazingServices = () => {
  const services = [
    {
      title: "Social Media Management",
      description:
        "We create and manage social media strategies that captivate, engage, and grow your audience. From content calendars to analytics—we turn followers into loyal fans.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLUySSL0MHG588qk5khjvhfLsXPWnAE3h5g&s",
    },
    {
      title: "Websites & Mobile Apps UX/UI Design",
      description:
        "Our team builds sleek, high-performance websites and mobile apps with user-centric UX/UI design focused on clean aesthetics and responsive performance.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_n-kJ6PMh4xwyEoz5oTO77TZEom0Gqo9xw&s",
    },
    {
      title: "Customized Software Solutions",
      description:
        "Streamline your operations with custom software tailored to your business needs. We develop scalable systems that boost efficiency and drive smart growth.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwrkC3Xkme-bUQmNdZ4tltQpejQlRtAoHgg&s",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full md:w-[60%] h-full bg-gradient-to-r from-[#f7d9fb] to-white z-0" />

      <div className="container  px-4 sm:px-6 lg:px-8 text-black relative">
        {/* Section title */}
        <div className="relative z-10 text-center mb-12 sm:mb-16 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6 md:mb-0 md:w-[55%] text-left">
            Our Services: <br />
            Empowering Brands to Stand Out
          </h2>
          <p className="text-base sm:text-sm md:text-md lg:text-lg md:w-[40%] text-left">
            At Ai Media, we deliver a full suite of digital, creative, and
            strategic solutions designed to strengthen your brand, connect with
            your audience, and drive lasting success. From engaging content to
            tailored technology, we bring ideas to life with impact and
            precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {services.map((service, index) => (
            <ItemServices key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmazingServices;
