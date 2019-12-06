import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../../../shared/services/http-service.service';
import {MatDialog} from '@angular/material';
import {CategoryModel} from '../../../../models/category.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})

export class CategoryComponent implements OnInit {
  @Input()
  category: CategoryModel;
  status = 'show';
  categoryInput: string;

  constructor(private http: HttpService, private dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
  }

  modifyCategory() {
    this.categoryInput = this.category.category;
    this.status = 'modify';
  }

  deleteCategory() {
    console.log('delete' + this.categoryInput);
    this.http.deleteCategory(this.category.id).subscribe(() => {
      this.router.navigate(['admin']);
    });
  }

  updateCategory() {
    this.category.category = this.categoryInput;
    this.http.updateCategoryName(this.category).subscribe(() => {
      this.router.navigate(['admin']);
    });
  }

  cancelUpdate() {
    this.status = 'show';
  }
}
