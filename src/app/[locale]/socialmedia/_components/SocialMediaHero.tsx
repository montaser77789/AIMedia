import React from "react";

const SocialMediaHero = () => {
  return (
    <section
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #9A58EE, #7D43EE, #602EEE, #FFFFFF)",
      }}
    >
      {/* تأثيرات بصرية إضافية */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-300/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="text-center flex flex-col items-center max-w-2xl text-white   gap-12">
        <h2 className="text-lg md:text-xl font-medium tracking-wider">
          Our Creative Designs
        </h2>

        <h1 className="text-white text-4xl  tracking-wider">
          Stand Out on Social Media <br />
          With Our Professional Designs
        </h1>

        <p >
          We provide creative solutions to showcase your brand on social media
          platforms. Attractive designs, unique content, and effective
          strategies to enhance your digital presence.
        </p>
      </div>
    </section>
  );
};

export default SocialMediaHero;
