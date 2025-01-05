import {Component} from '@angular/core';
import {About} from "./about.model";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent {
  about = "I’m Derek – a Computer Science and Mathematics major at NC State, currently pursuing an accelerated master’s degree in Computer Science. I’m passionate about solving complex problems and have gained extensive hands-on experience building scalable systems, optimizing performance, and working with cutting-edge technologies.\n" +
    "\n" +
    "During my year with HCL Tech, I contributed production-grade features, designed APIs, and improved Kubernetes clusters. I've also founded Stock Traders Daily Canada, where I developed a multi-tenant platform using Java (Spring), C# (.NET), Docker, and AWS. From restoring a high-traffic website after critical server failure to integrating AI-driven features for financial systems, I live for tackling challenges with determination and creativity.\n" +
    "\n" +
    "Outside of work and academics, I love exploring personal projects like my pathfinding visualizer and interactive heat transfer simulator. When I’m not coding, you can find me skiing at Snowbird in Utah, camping, or hiking. I’m always curious, always learning, and always looking for another challenge."
  aboutShort = this.about;
  skills: About[] = [
    {
      label: "Education",
      items: [["North Carolina State University", ""], ["Computer Science (BS)", ""], ["Mathematics (BS)", ""], ["May 2025", ""], ["Cumulative GPA: 3.93", ""], ["Major GPA: 4.0", ""], ["Dean's List", ""]]
    },
    {
      label: "Languages",
      items: [
        ["JavaScript", "javascript"],
        ["Java", ""],
        ["Go", "go"],
        ["C", "c&logoColor=blue"],
        ["C++", "cplusplus&logoColor=blue"],
        ["C\#", ""],
        ["PHP", "php"],
        ["Python", "python"],
        ["HTML", "html5"],
        ["CSS", "css3&logoColor=blue"],
        ["SQL", "postgresql&logoColor=#4169E1"]
      ],
    },
    {
      label: "Frameworks",
      items: [
        ["Kubernetes", "kubernetes"],
        ["OpenAPI", "openapiinitiative"],
        ["Prometheus", "prometheus"],
        ["Node.js", "nodedotjs"],
        ["Angular", "angular&logoColor=red"],
        ["Bootstrap", "bootstrap"],
        ["RESTful API", ""],
        ["JUnit", "junit5"],
        ["MongoDB", "mongodb"],
        ["Jenkins", "jenkins"],
        ["Helm", "helm&logoColor=blue"],
        ["OpenMP", ""],
        ["Spring", "spring"],
        [".NET", "dotnet"],
        ["Echo", ""],
        ["Puppeteer", "puppeteer"]
      ]
    },
    {
      label: "Developer Tools",
      items: [
        ["Git", "git"],
        ["Docker", "docker"],
        ["Google Cloud Platform", "googlecloud"],
        ["AWS", "amazonwebservices"],
        ["Visual Studio", "visual-studio&logoColor=blue"],
        ["Eclipse", "eclipse&logoColor=purple"],
        ["Jetbrains Tools", "jetbrains&logoColor=black"],
        ["Doxygen", "doxygen&logoColor=blue"]
      ]
    },

  ]

  mapSkillToImage(skill: string[]) {
    let color = "dee0e3";
    if (skill[0] === "North Carolina State University") {
      color = "df0000"
    }
    return "https://img.shields.io/badge/" + skill[0] + "-" + color + "?logo=" + skill[1]
  }
}
