import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { MatDialog } from '@angular/material/dialog';
import { AddRecordsComponent } from 'src/app/components/add-records/add-records.component';
import { UpdateRecordComponent } from 'src/app/components/update-record/update-record.component';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','actions'];
  displayedColumns: string[] = ['name', 'address', 'contact', 'qualification', 'action'];

  dataSource = [] as any
  constructor(private afs: AngularFirestore, private dailog: MatDialog) {

  }
  ngOnInit(): void {
    this.afs.collection("student").valueChanges({ idField: 'id' }).subscribe((res) => {
      this.dataSource = res
    })
  }
  addRecord(): void {
    const ref = this.dailog.open(AddRecordsComponent);
    ref.afterClosed().subscribe(res => {
      if (res) {
        this.afs.collection("student").add(res)        
      }
    });
  }
  delete(row: any) {
    this.afs.collection("student").doc(row.id).delete()
  }
  update(row : any){
    const updateRef = this.dailog.open(UpdateRecordComponent,{
      data: {row}
    });
    updateRef.afterClosed().subscribe(res => {
      this.afs.collection("student").doc(row.id).update(res)
    })
  }
}
