import {Component, HostListener, Inject, Input, OnInit} from "@angular/core";
import {Item} from "../../models/item";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit{
  @Input() items: Item[] | undefined = undefined;
  constructor(private router: Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit() {
    console.log(this.items)
  }

  itemclick(item:Item) {
    this.router.navigate(["item/edit"], {
      queryParams: {
        item: item
      },
    })
  }
}
