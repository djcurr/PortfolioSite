import { Component } from '@angular/core';
import { About } from "./about.model";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  about = "Hi, I'm Derek – a Computer Science major at NC State with an interest in software development and a side passion for mathematics. My academic accomplishments are matched with real-world tech experience, where I've developed services and APIs for a Kubernetes application. Beyond the code, my hands-on project rebuilding a Tesla Model 3 has given me a unique perspective on technology's tangible impact. Here, you'll find a portfolio that mirrors my commitment to clean code, innovative problem-solving, and a collaborative spirit. Dive in and let's connect over creating impactful tech solutions."
  skills: About[] = [
    {
      label: "Education",
      items: [["North Carolina State University", ""], ["May 2025", ""], ["Cumulative GPA: 3.93", ""], ["Major GPA: 4.0", ""], ["Dean's List", ""]]
    },
    {
      label: "Languages",
      items: [["JavaScript", "javascript"], ["Java", ""], ["Go", "go"], ["C", "c&logoColor=blue"], ["C++", "cplusplus&logoColor=blue"], ["HTML", "html5"], ["CSS", "css3&logoColor=blue"]],
    },
    {
      label: "Frameworks",
      items: [["Kubernetes", "kubernetes"], ["OpenAPI", "openapiinitiative"], ["Prometheus", "prometheus"], ["Node.js", "nodedotjs"], ["Angular", "angular&logoColor=red"], ["Bootstrap", "bootstrap"], ["RESTful API", ""], ["JUnit", "junit5"], ["MongoDB", "mongodb"], ["Jenkins", "jenkins"]]
    },
    {
      label: "Developer Tools",
      items: [["Git", "git"], ["Docker", "docker"], ["Google Cloud Platform", "google-cloud"], ["Visual Studio", "visual-studio&logoColor=blue"], ["Eclipse", "eclipse&logoColor=purple"], ["Jetbrains Tools", "jetbrains&logoColor=black"]]
    },
  ]

  mapSkillToImage(skill: string[]) {
    return "https://img.shields.io/badge/" + skill[0] + "-dee0e3?logo=" + skill[1]
  }
}
