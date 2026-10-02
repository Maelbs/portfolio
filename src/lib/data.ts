import { useTranslations } from 'next-intl';

export function usePortfolioData() {
  const t = useTranslations('Data');

  const projects = [
    {
      id: "cube",
      title: t('projects.0.title'),
      status: t('projects.0.status'),
      date: t('projects.0.date'),
      icon: "fa-solid fa-code",
      category: t('projects.0.category'),
      mainPicture: "/assets/img/Projects/ProjectCube/CubeMain.jpg",
      description: t('projects.0.description'),
      details: [
        {
          image: "/assets/img/Projects/ProjectCube/Part1.png",
          description: t('projects.0.details.0'),
        },
        {
          image: "/assets/img/Projects/ProjectCube/Part2.png",
          description: t('projects.0.details.1'),
        },
        {
          image: "/assets/img/Projects/ProjectCube/Part3.png",
          description: t('projects.0.details.2'),
        },
      ],
      techStack: t.raw('projects.0.techStack'),
      link: "https://github.com/Maelbs/s335-cube",
    },
    {
      id: "game",
      title: t('projects.1.title'),
      status: t('projects.1.status'),
      date: t('projects.1.date'),
      icon: "fa-solid fa-code",
      category: t('projects.1.category'),
      mainPicture: "/assets/img/Projects/ProjectGame/GameMain.png",
      description: t('projects.1.description'),
      details: [
        {
          image: "/assets/img/Projects/ProjectGame/Part1.png",
          description: t('projects.1.details.0'),
        },
        {
          image: "/assets/img/Projects/ProjectGame/Part2.png",
          description: t('projects.1.details.1'),
        },
      ],
      techStack: t.raw('projects.1.techStack'),
      link: "https://github.com/Maelbs/GameDev",
    },
    {
      id: "data",
      title: t('projects.2.title'),
      status: t('projects.2.status'),
      date: t('projects.2.date'),
      icon: "fa-solid fa-code",
      category: t('projects.2.category'),
      mainPicture: "/assets/img/Projects/ProjectData/DataMain.png",
      description: t('projects.2.description'),
      details: [
        {
          image: "/assets/img/Projects/ProjectData/Part1.png",
          description: t('projects.2.details.0'),
        },
        {
          image: "/assets/img/Projects/ProjectData/Part2A.png",
          description: t('projects.2.details.1'),
        },
        {
          image: "/assets/img/Projects/ProjectData/Part2B.png",
          description: t('projects.2.details.2'),
        },
        {
          image: "/assets/img/Projects/ProjectData/Part3.png",
          description: t('projects.2.details.3'),
        },
        {
          image: "/assets/img/Projects/ProjectData/Part4.png",
          description: t('projects.2.details.4'),
        },
      ],
      techStack: t.raw('projects.2.techStack'),
      link: "/assets/files/CompteRendu_LISTIC.pdf",
    },
    {
      id: "portfolio",
      title: t('projects.3.title'),
      status: t('projects.3.status'),
      date: t('projects.3.date'),
      icon: "fa-solid fa-code",
      category: t('projects.3.category'),
      mainPicture: "/assets/img/Projects/ProjectPortfolio/PortfolioMain.png",
      description: t('projects.3.description'),
      details: [],
      techStack: t.raw('projects.3.techStack'),
      link: "https://github.com/Maelbs/PortfolioUSMB",
    }
  ];

  const softSkillsData = [
    {
      metric: "10x",
      name: t('skills.0.name'),
      description: t('skills.0.description'),
    },
    {
      name: t('skills.1.name'),
      description: t('skills.1.description'),
    },
    {
      name: t('skills.2.name'),
      description: t('skills.2.description'),
    },
  ];

  const languagesData = [
    {
      name: t('languages.0.name'),
      level: t('languages.0.level'),
      percent: 100
    },
    {
      name: t('languages.1.name'),
      level: t('languages.1.level'),
      percent: 75
    },
    {
      name: t('languages.2.name'),
      level: t('languages.2.level'),
      percent: 50
    }
  ];

  const miscData = [
    {
      text: t('misc.0.text'),
      icon: "fa-solid fa-person-biking"
    },
    {
      text: t('misc.1.text'),
      icon: "fa-solid fa-language"
    },
    {
      text: t('misc.2.text'),
      icon: "fa-solid fa-music"
    }
  ];

  const formationsData = [
    {
      title: t('formations.0.title'),
      date: t('formations.0.date'),
      details: t('formations.0.details'),
      school: t('formations.0.school'),
      iconClass: "fas fa-laptop-code"
    },
    {
      title: t('formations.1.title'),
      date: t('formations.1.date'),
      details: t('formations.1.details'),
      school: t('formations.1.school'),
      iconClass: "fas fa-graduation-cap"
    },
    {
      title: t('formations.2.title'),
      date: t('formations.2.date'),
      details: t('formations.2.details'),
      school: t('formations.2.school'),
      iconClass: "fas fa-graduation-cap"
    }
  ];

  return {
    projects,
    softSkillsData,
    languagesData,
    miscData,
    formationsData
  };
}

export const technologies = [
  { name: "Java", category: "developpement" },
  { name: "C / C++", category: "developpement" },
  { name: "C#", category: "developpement" },
  { name: "PHP", category: "developpement" },
  { name: "Laravel", category: "developpement" },
  { name: "JavaScript", category: "developpement" },
  { name: "TypeScript", category: "developpement" },
  { name: "React", category: "developpement" },
  { name: "Next.js", category: "developpement" },
  { name: "Tailwind CSS", category: "developpement" },
  { name: "Python", category: "developpement" },
  { name: "HTML / CSS", category: "developpement" },
  { name: "Linux", category: "systeme" },
  { name: "Docker", category: "systeme" },
  { name: "Git", category: "systeme" },
  { name: "GitHub", category: "systeme" },
  { name: "GitLab", category: "systeme" },
  { name: "SQL", category: "bdd" },
  { name: "PostgreSQL", category: "bdd" },
  { name: "MySQL", category: "bdd" },
  { name: "Merise", category: "bdd" },
  { name: "UML", category: "bdd" }
];
