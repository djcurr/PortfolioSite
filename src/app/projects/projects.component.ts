import {Component} from '@angular/core';
import {Project} from "./projects.model";
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import {faWindowMaximize} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Pathfinding Visualization',
      description: 'A fast WebAssembly application that allows users to visualize pathfinding algorithms. Users can place walls, move the start and end nodes, and see the algorithm process in action. This was created with object-oriented design principles and thorough error handling as the primary focus. Low-level concepts such as shared-memory were required to interface between JS and Go. Bootstrap was used to create a clean and responsive page, and Angular for dynamic content. Check out the Readme!',
      imageUrl: '/assets/pathfinder.png',
      imageWidth: 1312,
      imageHeight: 923,
      skills: [["HTML", "html5"], ["CSS", "css3&logoColor=blue"], ["Go", "go"], ["JavaScript", "javascript"], ["WebAssembly", "webassembly"], ["Angular", "angular&logoColor=red"], ["Algorithms", ""]],
      githubUrl: 'https://github.com/djcurr/Pathfinding-Visualization',
      liveUrl: 'https://djcurr.github.io/Pathfinding-Visualization/',
    },
    {
      title: 'Heat Equation Visualization',
      description: 'This was designed using advanced software engineering and mathematical techniques through an interactive C++ application that simulates heat transfer. Emphasizing efficient application design, this project leverages OpenMP for robust multithreading capabilities, ensuring high-performance computations. The architecture is designed around the Model-View-Controller (MVC) and Publish/Subscribe (Pub/Sub) patterns, optimizing maintainability and scalability while decoupling the UI from computational logic for fluid, real-time user interactions. The solution is obtained using partial differential equations, the finite element method (FEM), and advanced linear algebra techniques such as algebraic multigrid (AMG). Check out the Readme!',
      imageUrl: '/assets/heatViz.png',
      imageWidth: 2878,
      imageHeight: 1674,
      skills: [["C++", "cplusplus&logoColor=blue"], ["OpenMP", ""], ["OpenGL", "opengl&logoColor=5586A4"], ["Eigen", ""], ["Doxygen", "doxygen&logoColor=blue"], ["Differential Equations", ""]],
      githubUrl: 'https://github.com/djcurr/heatEquationVisualization'
    },
    {
      title: 'Portfolio Website',
      description: 'This website is designed to showcase my skills and experience in computer science. With a clean and modern design, not just in the looks, but in the code as well, it provides a brief overview of my education and the projects I\'ve worked on. Featuring a responsive design with dynamic content, a modular single-page application consisting of multiple components utilizing many of Angular\'s features, a CDN is used to deliver the best sized image, and object-oriented UI code for easy modification. Check out the Readme!',
      skills: [["HTML", "html5"], ["CSS", "css3&logoColor=blue"], ["JavaScript", "javascript"], ["Bootstrap", "bootstrap"], ["Angular", "angular&logoColor=red"]],
      imageUrl: '/assets/site.png',
      imageWidth: 1919,
      imageHeight: 1057,
      githubUrl: 'https://github.com/djcurr/PortfolioSite'
    },
    // {
    //   title: 'WisdomBots',
    //   description: 'A website allowing users to purchase cryptocurrency trading bots. The service also provided instructional videos, frequently asked questions, and an affiliate system. The website was implemented with Bootstrap and used my cryptocurrency transaction handler written in Go.',
    //   imageUrl: '/assets/wisdombots.png',
    //   imageHeight: 1082,
    //   imageWidth: 1902,
    //   skills: [["HTML", "html5"], ["CSS", "css3&logoColor=blue"], ["Bootstrap", "bootstrap"], ["Go", "go"], ["JavaScript", "javascript"], ["MongoDB", "mongodb"], ["RESTful API", ""]],
    //   githubUrl: 'https://github.com/djcurr/WisdomBots',
    //   liveUrl: 'https://djcurr.github.io/WisdomBots/',
    // },
    {
      title: 'Tesla Rebuild',
      description: 'I began a large project to restore a heavily damaged Tesla, which has given me a deep understanding of electric vehicle components and systems. There was a great deal of problem solving involved with the mechanical and electrical systems due to having little information or proper tools. This created my interest in what controls all of the systems in the car. Check out the photo album!',
      skills: [["Problem Solving", ""], ["Determination", ""], ["Innovation", ""]],
      imageWidth: 4080,
      imageHeight: 3072,
      imageUrl: '/assets/car1.jpg',
      liveUrl: 'https://photos.app.goo.gl/tm9LPLZsxsRMwaPS9',
    },
    {
      title: 'Tesla MCU Reverse Engineering',
      description: 'The Tesla MCU has become an incredibly secure piece of hardware, incorporating many layers of hardening. I would like to learn how the MCU controls the car by dumping and analyzing the firmware. I am beginning by looking at hardware vulnerabilities and how different components communicate.',
      skills: [["Reverse Engineering", ""], ["Hardware Development", ""], ["Assembly", ""]],
      imageWidth: 1920,
      imageHeight: 1080,
      imageUrl: '/assets/mcu.jpg',
      githubUrl: 'https://github.com/djcurr/Tesla-MCU-Reverse-Engineering',
    },
    // {
    //   title: 'Cryptocurrency Transaction Handler',
    //   description: 'Cryptocurrency Transaction Handler is a robust and versatile web application that allows users to pay for products using cryptocurrency. The service verifies the transaction, generate a license key, and sends it to the user in an email. Cryptocurrency Transaction Handler is built using a variety of technologies, including Go, GoEthereum, MongoDB, HTML, CSS, Gin Web, Bootstrap, and jQuery.',
    //   imageUrl: '/assets/transaction-handler.png',
    //   githubUrl: 'https://github.com/djcurr/WisdomBots/tree/master/transactionHandler',
    // },
    // {
    //   title: 'Automated Cryptocurrency Trading',
    //   description: 'A program that executes cryptocurrency trades based on market indicators. This was one of my first projects and what helped me realize what I could do with programming.',
    //   imageUrl: '/assets/bot.png',
    //   githubUrl: 'https://github.com/djcurr/BotLife',
    // },
  ];

  mapSkillToImage(skill: string[]) {
    return "https://img.shields.io/badge/" + skill[0] + "-dee0e3?logo=" + skill[1]
  }

  protected readonly faSquareGithub = faSquareGithub;
  faWindowMaximize = faWindowMaximize;
}

