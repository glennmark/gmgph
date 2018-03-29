import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../router.animations';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
