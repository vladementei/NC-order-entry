import {Component, OnInit} from '@angular/core';
import {RxUnsubscribe} from '../../../../classes/rx-unsubscribe';
import {Observable} from 'rxjs';
import {HttpService} from '../../../shared/services/http-service.service';
import {LoaderService} from '../../../../services/loader-service.service';
import {takeUntil} from 'rxjs/operators';
import {CategoryModel} from '../../../../models/category.model';

@Component({
  selector: 'app-categories-control',
  templateUrl: './categories-control.component.html',
  styleUrls: ['./categories-control.component.less']
})
export class CategoriesControlComponent extends RxUnsubscribe implements OnInit {
  categoriesFromServer: CategoryModel[];
  isLoading: Observable<boolean> = this.loaderService.isLoading;
  constructor(private http: HttpService, private loaderService: LoaderService) {
    super();
  }
  ngOnInit(): void {
    this.isLoading.subscribe();
    this.http.getCategories()
      .pipe(
        takeUntil((this.destroy$))
      )
      .subscribe(
        (categoriesArray: CategoryModel[]) => {
          this.categoriesFromServer = categoriesArray;
        }
      );
  }
}
