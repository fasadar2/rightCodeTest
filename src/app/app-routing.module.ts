import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoaderComponent} from "./loader/loader.component";
import {ItemEditComponent} from "./itemEdit/item-edit.component";

const routes: Routes = [
  {path: "item", component: LoaderComponent},
  {path: "item/edit", component: ItemEditComponent},
  {path: "**", redirectTo: "item"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
