import { Component } from '@angular/core';
import { Project} from "./projects.model";
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'WisdomBots',
      description: 'A website allowing users to purchase cryptocurrency trading bots. The service also provided instructional videos, frequently asked questions, and an affiliate system. The website was implemented with Bootstrap and used my cryptocurrency transaction handler written in Go.',
      imageUrl: '/assets/wisdombots.png',
      skills: [["HTML", "html5"], ["CSS", "css3&logoColor=blue"], ["Bootstrap", "bootstrap"], ["Go", "go"], ["JavaScript", "javascript"], ["MongoDB", "mongodb"], ["RESTful API", ""]],
      githubUrl: 'https://github.com/djcurr/WisdomBots',
      liveUrl: 'https://djcurr.github.io/WisdomBots/',
    },
    // {
    //   title: 'Cryptocurrency Transaction Handler',
    //   description: 'Cryptocurrency Transaction Handler is a robust and versatile web application that allows users to pay for products using cryptocurrency. The service verifies the transaction, generate a license key, and sends it to the user in an email. Cryptocurrency Transaction Handler is built using a variety of technologies, including Go, GoEthereum, MongoDB, HTML, CSS, Gin Web, Bootstrap, and jQuery.',
    //   imageUrl: '/assets/transaction-handler.png',
    //   githubUrl: 'https://github.com/djcurr/WisdomBots/tree/master/transactionHandler',
    // },
    {
      title: 'Pathfinding Visualization',
      description: 'A fast WebAssembly application that allows users to visualize pathfinding algorithms. Users can place walls, move the start and end nodes, and see the algorithm process in action. This was built in Go using WebAssembly, Go, and JavaScript.',
      imageUrl: '/assets/pathfinder.png',
      skills: [["HTML", "html5"], ["CSS", "css3&logoColor=blue"], ["Go", "go"], ["JavaScript", "javascript"], ["WebAssembly", "webassembly"], ["Algorithms", ""]],
      githubUrl: 'https://github.com/djcurr/Pathfinding-Visualization',
      liveUrl: 'https://djcurr.github.io/Pathfinding-Visualization/',
    },
    {
      title: 'Tesla MCU Reverse Engineering',
      description: 'The Tesla MCU has become an incredibly secure piece of hardware, incorporating many layers of hardening. I would like to learn how the MCU controls the car by dumping and analyzing the firmware. I am beginning by looking at hardware vulnerabilities and how different components communicate.',
      skills: [],
      imageUrl: '/assets/mcu.jpg',
      githubUrl: 'https://github.com/djcurr/Tesla-MCU-Reverse-Engineering',
    },
    {
      title: 'Tesla Rebuild',
      description: 'I began a large project to restore a heavily damaged Tesla, which has given me a deep understanding of electric vehicle components and systems. There was a great deal of problem solving involved with the mechanical and electrical systems due to having little information or proper tools. This created my interest in what controls all of the systems in the car.',
      skills: [],
      imageUrl: '/assets/car1.jpg',
      liveUrl: 'https://photos.app.goo.gl/tm9LPLZsxsRMwaPS9',
    },
    // {
    //   title: 'Automated Cryptocurrency Trading',
    //   description: 'A program that executes cryptocurrency trades based on market indicators. This was one of my first projects and what helped me realize what I could do with programming.',
    //   imageUrl: '/assets/bot.png',
    //   githubUrl: 'https://github.com/djcurr/BotLife',
    // },
    {
      title: 'Portfolio Website',
      description: 'This website is designed to showcase my skills and experience in computer science. With a clean and modern design, it provides a brief overview of my education and the projects I\'ve worked on. The website is built using HTML, CSS, TypeScript, Bootstrap, and Angular, with responsive design that adapts to different screen sizes.',
      skills: [],
      imageUrl: '/assets/site.png',
      githubUrl: 'https://github.com/djcurr/PortfolioSite',
      liveUrl: 'https://derekcurrycompsci.com/',
    },
  ];

  mapSkillToImage(skill: string[]) {
    return "https://img.shields.io/badge/" + skill[0] + "-dee0e3?logo=" + skill[1]
  }

  protected readonly faSquareGithub = faSquareGithub;
  faWindowMaximize = faWindowMaximize;
}

