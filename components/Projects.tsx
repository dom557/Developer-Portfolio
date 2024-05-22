import React from "react";
import repositoryData, { Repository } from "./repositoryData";
import clsx from "clsx";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex-col flex md:flex-row mt-7">
          {repositoryData.map((project: Repository) => (
            <a
              href={project.html_url}
              rel="noopener noreferrer"
              target="_blank"
              key={project.name}
              className={clsx("z-[1]", "project-link")}
            >
              <div className="flex-row flex mb-5">
                <div className="p-3">
                  <p className="text-white font-semibold text-xl">{project.name}</p>
                  <p className="text-gray-500 text-[10px]">{project.language}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
