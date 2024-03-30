import {Component, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  landing = "I specialize in cloud development, leveraging platforms like GCP to deploy scalable and resilient applications. Check out my projects to see what I've been working on.";

  constructor(private modalService: NgbModal) {}

  openModal(content : TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then();
  }
}
