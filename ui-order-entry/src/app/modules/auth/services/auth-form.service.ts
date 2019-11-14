import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OfferModel} from '../../../models/offer.model';
import {UserModel} from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {

  constructor(private http: HttpClient) {
  }
  addUser(user: UserModel): Promise<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return  new Promise((resolve, reject) => {
      this.http.get<OfferModel[]>(`http://localhost:3000/users/?email=${user.email}`).subscribe(
        result => {
          if (result.length === 0) {
            this.http.post<UserModel>('http://localhost:3000/users', JSON.stringify(user), {headers}).subscribe();
            resolve(user);
          } else {
            reject('That email is taken, please try another');
          }
        });
    });
  }
}
