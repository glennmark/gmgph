import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../router.animations';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
