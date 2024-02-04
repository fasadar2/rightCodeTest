import {Component, Input, OnInit} from "@angular/core";
import {Item} from "../models/item";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../services/item-service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {mark} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";
@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
})

export class ItemEditComponent implements OnInit{
  item:Item | undefined
  adress:string | undefined
  mark:number | undefined
  comment:string | undefined
  required = new FormControl('', [Validators.required]);
  constructor(private _Activatedroute: ActivatedRoute,private itemService: ItemService,private routing:Router) {
  }
  ngOnInit() {

    this.item = new Item(localStorage.getItem("id") || "",
      localStorage.getItem("name") || "",
      localStorage.getItem("adress") || "",
      localStorage.getItem("comment") || "",
      Number(localStorage.getItem("mark") || 0))
    if(this.item.id == "")
    {
      this.routing.navigate(['item'])
    }
    else
    {
      this.comment = this.item.comment
      this.adress = this.item.adress
      this.mark = this.item.mark
    }
  }
  editItemClick() {
    if(this.item?.adress != this.adress || this.item?.mark != this.mark || this.item?.comment != this.comment)
    {
      this.itemService.setItem(this.item)
      localStorage.setItem("isUpdate","1")
    }
    else
    {
      localStorage.setItem("isUpdate","0")
    }
      this.routing.navigate(['item'])
  }

}
