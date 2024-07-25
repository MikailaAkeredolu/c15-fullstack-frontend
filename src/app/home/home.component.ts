import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Home } from '../home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  searchInput: string = '';
  homes: Home[] = [];

  constructor(private homeService: HomeService){}
  
  ngOnInit(): void {
    this.fetchHomes();
  }


  fetchHomes(){
    this.homeService.getAllHomes().subscribe( 
      data => {
       this.homes =  data;

    });
  }



  gotToAddHome(){

  }

}
