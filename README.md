# Portfolio Website

A responsive website built using Angular, TypeScript, HTML, CSS, and Bootstrap. The website showcases my
technical skills, personal projects, and academic work in computer science. Angular is used to create a dynamic and modular page,
Bootstrap is used to ensure the website is responsive and to ease development, Netlify CDN is used to dynamically resize images to 
serve the image size most optimized for the current screen size in order to decrease loading times. Content is encapsulated from the 
website code/design. The modularity also allows easy reordering of components on the page.

Check out the live website: https://derekcurrycompsci.com/

The website is composed of 5 components:

- [Landing](#landing)
- [About](#about)
- [Experience](#experience)
- [Projects](#projects)
- [Contact](#contact)

## Landing

The landing page is quite simple with no dynamic content, other than the image. There is just a call to action, 
and buttons to jump to my projects or open my resume in an iframe inside a modal.

## About

The about page just has two sections with dynamic content, the skills and the paragraph. I created this in a way new categories and skills 
will be dynamically added.

```html
<mat-tab *ngFor="let category of skills" label="{{ category.label }}">
  <div class="d-flex flex-row align-items-center justify-content-center h-100">
    <div class="skill-images-container">
      <div *ngFor="let item of category.items">
        <img [src]="mapSkillToImage(item)" alt="{{ item }}" class="skill-image"/>
      </div>
    </div>
  </div>
</mat-tab>
```

For each item in the array, the first item is the name to be shown for the skill, and the second item is the name of the Shields.io badge.

```typescript
export interface About {
  label: string;
  items: string[][];
}

class AboutComponent {
  skills: About[] = [
    {
      label: "Frameworks",
      items: [["Kubernetes", "kubernetes"], ["OpenAPI", "openapiinitiative"], ...]
    },
    ...
  ]
}
```

The about paragraph changes depending on the screen size.

```html
<p class="d-none d-md-block">
  {{ about }}
</p>
<p class="d-md-none">
  {{ aboutShort }}
</p>
```

## Experience

The experience component is dynamic and allows for adding new experiences by adding an item to an array in the component. (You could be here!)

```typescript
interface Experience {
  company: string;
  title: string;
  date: string;
  location: string;
  skills: string[][];
  information: string[];
  imageLink: string;
  companyWebsite: string;
}

class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: "HCL Tech",
      title: "Software Engineer Intern | Cloud Development",
      date: "May 2023 - May 2024",
      information: ["Developed a service for querying Kubernetes cluster usage across environments to reduce overhead where possible, using Prometheus, Docker, and GCP, alongside another intern", ...],
      location: "Cary, NC",
      skills: [["Google Cloud", "google-cloud"], ...],
      imageLink: "./assets/HCL.jpg",
      companyWebsite: "https://www.hcltech.com/"
    },
  ];
}
```

## Projects

The projects component is almost completely dynamic. Projects can easily be added, modified, rearranged, or deleted. This 
condenses the HTML code for the projects to just 40 lines, which I am very happy with. The link attached to the picture 
is dynamically chosen from the available links on the project.

```html
<div class="container-fluid">
  <section class="row" data-aos="fade-right">
    <div class="col-12">
      <h1 class="text-center">Projects</h1>
      <hr class="rounded"/>
    </div>
  </section>

  <div *ngFor="let project of projects" class="project-card d-flex flex-column flex-md-row align-items-center"
       data-aos="fade-right">
    <div class="project-details col-12 col-md-6">
      <h3>{{ project.title }}</h3>
      <div class="skills-container">
        <div *ngFor="let skill of project.skills" class="skill">
          <img [src]="mapSkillToImage(skill)" alt="{{ skill }}" class="skill-image"/>
        </div>
      </div>

      <p>{{ project.description }}</p>

      <div class="project-links">
        <a *ngIf="project.githubUrl" href="{{ project.githubUrl }}" class="icon-link github-link" target="_blank"
           rel="noopener noreferrer">
          <fa-icon [icon]="faSquareGithub" size="3x"></fa-icon>
        </a>
        <a *ngIf="project.liveUrl" href="{{ project.liveUrl }}" class="icon-link live-link" target="_blank"
           rel="noopener noreferrer">
          <fa-icon [icon]="faWindowMaximize" size="3x"></fa-icon>
        </a>
      </div>
    </div>

    <div class="project-image col-12 col-md-6">
      <a href="{{ project.liveUrl || project.githubUrl }}" target="_blank" rel="noopener noreferrer">
        <img [ngSrc]="project.imageUrl" alt="{{ project.title }}" class="img-fluid" [width]="project.imageWidth"
             [height]="project.imageHeight" placeholder sizes="sizes"/>
      </a>
    </div>
  </div>
</div>
```

```typescript
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  skills: string[][];
  githubUrl?: string;
  liveUrl?: string; // Optional property since not all projects may have a live URL
}

class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Pathfinding Visualization',
      description: 'A fast WebAssembly application that allows users ...',
      imageUrl: '/assets/pathfinder.png',
      imageWidth: 1312,
      imageHeight: 923,
      skills: [["HTML", "html5"], ["CSS", "css3&logoColor=blue"], ...],
      githubUrl: 'https://github.com/djcurr/Pathfinding-Visualization',
      liveUrl: 'https://djcurr.github.io/Pathfinding-Visualization/',
    },
    ...
  ]  
}
```
## Contact

The content section is static and just provides links to my LinkedIn, GitHub, and email.
