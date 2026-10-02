export const projects = [
  {
    id: "cube",
    title: "CUBE website project",
    status: "Finished",
    date: "Oct. 2025 - March 2026",
    icon: "fa-solid fa-code",
    category: "Web Dev",
    mainPicture: "/assets/img/Projects/ProjectCube/CubeMain.jpg",
    description:
      "University team project: Complete Website Conception, Development, and SQL Database Architecture with integrated GDPR Compliance.",
    details: [
      {
        image: "/assets/img/Projects/ProjectCube/Part1.png",
        description:
          "UML Conception: The UML Conception phase began by creating a Use Case Diagram to model the website's functional requirements and actor interactions, followed by a Class Diagram to detail the static structure and relationships between core entities, and finally a BPMN Diagram to clearly map out the complex, sequential business processes.",
      },
      {
        image: "/assets/img/Projects/ProjectCube/Part2.png",
        description:
          "Database Conception (Merise: MCD/MLD): We began the Conception phase by developing the Conceptual Data Model (MCD) to visually represent the system's entities and their relationships, followed by the derivation of the Relational Logical Data Model (MLD) to define the final database tables and primary/foreign keys, adhering to Merise principles.",
      },
      {
        image: "/assets/img/Projects/ProjectCube/Part3.png",
        description:
          "SQL Implementation: The SQL implementation involved translating the model into the database structure, writing INSERT statements to populate the initial data, and integrating advanced integrity rules via CHECK constraints and powerful procedural logic using TRIGGERS to ensure data consistency and compliance.",
      },
    ],
    techStack: [
      "PHP/Laravel",
      "UML",
      "Merise",
      "PostgreSQL",
      "Web design / development",
      "Cryptography",
    ],
    link: "https://github.com/Maelbs/s335-cube",
  },
  {
    id: "game",
    title: "Game realisation project",
    status: "Finished",
    date: "Dec 2024",
    icon: "fa-solid fa-code",
    category: "Software",
    mainPicture: "/assets/img/Projects/ProjectGame/GameMain.png",
    description:
      'University team project: Development of a C# video game focused on "Pancakes", including gameplay mechanics, character design, and interactive elements.',
    details: [
      {
        image: "/assets/img/Projects/ProjectGame/Part1.jpg",
        description:
          "Brainstorming Phase: The Brainstorming Phase focused on defining the core concept of the 'Pancakes' game, outlining the primary gameplay mechanics, developing unique character designs, and specifying all necessary interactive elements before starting coding.",
      },
      {
        image: "/assets/img/Projects/ProjectGame/Part2.png",
        description:
          "Development Phase (C# / WPF): The subsequent Development Phase involved implementing the defined mechanics and design, utilizing C# for the game logic and the WPF (Windows Presentation Foundation) framework to build the graphical interface and interactive elements of the video game.",
      },
    ],
    techStack: ["C#", "UML", "Game design", "WPF"],
    link: "https://github.com/Maelbs/StackNCrepe",
  },
  {
    id: "database",
    title: "Database management & analysis",
    status: "Finished",
    date: "Mar - April 2025",
    icon: "fa-solid fa-database",
    category: "Data & DB",
    mainPicture: "/assets/img/Projects/ProjectData/DataMain.png",
    description:
      "The project involved the full lifecycle of database development, from conceptual design and data insertion to advanced querying, statistical analysis, and dynamic data visualization for a research laboratory's management system.",
    details: [
      {
        image: "/assets/img/Projects/ProjectData/Part1.png",
        description:
          "Conceptual Modeling and Creation : We began by designing the database structure, which involved creating the Conceptual Data Model (MCD) and the Relational Logical Data Model (MLD), followed by generating the SQL script for table creation with all necessary integrity constraints",
      },
      {
        image: "/assets/img/Projects/ProjectData/Part2A.png",
        description:
          "Data Manipulation and Insertion : The data insertion phase required manipulating initial tables, loading data from existing files (SQL, Excel/CSV), and then generating and populating large main tables (Project, Personne, ContratRH) and five association tables using SQL cross-joins and random data generation techniques",
      },
      {
        image: "/assets/img/Projects/ProjectData/Part2B.png",
        description:
          "SQL Queries : We then wrote and executed a series of SQL queries to address specific analytical needs related to people's room assignments, equipment exploitation, publication contributions, and human resources contracts",
      },
      {
        image: "/assets/img/Projects/ProjectData/Part3.png",
        description:
          "Statistical Tests : Statistical analysis was performed by first creating a PostgreSQL SQL view of equipment utilization data, which was then exported to Excel to calculate various statistics, including mean, median, quartiles, and Z-scores, to verify the database's function",
      },
      {
        image: "/assets/img/Projects/ProjectData/Part4.png",
        description:
          "DataViz with PowerBI : Finally, we created dynamic data visualization reports using PowerBI, based on the previously created SQL views, with the goal of presenting two distinct and pertinent analytical reports, including one entirely in English, to a team of professionals",
      },
    ],
    techStack: ["Merise", "PostgreSQL", "Excel", "PowerBi"],
    link: "/assets/files/CompteRendu_LISTIC.pdf",
  },
  {
    id: "portfolio",
    title: "Portfolio website project",
    status: "Finished",
    date: "Oct - Nov 2025",
    icon: "fa-solid fa-code",
    category: "Web Dev",
    mainPicture: "/assets/img/Projects/ProjectPortfolio/PortfolioMain.png",
    description:
      "This project is a personal portfolio built using HTML, CSS, JavaScript, and PHP. Its goal is to showcase my skills, projects, and experience through a clean and responsive interface. The website features dynamic sections, smooth interactions, and a simple backend structure, offering an efficient and modern way to present my work as a developer.",
    details: [],
    techStack: ["Web design / development", "PHP/Laravel"],
    link: "https://github.com/Maelbs/PortfolioUSMB",
  },
];

