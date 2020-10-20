import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-cats-cards',
  templateUrl: './cats-cards.component.html',
  styleUrls: ['./cats-cards.component.css']
})
export class CatsCardsComponent implements OnInit {

  cats = [];

  constructor(private router: Router,
              private catsService: CatsService) { }

  ngOnInit(): void {
    this.cats = this.catsService.getCats();
  }

  toggleLike(id, value = true) {
    this.catsService.toggleLikeCat(id, value);
  }

}
