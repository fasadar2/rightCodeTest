import {Component, Input, OnInit} from "@angular/core";
import {Item} from "../models/item";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit{
  @Input() items: Item[] | undefined = undefined;
  ngOnInit() {
    console.log(this.items)
  }
}
