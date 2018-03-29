import { Component } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';



  ngOnInit() {
    particlesJS.load('particles-js', '../assets/data/particle_triangle-config.json', function() {
      //console.log('callback - particles.js config loaded');
    });
  }

}







