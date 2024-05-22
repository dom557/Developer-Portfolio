// repositoryData.ts

export interface Repository {
    name: string;
    language: string;
    url: string;
  }
  
  const repositoryData: Repository[] = [
    {
      name: "git-helper-cli",
      language: "TypeScript",
      url: "https://github.com/dom557/git-helper-cli",
    },
    {
      name: "password-generator",
      language: "JavaScript",
      url: "https://github.com/dom557/password-generator",
    },
    {
      name: "mern-chat-app",
      language: "JavaScript",
      url: "https://github.com/dom557/mern-chat-app",
    },
  ];
  
  export default repositoryData;
  