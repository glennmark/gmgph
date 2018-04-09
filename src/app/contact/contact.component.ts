import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  showContactResponse:boolean = false;
  isSendingInquiry:boolean = false;

  contactForm: FormGroup;

  constructor(fb: FormBuilder, private http: HttpClient) {
    this.contactForm = fb.group({
      'fullName': [null, Validators.required],
      'contactNumber': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(13)])],
      'message': [null, Validators.compose([Validators.minLength(10), Validators.maxLength(500)])],
    });

  }
  closeContactResponse() {
    this.showContactResponse = false;
    this.isSendingInquiry=false;
  }
  sendInquiry() {
    this.isSendingInquiry=true;
    let today = new Date();
    let dateStamp = today.toLocaleString("en-US");

    

    if (this.contactForm.valid) {    
      let params = "?dateInquire=" + dateStamp + "&fullName=" + this.contactForm.controls.fullName.value + "&contactNumber=" + this.contactForm.controls.contactNumber.value + "&message=" + this.contactForm.controls.message.value;

      this.http.get(
        'https://script.google.com/macros/s/AKfycbyjql79VZf55cvnTGNld7nFDrLuSlj6XIq3JCKGLUnlvZwe_jU/exec' + params,{}
      )
        .subscribe(
        res => {
          console.log(res);
          this.showContactResponse = true;
        },
        err => {
          console.log("Error occured");
        }
        );

        
        this.contactForm.reset();
        

    }
  }


  ngOnInit() {

  }

}
