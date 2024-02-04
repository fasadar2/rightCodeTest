import {Component,  Injectable, Input, OnInit} from "@angular/core";
import {Item} from "../../models/item";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {ItemService} from "../../services/item-service";



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  @Input() item: Item | undefined;
  constructor(private routing:Router,activatedRouter:ActivatedRoute,private itemService:ItemService) {
  }
  ngOnInit() {
    console.log(this.item)
  }

  itemclick() {
    if (this.item != undefined)
    {
      localStorage.setItem("id",this.item.id)
      localStorage.setItem("name",this.item.name.toString())
      localStorage.setItem("adress",this.item.adress.toString())
      localStorage.setItem("mark",this.item.mark.toString())
      localStorage.setItem("comment",this.item.comment.toString())
    }

    this.routing.navigate(['item/edit'])
  }

}
//[routerLink]="['item/edit']"
