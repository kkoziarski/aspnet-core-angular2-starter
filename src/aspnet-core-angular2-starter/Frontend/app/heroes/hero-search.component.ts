import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HeroSearchService } from '../services/hero-search.service';
import { Hero } from './hero';

@Component({
  selector: 'ancng-hero-search',
  templateUrl: 'app/heroes/hero-search.component.html',
  styleUrls: ['app/heroes/hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  isEmptyHeroes = true;//Observable<boolean>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) {
    this.isEmptyHeroes = true;//Observable.of<boolean>(true);
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => {   // switch to new observable each time
        if (term) {
          this.isEmptyHeroes = false;//Observable.of<boolean>(false);
          // return the http search observable
          return this.heroSearchService.search(term);
        }
        else {
          this.isEmptyHeroes = true; Observable.of<boolean>(true);
          // or the observable of empty heroes if no search term
          return Observable.of<Hero[]>([]);
        }
      })
      .catch(error => {
        this.isEmptyHeroes = true;//Observable.of<boolean>(true);
        // TODO: real error handling
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero): void {
    let link = ['/heroes', hero.id];
    this.router.navigate(link);
  }
}