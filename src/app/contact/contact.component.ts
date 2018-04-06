import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInAnimation } from '../router.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.contactForm = fb.group({
      'fullName': [null, Validators.required],
      'contactNumber': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'message': [null, Validators.compose([Validators.minLength(10), Validators.maxLength(500)])],
    });

  }

  ngOnInit() {
  }

}
