import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ajax} from 'rxjs/ajax'
import {environment} from "../environments/environment";
import {Item} from "../models/item";
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  isNotChanged:boolean = false
  data:any
  constructor(private http: HttpClient) { }
  getItem(): Observable<any> {
    console.log("запрашиваем данные у мок сервера, ждемс")
    this.data = ajax(environment.serverUrl + "/get-item")
    console.log("получили запрашиваемые данные адыхаем")
    return this.data
  }
}
