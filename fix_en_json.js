const fs = require('fs');

const file = 'messages/en.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Project 3 (Data)
data.Data.projects[2] = {
  title: "Database creation project",
  status: "Finished",
  date: "Dec - Jan 2024",
  category: "Databases",
  description: "University team project: Working from real-world, unformatted data representing a research laboratory, our task was to conceptualize and develop a complete PostgreSQL database.",
  details: [
    "Conceptual Modeling and Creation: Designing the database structure, MCD and MLD, followed by SQL script generation.",
    "Data Manipulation and Insertion: Loading data from files (SQL, Excel/CSV) and populating main tables via cross-joins.",
    "SQL Queries: Writing and executing complex SQL queries for specific analytical needs.",
    "Statistical Tests: Statistical analysis via an exported SQL view to Excel (mean, median, quartiles).",
    "DataViz with PowerBI: Creating dynamic data visualization reports presented to professionals."
  ],
  techStack: ["Merise", "PostgreSQL", "Excel", "PowerBi"]
};

// Project 4 (Portfolio)
data.Data.projects[3] = {
  title: "Portfolio website project",
  status: "Finished",
  date: "Oct - Nov 2025",
  category: "Web Dev",
  description: "This project is a personal portfolio built using HTML, CSS, JavaScript, and PHP. Its goal is to showcase my skills and projects with a clean interface.",
  details: [],
  techStack: ["Web design / development", "PHP/Laravel"]
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
