import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlateRoutingModule } from './plate-routing.module';
import { HomeComponent } from './home/home.component';
import { CreatComponent } from './creat/creat.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CreatComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PlateRoutingModule,
    FormsModule
  ]
})
export class PlateModule { }
