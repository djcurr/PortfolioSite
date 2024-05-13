import {Component} from '@angular/core';
import {About} from "./about.model";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent {
  about = "I'm Derek – a Computer Science major at NC State. I've worked on real-world problems inside and outside the classroom. During my year with HCL Tech, I have received two contract extensions, contributed many features to production, learned many new technologies, solidified design principles, communicated with different teams, and made great friends.\n\nOutside my professional and academic life, I enjoy learning and working on personal projects such as this website and my pathfinding visualizer (check them out!). In my free time I most enjoy skiing, along with camping and hiking when I can't ski. I took the picture above at Snowbird in Utah!"
  aboutShort = "I'm Derek – a Computer Science major at NC State. I've worked on real-world problems inside and outside the classroom. During my year with HCL Tech, I have contributed many features to production, learned many new technologies, solidified design principles, and made great friends.\n\nOutside my professional and academic life, I enjoy learning and working on personal projects such as my pathfinding visualizer. In my free time I most enjoy skiing, along with camping and hiking when I can't ski. I took the picture above at Snowbird in Utah!"
  skills: About[] = [
    {
      label: "Education",
      items: [["North Carolina State University", ""], ["Computer Science (BS)", ""], ["Mathematics (BS)", ""], ["May 2025", ""], ["Cumulative GPA: 3.93", ""], ["Major GPA: 4.0", ""], ["Dean's List", ""]]
    },
    {
      label: "Languages",
      items: [["JavaScript", "javascript"], ["Java", ""], ["Go", "go"], ["C", "c&logoColor=blue"], ["C++", "cplusplus&logoColor=blue"], ["HTML", "html5"], ["CSS", "css3&logoColor=blue"], ["SQL", "postgresql&logoColor=#4169E1"]],
    },
    {
      label: "Frameworks",
      items: [["Kubernetes", "kubernetes"], ["OpenAPI", "openapiinitiative"], ["Prometheus", "prometheus"], ["Node.js", "nodedotjs"], ["Angular", "angular&logoColor=red"], ["Bootstrap", "bootstrap"], ["RESTful API", ""], ["JUnit", "junit5"], ["MongoDB", "mongodb"], ["Jenkins", "jenkins"], ["Helm", "helm&logoColor=blue"], ["OpenMP", ""]]
    },
    {
      label: "Developer Tools",
      items: [["Git", "git"], ["Docker", "docker"], ["Google Cloud Platform", "google-cloud"], ["Visual Studio", "visual-studio&logoColor=blue"], ["Eclipse", "eclipse&logoColor=purple"], ["Jetbrains Tools", "jetbrains&logoColor=black"], ["Doxygen", "doxygen&logoColor=blue"]]
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
