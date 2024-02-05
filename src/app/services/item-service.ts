import {Injectable} from '@angular/core';
import { Observable, of} from 'rxjs';
import {Item} from "../models/item";
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  isNotChanged:boolean = false
  dataItem = new Item("1", "Амир", "Улица пушкина дом колотушкина", "Удовлетворительно", 2)
  data$ = of(this.dataItem)
  private tempItem:Item | undefined
  getItem(): Observable<any> {
    console.log("запрашиваем данные у мок сервера, ждемс")
    console.log("получили запрашиваемые данные адыхаем")
    return this.data$
  }
  async setItem(item: Item | undefined) {
    console.log("Пытаемся послать то что пришло")
    if (item != undefined)
    {
      this.dataItem = item
    }
  }
  setTempItem(item:Item)
  {
    if (item != undefined)
    {
      this.tempItem = item
    }
  }
  getTempItem()
  {
      return this.tempItem
  }
}
