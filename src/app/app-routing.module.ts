import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { UpdateComponent } from './update/update.component';
import { LocaldataComponent } from './localdata/localdata.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path:'table', component:TableComponent },
  {path:'table/:id',component:UpdateComponent},
  {path:'form', component:FormComponent },
  {path:'localData',component:LocaldataComponent},
  {path:'show',component:ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