export const technologies = [
  { name: 'HTML5', category: 'developpement', color: '#E34F26', logo: { type: 'fa', value: 'fa-html5' } },
  { name: 'CSS3', category: 'developpement', color: '#1572B6', logo: { type: 'fa', value: 'fa-css3-alt' } },
  { name: 'JavaScript', category: 'developpement', color: '#F7DF1E', logo: { type: 'fa', value: 'fa-js' } },
  { name: 'Svelte', category: 'developpement', color: '#FF3E00', logo: { type: 'img', value: 'assets/img/SvelteIcon.png' } },
  { name: 'Python', category: 'developpement', color: '#3776AB', logo: { type: 'fa', value: 'fa-python' } },
  { name: 'PHP', category: 'developpement', color: '#777BB4', logo: { type: 'fa', value: 'fa-php' } },
  { name: 'React', category: 'developpement', color: '#497fbd', logo: { type: 'fa', value: 'fa-react' } },
  { name: 'Vue', category: 'developpement', color: '#777BB4', logo: { type: 'fa', value: 'fa-vuejs' } },
  { name: 'Tailwind', category: 'developpement', color: '#06B6D4', logo: { type: 'fa', value: 'fa-css3-alt' } },
  { name: 'GitHub', category: 'developpement', color: '#181717', logo: { type: 'fa', value: 'fa-github' } },
  { name: 'GitLab', category: 'developpement', color: '#f59032', logo: { type: 'fa', value: 'fa-gitlab' } },
  { name: 'Git', category: 'developpement', color: '#F05032', logo: { type: 'fa', value: 'fa-git-alt' } },
  { name: '.NET', category: 'developpement', color: '#512BD4', logo: { type: 'fa', value: 'fa-code' } },
  { name: 'Visual Studio', category: 'developpement', color: '#9b71d2', logo: { type: 'img', value: 'assets/img/VSIcon.png' } },
  { name: 'Visual Studio Code', category: 'developpement', color: '#007abc', logo: { type: 'img', value: 'assets/img/VSCIcon.png' } },
  { name: 'UML Modelling', category: 'developpement', color: '#6d9af0ff', logo: { type: 'img', value: 'assets/img/UMLIcon.png' } },
  { name: 'Visual Paradigm', category: 'developpement', color: '#c73030', logo: { type: 'img', value: 'assets/img/VPIcon.png' } },
  { name: 'Windows', category: 'systeme', color: '#1885dfff', logo: { type: 'fa', value: 'fa-windows' } },
  { name: 'Bash', category: 'systeme', color: '#4EAA25', logo: { type: 'fa', value: 'fa-terminal' } },
  { name: 'Linux', category: 'systeme', color: '#FCC624', logo: { type: 'fa', value: 'fa-linux' } },
  { name: 'Docker', category: 'systeme', color: '#2f70fc', logo: { type: 'fa', value: 'fa-docker' } },
  { name: 'Kubernetes', category: 'systeme', color: '#2456fc', logo: { type: 'img', value: 'assets/img/kubernetesIcon.png' } },
  { name: 'SQL', category: 'bdd', color: '#cc9e00', logo: { type: 'fa', value: 'fa-database' } },
  { name: 'PostgreSQL', category: 'bdd', color: '#336791', logo: { type: 'img', value: 'assets/img/PostgresIcon.png' } },
  { name: 'Merise Modelling', category: 'bdd', color: '#30e0ffff', logo: { type: 'img', value: 'assets/img/MeriseIcon.png' } },
  { name: 'Power AMC', category: 'bdd', color: '#f75b5bff', logo: { type: 'img', value: 'assets/img/PAMCIcon.png' } }
];

