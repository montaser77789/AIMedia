import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen w-full flex items-center justify-center"
      style={{
        background:
          "linear-gradient(to bottom, #9A58EE, #7D43EE, #602EEE, #FFFFFF)",
      }}
    >
      <div className="text-center flex flex-col items-center max-w-2xl text-white   gap-12">
        <h2>Contact Us</h2>
        <h1 className="text-white text-4xl  tracking-wider">
          Partner with Us for <br />
          Digital Success
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur. Tellus congue et libero purus
          tincidunt. Aenean turpis vel cras elementum ante. Tristique nunc velit
          in malesuada amet eget sit dictum. Risus tempus amet arcu erat in mi
          id feugiat a.
        </p>
      </div>
    </section>
  );
};

export default Hero;
