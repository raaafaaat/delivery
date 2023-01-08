import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatComponent } from './creat/creat.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'plate/home',
    component: HomeComponent,
  },
  {
    path: 'plate/creat',
    component: CreatComponent,
  },
  {
    path: 'plate/edite',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlateRoutingModule { }
