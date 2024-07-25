import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Home } from '../home';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  searchInput: string = '';
  homes: Home[] = [];

  constructor(private homeService: HomeService, private router:Router){}
  
  ngOnInit(): void {
    this.fetchHomes();
  }


  fetchHomes(){
    this.homeService.getAllHomes().subscribe( 
      data => {
       this.homes =  data;

    });
  }

  deleteHome(id: any){
      this.homeService.deleteHomeById(id).subscribe(
        (data)=>{
          this.fetchHomes(); // re- fetch all my data
          this.router.navigate(['homes']);
        },
        error => console.log(error)
      );
  }



  gotToAddHome(){
    this.router.navigate(['addhome']);
    console.log('testing..');

  }

  goToViewDetails(id: any){
    this.router.navigate(['homedetail', id]);
  }

}
