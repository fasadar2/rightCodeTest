import {Component,  OnInit} from "@angular/core";
import {Item} from "../models/item";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../services/item-service";
import {FormControl, FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
})

export class ItemEditComponent implements OnInit{
  item:Item | undefined
  myForm : FormGroup = new FormGroup({

    "adress": new FormControl("", Validators.required),
    "comment": new FormControl("", [
      Validators.pattern(/^(Хорошо|Плохо|Удовлетворительно|Отлично)$/),
      Validators.required,
    ]),
    "mark": new FormControl("", Validators.pattern("[2-5]{1}")),
  });
  constructor(private _Activatedroute: ActivatedRoute,private itemService: ItemService,private routing:Router) {
  }
  ngOnInit() {

    this.item = this.itemService.getTempItem()
    if(this.item === undefined)
    {
      this.routing.navigate(['item'])
    }
    else
    {
      this.myForm.setValue({adress:this.item.adress,comment:this.item.comment,mark:this.item.mark})
    }
  }
  onFormSubmit(): void {
    if(this.myForm.dirty && this.item != undefined)
    {
      this.item.adress = this.myForm.value['adress']
      this.item.mark = this.myForm.value['mark']
      this.itemService.setItem(this.item)
      this.itemService.isNotChanged = false
    }
    else
    {
      this.itemService.isNotChanged = true
    }
    this.routing.navigate(['item'])
  }
}
