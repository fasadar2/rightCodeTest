import {Injectable} from '@angular/core';
import {delay, Observable, Subscription, timeout} from 'rxjs';
import {ajax, AjaxResponse} from 'rxjs/ajax'
import {environment} from "../environments/environment";
import {Item} from "../models/item";
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  isNotChanged:boolean = false
  data:any
  tempItem:Item | undefined
  getItem(): Observable<any> {
    console.log("запрашиваем данные у мок сервера, ждемс")
    this.data = ajax(environment.jsonServerurl)
    localStorage.setItem("isUpdate", "0")
    console.log("получили запрашиваемые данные адыхаем")
    return this.data
  }
  async setItem(item: Item | undefined) {
    console.log("Пытаемся послать то что пришло")
    const apiData: Subscription = ajax({
      url: environment.jsonServerurl,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        id: item?.id,
        name: item?.name,
        adress: item?.adress,
        comment: item?.comment,
        mark: item?.mark
      }
    }).subscribe();
    await delay(500);
    apiData.unsubscribe()
    console.log("отписались")
    return apiData
  }

}
