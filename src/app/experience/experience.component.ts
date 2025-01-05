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
      company: 'Stock Traders Daily Canada',
      title: 'Founder & Technical Architect',
      date: 'October 2024',
      information: [
        'Architected and launched Stock Traders Daily Canada as a scalable, multi-tenant cloud platform running on AWS using Spring, .NET, Docker, and microservices, providing real-time updates for 1700 Canadian stocks.',
        'Created a Retrieval-Augmented Generation (RAG) system for generating macroeconomic reports.',
        'Utilized embeddings, AWS Bedrock, and Microsoft Semantic Kernel with cutting-edge experimental features to extract insights from financial data sources.',
        'Led a designer and developer to meet tight deadlines under high-pressure conditions.',
        'Refined stakeholder communication by working closely with the CEO to extract complex requirements, clarify objectives, and ensure alignment with high-level business goals.'
      ],
      location: '',
      skills: [
        ['Java (Spring)', 'spring'],
        ['C\#', ''],
        ['.NET', 'dotnet'],
        ['Angular', 'angular'],
        ['Docker', 'docker'],
        ['AWS', 'amazonwebservices'],
        ['AWS S3', 'amazons3'],
        ['AWS EC2', 'amazonec2'],
        ['AWS Bedrock', 'amazonaws'],
        ['Microservices', ''],
        ['DNS', ''],
        ['System Design', '']
      ],
      imageLink: './assets/stocktradersdaily_canada.png',
      companyWebsite: 'https://canada.stocktradersdaily.com/'
    },
    {
      company: 'Stock Traders Daily',
      title: 'Software Developer',
      date: 'August 2024 - October 2024',
      information: [
        'Repaired StockTradersDaily.com (500k monthly traffic) from critical server failure; Debugged PHP 5.6 code, optimized databases, and resolved DNS and Linux networking issues.',
        'Coordinated with hosting providers to address system-wide outages and ensure stable operations.',
        'Rewrote a PDF generator for 7,000 stock reports, reducing processing time from 5 seconds to 0.5 seconds per report (40x speedup).',
        'Improved a chart generator for 7,000 stock charts, reducing runtime from 20 minutes to 5 minutes using Puppeteer and Puppeteer Cluster.',
        'Redesigned financial XML structures and introduced production workflows for better scalability and efficiency.'
      ],
      location: 'Remote',
      skills: [
        ['PHP', 'php'],
        ['Python', 'python'],
        ['DNS', ''],
        ['Puppeteer', 'puppeteer'],
        ['XML', 'xml']
      ],
      imageLink: './assets/stocktradersdaily.jpg',
      companyWebsite: 'https://stocktradersdaily.com/'
    },
    {
      company: 'Codecademy',
      title: 'Content Contributor',
      date: 'April 2024 – November 2024',
      information: [
        'Formulated interactive lessons and quizzes to enhance learning retention.',
        'Synthesized complex Go and web development concepts into accessible lessons for professionals.',
        'Integrated inheritance and polymorphic practices into educational materials to create industry-ready engineers.'
      ],
      location: 'Remote',
      skills: [
        ['Go', 'go'],
        ['Web Development', ''],
        ['Pedagogy', ''],
        ['Technical Writing', '']
      ],
      imageLink: './assets/codecademy.jpg',
      companyWebsite: 'https://www.codecademy.com/'
    },
    {
      company: 'HCL Technology',
      title: 'Software Engineer Intern',
      date: 'May 2023 – May 2024',
      information: [
        'Developed a service for Kubernetes cluster usage across environments to reduce overhead, leveraging Prometheus, Docker, and GCP alongside another intern.',
        'Designed and developed a production API for creating managed CloudSQL Instances with configurable automated backups.',
        'Planned and created a CustomAgents production API for Kubernetes cluster Helm dependencies.',
        'Collaborated with multiple teams for issue resolution, information gathering, and deploying new features under tight deadlines.'
      ],
      location: 'Cary, NC',
      skills: [
        ['Go', 'go'],
        ['Echo', ''],
        ['Kubernetes', 'kubernetes'],
        ['GCP', 'googlecloud'],
        ['Docker', 'docker'],
        ['PostgreSQL', 'postgresql'],
        ['API', '']
      ],
      imageLink: './assets/HCL.jpg',
      companyWebsite: 'https://www.hcltech.com/'
    }
  ];

  mapSkillToImage(skill: string[]) {
    return "https://img.shields.io/badge/" + skill[0] !== 'C\#' ? skill[0] : 'C%23' + "-dee0e3?logo=" + skill[1]
  }
}

