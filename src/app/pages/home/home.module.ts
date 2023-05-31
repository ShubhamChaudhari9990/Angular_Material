import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class HomeModule { }
