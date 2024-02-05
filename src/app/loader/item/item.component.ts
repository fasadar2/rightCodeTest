import {Component, Input, OnInit} from "@angular/core";
import {Item} from "../../models/item";
import {ActivatedRoute, Router} from "@angular/router";
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

  }

  itemclick() {
    if (this.item != undefined)
    {
      this.itemService.setTempItem(this.item)
    }
    this.routing.navigate(['item/edit'])
  }

}
//[routerLink]="['item/edit']"
