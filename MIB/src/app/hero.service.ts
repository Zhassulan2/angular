import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  /*
   * Синхронный
   * getHeroes(): Hero[] {
   *  return HEROES;
   * }
   *
   * Асинхронный
   * getHeroes(): Observable<Hero[]> {
   *  return of(HEROES);
   * }
   * 
  */

  //Асинхронный
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {

    let key = 'Item 1';
    localStorage.setItem(key, 'Value');

    this.getHeroes();
  }

}
