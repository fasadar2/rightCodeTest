import {Component,OnInit} from '@angular/core';
import {ItemService} from "../services/item-service";
import {Item} from "../models/item";
import {Observable, Subscription, timeout} from "rxjs";
import {AjaxResponse} from "rxjs/ajax";

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
   if (localStorage.getItem("isUpdate") == "0")
   {
     this.item = new Item(localStorage.getItem("id") || "",
       localStorage.getItem("name") || "",
       localStorage.getItem("adress") || "",
       localStorage.getItem("comment") || "",
       Number(localStorage.getItem("mark") || 0))
   }
   else
   {
     this.sub = this.itemService.getItem().subscribe({
       next: _ => {
         console.log(_)
         this.item = _.response
       }
     })

   }
    if( this.item != undefined)
    {
      localStorage.setItem("id",this.item.id)
      localStorage.setItem("name",this.item.name.toString())
      localStorage.setItem("adress",this.item.adress.toString())
      localStorage.setItem("mark",this.item.mark.toString())
      localStorage.setItem("comment",this.item.comment.toString())
    }
  }

  ngOnInit():void {
   this.getItem()
    console.log(this.item)
  }
  ngOnDestroy():void
  {
    console.log("Отписались")
   this.sub?.unsubscribe()
  }
}
