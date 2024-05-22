// repositoryData.ts

export interface Repository {
    name: string;
    language: string;
    html_url: string;
  }
  
  const repositoryData: Repository[] = [
    {
      name: "git-helper-cli",
      language: "TypeScript",
      html_url: "https://github.com/dom557/git-helper-cli",
    },
    {
      name: "password-generator",
      language: "Python",
      html_url: "https://github.com/dom557/password-generator",
    },
    {
      name: "mern-chat-app",
      language: "JavaScript",
      html_url: "https://github.com/dom557/mern-chat-app",
    },
    {
      name: "ai-recipe-generator",
      language: "Python",
      html_url: "https://github.com/dom557/ai-recipe-generator",
    },
  ];
  
  export default repositoryData;
  