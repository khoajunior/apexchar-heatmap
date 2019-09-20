import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  //hero: Hero;

  constructor() { 
    route: ActivatedRoute
     heroService: HeroService
     location: Location
  }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    
    
    
  }
  goBack(): void {
    
  }

}
