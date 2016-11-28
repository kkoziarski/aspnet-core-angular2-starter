import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'ngnco-hero-detail',
  templateUrl: 'app/heroes/hero-detail.component.html',
  styleUrls: ['app/heroes/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { hero: Hero }) => {
        this.hero = data.hero;
      });
  }

  /*
    //version without HeroDetailsResolve guard
    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.heroService.getHero(id)
          .then(hero => this.hero = hero);
      });
    }
  */

  save(): void {
    this.heroService.update(this.hero)
      .then(this.goBack);
  }

  goBack(): void {
    window.history.back();
  }
}
