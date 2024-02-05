import {Component,OnInit} from '@angular/core';
import {ItemService} from "../services/item-service";
import {Item} from "../models/item";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{
 item:Item |undefined = undefined
  sub : Subscription | undefined
  constructor(private itemService: ItemService) { }
  getItem(){
   if (this.itemService.isNotChanged)
   {
     this.item = this.itemService.getTempItem()
     console.log("Ничего не поменялось, адыхаем")
   }
   else
   {
     this.sub = this.itemService.getItem().subscribe({
       next: _ => {
         this.item = _
       }
     })
     this.itemService.isNotChanged = true

   }
  }

  ngOnInit():void {
   this.getItem()
  }
  ngOnDestroy():void
  {
    console.log("Отписались")
   this.sub?.unsubscribe()
  }
}
