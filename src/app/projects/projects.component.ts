import { Component } from '@angular/core';
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  protected readonly faSquareGithub = faSquareGithub;
  faWindowMaximize = faWindowMaximize;
}

