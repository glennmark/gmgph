import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../router.animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
