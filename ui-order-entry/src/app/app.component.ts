import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

@Injectable({
  providedIn: 'root'
})
export class AppComponent implements OnInit {
  title = 'ui-order-entry';
  ngOnInit(): void {
  }
}
