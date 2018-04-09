import { Component, OnInit,OnDestroy,OnChanges } from '@angular/core';
import { fadeInAnimation } from '../router.animations';
import {style, state, animate, transition, trigger, SimpleChanges} from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit,OnDestroy,OnChanges {
  
 
  quote: any = {
    "text":"I am a front-end web developer.",
    "class":"animated fadeInUp"
  };
  intervalQuotation;
  CNQuote;


  constructor(private _commonService: CommonService) { }


  getCN() {
    let obj;
    this._commonService.getChuckNorrisWordsOfWisdom().subscribe(
      data => {
        obj = data;
        this.CNQuote = obj.value;
      },
      err => console.error(err),
      () => console.log()
    );
  }





  ngOnInit() {
    this.intervalQuotation = setInterval(() =>{
      this.quote.class="animated fadeOutDown";
      this.getCN();
      setTimeout(() => {
        if(this.CNQuote == undefined) {
          this.CNQuote = "im trying to load some Chuck Norris facts." 
        }
        this.quote.text = "Did you know, " + this.CNQuote;
        this.quote.class="animated fadeInUp";
        
      },1200)
    },10000)
    


  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("simple changes call");
  }
  ngOnDestroy() {
    clearInterval(this.intervalQuotation);
    console.log('onDestroy called');
    //throw new Error("Method not implemented.");
  }



  
}
