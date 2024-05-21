import React, { useEffect, useState } from "react";

interface Project {
  name: string;
  description: string;
  html_url: string;
}

const Projects: React.FC<{}> = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("https://api.github.com/users/dom557/repos");
      const data = await response.json();
      // Filter out the repositories you want to display
      const filteredProjects = data
        .filter((repo: any) => repo.name.startsWith("password-generator") || repo.name.startsWith("mern-chat-app") || repo.name.startsWith("git-helper-cli") || repo.name.startsWith("automate_tasks"))
        .map((repo: any) => ({
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
        }));
      setProjects(filteredProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

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
          {projects.map((project) => (
            <a
              href={project.html_url}
              rel="noopener noreferrer"
              target="_blank"
              key={project.name}
              className="z-[1]"
            >
              <div className="flex-row flex mb-5">
                <div className="p-3">
                  <p className="text-white font-semibold text-xl">{project.name}</p>
                  <p className="text-gray-500 text-[10px]">{project.description}</p>
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
