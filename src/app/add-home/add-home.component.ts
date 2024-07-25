import { Component } from '@angular/core';
import { Home } from '../home';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrl: './add-home.component.css'
})
export class AddHomeComponent {
  home = new Home();
  constructor(private homeService: HomeService, private router:Router){}

  


  submitHomeButton(){
    this.homeService.addHome(this.home).subscribe(
      (data)=>{
        this.router.navigate(['homes']);
      }
    );
  }


  goToHome(){
    this.router.navigate(['homes']);
  }



}
