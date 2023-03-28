import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  about = "Hello! I'm a passionate computer science student at North Carolina State University," +
    " I first discovered the captivating world of programming back in high school. Ever" +
    " since diving into Go and exploring its applications in trading and cryptocurrency, my love " +
    "for computer science has only grown. As I work towards a minor in mathematics, " +
    "my ultimate goal is to tackle complex Machine Learning and AI problems, harnessing the power of " +
    "technology to shape a better future."
}
