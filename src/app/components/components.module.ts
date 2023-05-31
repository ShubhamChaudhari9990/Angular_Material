import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecordsComponent } from './add-records/add-records.component';
import { MaterialModule } from '../modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UpdateRecordComponent } from './update-record/update-record.component';



@NgModule({
  declarations: [
    AddRecordsComponent,
    UpdateRecordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
