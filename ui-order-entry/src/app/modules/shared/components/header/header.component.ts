import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {
  user: UserModel;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user_info'));
    console.log(this.user);
  }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('user_info');
    window.location.reload();
  }
}
