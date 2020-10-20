import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cats-info',
  templateUrl: './cats-info.component.html',
  styleUrls: [ './cats-info.component.css' ],
})
export class CatsInfoComponent implements OnInit {

  cat;

  constructor( private catsService: CatsService,
               private router: Router,
               private activeRoute: ActivatedRoute,
               public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.cat = this.catsService.getCat(this.activeRoute.snapshot.paramMap.get('id'));
  }

  onRemoveClick(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { name: this.cat.name, id: this.cat._id },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result === 'string') {
        this.catsService.removeCat(result);
        this.router.navigate(['/cats']);
      }
    });
  }

}