export const benefits = [
  {
      metric: "10x",
      name: "Strong problem-solving skills",
      description: "Used to analyzing complex situations and proposing effective solutions tailored to the project’s needs. I can adapt quickly and find innovative ways to overcome technical challenges.",
  },
  {
      name: "Strong passion for continuous learning",
      description: "Curious and motivated to explore new tools and technologies to continuously improve my practices. I am always seeking new knowledge to stay at the forefront of technological trends.",
  },
  {
      name: "Excellent communication",
      description: "Communication is essential and one of my core values. I believe in transparency and constructive exchange above all. This helps me build strong relationships and ensures my efficiency and productivity in any work environment and with any team.",
  },
];

export const languagesData = [
  {
      name: "French",
      level: "Native speaker",
      percent: 100
  },
  {
      name: "English",
      level: "Intermediate / Upper",
      percent: 75
  },
  {
      name: "Spanish",
      level: "Intermediate",
      percent: 50
  }
];

export const miscData = [
  {
      text: "I love mountain biking, especially climbing trails.",
      icon: "fa-solid fa-person-biking"
  },
  {
      text: "I like learning languages, especially sign language and Japanese.",
      icon: "fa-solid fa-language"
  },
  {
      text: "I like learning musical instruments such as guitar and piano.",
      icon: "fa-solid fa-music"
  }
];

export const formationsData = [
  {
      title: "Fullstack & DevOps Developer Apprentice",
      date: "June 2025 - PRESENT",
      details: "Internship & Work-study program (**Current**).",
      school: "Conseil départemental de la Haute-Savoie",
      iconClass: "fas fa-laptop-code"
  },
  {
      title: "BUT Informatique - work-study (Technical Bachelor's Degree in computer science)",
      date: "2024 - PRESENT",
      details: "In progress – 3rd year", 
      school: "University of Savoy / Tetras – Annecy-le-Vieux, France",
      iconClass: "fas fa-graduation-cap"
  },
  {
      title: "French General Baccalaureate (High school diploma specialized in mathematics and physics-chemistry)",
      date: "2021 - 2024",
      details: "Graduated with **Honors**",
      school: "Roger Frison Roche High School – Chamonix Mont-Blanc, France",
      iconClass: "fas fa-graduation-cap"
  }
];
