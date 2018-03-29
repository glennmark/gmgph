import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../router.animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
