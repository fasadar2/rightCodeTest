import {Component,OnInit} from '@angular/core';
import {ItemService} from "../services/item-service";
import {Item} from "../models/item";
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{
 item:Item[] |undefined = undefined
  constructor(private itemService: ItemService) { }
  getItem(){
    this.itemService.getItem().subscribe({
      next: _ => {
        this.item = _.response.items
      }
    })

  }

  ngOnInit():void {
    this.getItem()
  }
}
