import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW 
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-300 ">
              <span className="font-semibold">CMC  /</span> Software Engineer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            May 2024 - Present, Morocco
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          🚀 Experienced Full Stack Developer | Passionate About Innovation and Collaboration 🚀

With over two years of hands-on experience in full stack development, I've honed my skills across a wide array of technologies to deliver cutting-edge solutions for diverse projects. Known for my adept problem-solving abilities and unwavering commitment to excellence, I thrive in collaborative environments where innovation flourishes.

🔹 Technical Expertise: Proficient in React.js, Next.js, Express.js, Laravel, and more, I specialize in crafting intuitive user interfaces and robust backend systems. My comprehensive understanding of the entire stack enables me to seamlessly integrate frontend and backend components, ensuring optimal performance and a superior user experience.

🔹 Proven Track Record: Throughout my career, I've spearheaded the development of numerous projects, showcasing my ability to deliver high-quality solutions that meet the unique needs of each client. From optimizing performance to enhancing security measures, I approach each task with creativity and technical acumen.

🔹 Passionate About Growth: Committed to continuous learning and professional development, I eagerly seek out new challenges and opportunities to expand my skill set. I thrive on collaborating with like-minded professionals to drive innovation and deliver impactful solutions that make a difference.

Let's connect and explore how we can collaborate to drive positive change through innovative software development solutions!
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React Native
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
