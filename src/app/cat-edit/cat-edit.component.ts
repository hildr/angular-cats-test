import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatsService } from '../cats.service';

class Cat {
  _id?: string;
  name = '';
  img = '';
  description = '';
}

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css']
})
export class CatEditComponent implements OnInit {
  cat = new Cat();
  constructor(private catsService: CatsService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id =
      this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      this.cat = {...this.catsService.getCat(id)};
    }
  }

  onSubmit(): void {
    console.log(this.cat);
    this.catsService.saveCat(this.cat);
    this.router.navigate(['/cats']);
  }

  handleFilePick(evt){
    const { files } = evt.target;
    if (!files?.length) return;

    const [ file ] = files;

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (readerEvt) => {
        if (!readerEvt.target?.result) return;
        console.log(file);
        this.cat.img = `data:${file.type};base64,${btoa(readerEvt.target.result as string)}`;
      };
      reader.readAsBinaryString(file);
    }
  }

}
