import {Component, TemplateRef} from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons'
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  aboutMe= "I began learning my first programming language in high school. After I realized what I could accomplish, I began learning Go to apply to some of my interests, trading, and cryptocurrency. These projects sparked my love for Computer Science.";
  name2 = "What can we accomplish together, COMPANY?";
  faClose = faClose;

  constructor(private modalService: NgbModal) {}

  openModal(content : TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then();
  }
}
