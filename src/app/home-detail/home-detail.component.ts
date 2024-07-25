import { Component, OnInit } from '@angular/core';
import { Home } from '../home';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrl: './home-detail.component.css'
})
export class HomeDetailComponent implements OnInit {

  id: any;
  home = new Home();

  constructor(private homeService:HomeService, private router:Router, private activatedRoute: ActivatedRoute ){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params[`id`];
    this.homeService.getHomeById(this.id).subscribe(
      data => this.home = data
      
   );
  }




  

}
