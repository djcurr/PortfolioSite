import {Component, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  landing = "Founder & Technical Architect specializing in cloud, AI, and financial systems. I build scalable, resilient applications using AWS, GCP, and cutting-edge technologies. Explore my projects to see my work in action.";

  constructor(private modalService: NgbModal) {}

  openModal(content : TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then();
  }
}
