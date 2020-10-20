import { Injectable } from '@angular/core';
import catsArray from 'src/assets/cats.json'

@Injectable({
  providedIn: 'root',
})
export class CatsService {

  cats = catsArray;

  constructor() {
    this.cats = catsArray;
  }

  getCats() {
    return this.cats;
  }

  getCat(id) {
    return this.cats.find(cat => cat._id === id);
  }

  toggleLikeCat(id, add = true) {
    const catToLike = this.getCat(id);
    if (add) {
      catToLike.like++;
    } else {
      catToLike.like--;
    }
  }

  removeCat(id) {
    this.cats = this.cats.filter(cat => cat._id !== id);
  }

  saveCat(newCat) {
    if (newCat._id) {
      const oldCat = this.cats.find(cat => cat._id === newCat._id);
      oldCat.name = newCat.name;
      oldCat.img = newCat.img;
      oldCat.description = newCat.description;
      console.log(oldCat);
    } else {
      const lastCat = this.cats.sort((a, b) => +a._id - +b._id)[this.cats.length - 1];
      newCat._id = String(+lastCat._id + 1);
      this.cats.push({...newCat});
    }
  }

}
