import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          I'm a passionate full stack developer with over two years of hands-on experience in crafting innovative solutions that drive business growth. Proficient in a wide range of technologies including React.js, Next.js, Express.js, and Laravel, I specialize in developing seamless user experiences and robust backend systems.
          <br />
          <br />
          My journey in software development has been marked by a relentless pursuit of excellence and a commitment to continuous learning. I thrive in dynamic, collaborative environments where I can leverage my technical expertise to tackle complex challenges and deliver impactful solutions.
          <br />
          <br />
          Driven by a passion for innovation and a desire to make a positive impact, I'm constantly seeking out new opportunities to grow both personally and professionally. Let's connect and explore how we can collaborate to bring your next project to life!
        </p>
      </div>
    </section>
  );
};

export default About;
