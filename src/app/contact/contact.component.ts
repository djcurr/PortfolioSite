import { Component } from '@angular/core';
import { faSquareGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  faSquareGithub = faSquareGithub;
  faLinkedinIn = faLinkedinIn;
}
