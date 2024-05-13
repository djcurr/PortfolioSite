import {Component} from '@angular/core';
import {Experience} from "./experience.model";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: "HCL Tech",
      title: "Software Engineer Intern | Cloud Development",
      date: "May 2023 - May 2024",
      information: ["Developed a service for querying Kubernetes cluster usage across environments to reduce overhead where possible, using Prometheus, Docker, and GCP, alongside another intern", "Designed and developed an API for creating managed CloudSQL Instances with configurable automated backups for a product team", "Designed and developed a generic dependencies API for Kubernetes cluster Helm dependencies", "Communicated with different teams to resolve issues and gather information, collaborated with colleagues", "Used various GCP managed services and tools for development and troubleshooting", "Initially summer internship, received extension for fall semester, then spring semester"],
      location: "Cary, NC",
      skills: [["Google Cloud", "google-cloud"], ["Go", "go"], ["Kubernetes", "kubernetes"], ["Docker", "docker"], ["PostgreSQL", "postgresql"], ["RESTful API", ""]],
      imageLink: "./assets/HCL.jpg",
      companyWebsite: "https://www.hcltech.com/"
    },
    {
      company: "Codecademy",
      title: "Content Contributor | Go & WebDevelopment",
      date: "May 2024 - November 2024",
      information: ["Experience designing interactive lessons and quizzes reinforcing learning and increasing learner retention rates",
        "Specialize in distilling complex GoLang and web development concepts into digestible, engaging educational content for diverse professional audiences",
        "Collaborate with Codecademy's Curriculum team to craft learning outcomes and build a compelling learner experience",
        "Advocate for best practices in software engineering within educational materials, enhancing the real-world applicability of learning experiences",
        "Skilled in creating B2B educational solutions that cater to the specific needs of businesses seeking to upskill their teams in modern technologies"
      ],
      location: "Remote",
      skills: [["Go", "go"], ["RESTful API", ""], ["Pedagogy",""], ["Communication", ""], ["HTML", "html5"], ["CSS", "css3&logoColor=blue"]],
      imageLink: "./assets/codecademy.jpg",
      companyWebsite: "https://www.codecademy.com/"
    }
  ];

  mapSkillToImage(skill: string[]) {
    return "https://img.shields.io/badge/" + skill[0] + "-dee0e3?logo=" + skill[1]
  }
}

