import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navigator';
  environment = environment.name;

  constructor(
    private router: Router
  ){

  }

  goToHrpBe(){
    this.router.navigate(['hr-process-be']);
  }

  goToHrpNl(){
    this.router.navigate(['hr-process-nl']);
  }

  goToFteTracker(){
    this.router.navigate(['fte-tracker']);
  }

  goToSharp(){
    this.router.navigate(['sharp']);
  }

  goToMain(){
    this.router.navigate(['']);
  }
}
